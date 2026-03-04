// IF YOU CHOOSE OPTION 2: Update interview.js with these changes

import { INTERVIEW_SYSTEM_PROMPT } from './prompts.js';

export default async function handler(req, res) {
    // CORS headers...
    res.setHeader('Access-Control-Allow-Credentials', true);
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
    res.setHeader('Access-Control-Allow-Headers', 'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version, Authorization');
    
    if (req.method === 'OPTIONS') {
        return res.status(200).end();
    }
    
    if (req.method !== 'POST') {
        return res.status(405).json({ error: "Method not allowed" });
    }
    
    try {
        const { talentArea, jc } = req.body || {};
        
        if (!talentArea || !jc) {
            return res.status(400).json({ error: "Missing talent area or JC input" });
        }
        
        // 🔥 OPTION 2 CHANGE: Replace {{talentArea}} and {{jc}} instead of {{course}} and {{poly}}
        const formattedPrompt = INTERVIEW_SYSTEM_PROMPT
            .replace(/{{talentArea}}/g, talentArea)
            .replace(/{{jc}}/g, jc);
        
        // Call Groq AI
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
                    { role: "user", content: `Generate DSA interview questions for a student applying to ${jc} for ${talentArea}.` }
                ],
                response_format: { type: "json_object" },
                temperature: 0.7
            }),
        });
        
        const data = await response.json();
        
        if (!data.choices || data.choices.length === 0) {
            throw new Error("AI failed to generate a response.");
        }
        
        const aiOutput = JSON.parse(data.choices[0].message.content);
        
        return res.status(200).json(aiOutput);
        
    } catch (err) {
        console.error("Interview API Error:", err.message);
        return res.status(500).json({ 
            error: "Failed to generate questions", 
            details: err.message 
        });
    }
}
