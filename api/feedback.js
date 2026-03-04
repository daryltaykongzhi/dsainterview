import { FEEDBACK_SYSTEM_PROMPT } from './prompts.js';

export default async function handler(req, res) {
    if (req.method === 'OPTIONS') return res.status(200).end();
    if (req.method !== 'POST') return res.status(405).json({ error: "Method not allowed" });

    try {
        const { question, answer } = req.body || {};
        if (!question || !answer) return res.status(400).json({ error: "Missing data" });

        const formattedPrompt = FEEDBACK_SYSTEM_PROMPT
            .replace('{{question}}', question)
            .replace('{{answer}}', answer);

        const response = await fetch("https://api.groq.com/openai/v1/chat/completions", {
            method: "POST",
            headers: {
                "Authorization": `Bearer ${process.env.GROQ_API_KEY}`,
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                model: "llama-3.1-8b-instant",
                messages: [{ role: "system", content: formattedPrompt }],
                response_format: { type: "json_object" },
                temperature: 0.2 
            }),
        });

        const data = await response.json();
        
        // Safety check: Make sure the API actually returned choices
        if (!data.choices || !data.choices[0]) {
            throw new Error("AI API returned an empty response");
        }

        const aiRawContent = data.choices[0].message.content;

        try {
            const parsed = JSON.parse(aiRawContent);

            // 1. GIBBERISH CHECK
            if (parsed.is_gibberish === true || (!parsed.strengths && !parsed.feedback && !parsed.strength)) {
                return res.status(200).json({ 
                    feedback: "I didn't quite catch that. Could you try answering the question again with a bit more detail?" 
                });
            }

            // 2. Helper to flatten arrays
            const flatten = (val) => {
                if (Array.isArray(val)) return val.join(" ");
                if (typeof val === 'object' && val !== null) return JSON.stringify(val);
                return String(val || "");
            };

            // 3. SMART SEARCH for keys
            const strengthsVal = parsed.strengths || parsed.strength;
            const improvementVal = 
                parsed["areas for improvement"] || 
                parsed["areas_for_improvement"] || 
                parsed.improvement || 
                parsed.ways_to_improve;

            // 4. Final Formatting
            if (strengthsVal || improvementVal) {
                const s = flatten(strengthsVal) || "Good starting point.";
                const i = flatten(improvementVal) || "Try to elaborate more on your specific role.";
                return res.status(200).json({ feedback: `Strengths:\n${s}\n\nWays to Improve:\n${i}` });
            }

            // 5. Fallback for generic feedback key
            return res.status(200).json({ feedback: flatten(parsed.feedback || aiRawContent) });

        } catch (parseError) {
            // If JSON parsing fails, the AI likely sent raw text
            return res.status(200).json({ feedback: String(aiRawContent) });
        }

    } catch (error) {
        // This catches network errors or API failures
        console.error("Critical Feedback Error:", error.message);
        return res.status(500).json({ error: "Server Error", details: error.message });
    }
}