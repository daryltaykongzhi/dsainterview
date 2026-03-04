
import { INTERVIEW_SYSTEM_PROMPT } from './prompts.js';

export default async function handler(req, res) {
    // 1. Handle CORS Preflight
    res.setHeader('Access-Control-Allow-Credentials', true);
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
    res.setHeader('Access-Control-Allow-Headers', 'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version, Authorization');

    if (req.method === 'OPTIONS') {
        return res.status(200).end();
    }

    // 2. Only allow POST
    if (req.method !== 'POST') {
        return res.status(405).json({ error: "Method not allowed" });
    }

    try {
        const { course, poly } = req.body || {};

        if (!course || !poly) {
            return res.status(400).json({ error: "Missing course or poly input" });
        }

        // 3. Prepare the prompt with user inputs
        // We replace the placeholders in your prompt.js with actual values
        const formattedPrompt = INTERVIEW_SYSTEM_PROMPT
            .replace(/{{course}}/g, course)
            .replace(/{{poly}}/g, poly);

        // 4. Call Groq AI
        const response = await fetch("https://api.groq.com/openai/v1/chat/completions", {
            method: "POST",
            headers: {
                "Authorization": `Bearer ${process.env.GROQ_API_KEY}`,
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                model: "llama-3.1-8b-instant",
                messages: [
                    { role: "system", content: formattedPrompt },
                    { role: "user", content: `Generate questions for a student applying to ${course} at ${poly}.` }
                ],
                response_format: { type: "json_object" },
                temperature: 0.7
            }),
        });

        const data = await response.json();

        // Safety check for AI response
        if (!data.choices || data.choices.length === 0) {
            throw new Error("AI failed to generate a response.");
        }

        const aiOutput = JSON.parse(data.choices[0].message.content);
        
        // 5. Send back the questions
        return res.status(200).json(aiOutput);

    } catch (err) {
        console.error("Interview API Error:", err.message);
        return res.status(500).json({ 
            error: "Failed to generate questions", 
            details: err.message 
        });
    }
}
