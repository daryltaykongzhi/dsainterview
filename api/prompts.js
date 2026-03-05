// ============================================================================
// DSA PROMPTS.JS - WITH REAL PAST QUESTIONS
// ============================================================================

// Database of real past DSA interview questions by talent area
const PAST_QUESTIONS = {
    // ===== SPORTS =====
    
    "Basketball": [
        "What position do you play and why does it suit your strengths?",
        "Tell me about your most memorable game or tournament experience.",
        "How do you handle pressure during crucial moments in a game?",
        "What's your training routine like outside of team practice?",
        "Who's your basketball role model and what have you learned from them?",
        "How do you contribute to team dynamics beyond scoring points?"
    ],
    
    "Football": [
        "What position do you play and what makes you effective in that role?",
        "Describe a match where your team was losing and you helped turn it around.",
        "How do you maintain your fitness outside of team training?",
        "What tactical aspects of football interest you most?",
        "Tell me about your biggest football achievement so far."
    ],
    
    "Volleyball": [
        "What position do you specialize in?",
        "How do you communicate effectively with teammates during a match?",
        "Tell me about a time you had to overcome a setback in your sport.",
        "What's your understanding of volleyball strategy and tactics?",
        "How do you prepare mentally before important games?"
    ],
    
    "Swimming": [
        "What's your main stroke and why do you prefer it?",
        "How do you push through mental barriers during races?",
        "Describe your training schedule and how you balance it with academics.",
        "What are your personal best times and what goals do you have?",
        "How do you approach individual races versus team relays?"
    ],
    
    "Badminton": [
        "Singles or doubles - which do you prefer and why?",
        "Tell me about your most challenging opponent and what you learned.",
        "How do you analyze and adapt your game plan during matches?",
        "What aspects of badminton do you find most mentally demanding?",
        "Describe your training regimen and tournament experience."
    ],
    
    "Track and Field": [
        "What event(s) do you compete in and why?",
        "How do you prepare for competitions mentally and physically?",
        "Tell me about a time you achieved a personal best - what led to it?",
        "How do you handle the individual nature of track and field?",
        "What's your understanding of training periodization?"
    ],
    
    // ===== PERFORMING ARTS - MUSIC =====
    
    "Music - Piano": [
        "What ABRSM or equivalent grade are you currently at?",
        "Tell me about the most challenging piece you've mastered and how you approached it.",
        "How do you overcome performance anxiety before recitals or exams?",
        "Why did you choose piano over other instruments?",
        "What's your daily practice routine and how do you stay motivated?",
        "Describe a performance you're particularly proud of."
    ],
    
    "Music - Guitar": [
        "What styles or genres of guitar do you play?",
        "Tell me about a performance that challenged you.",
        "How do you approach learning a difficult new piece?",
        "What's your experience with ensemble or band playing?",
        "Who are your musical influences?"
    ],
    
    "Chinese Orchestra": [
        "What instrument do you play in the orchestra?",
        "Tell me about your SYF Arts Presentation experience.",
        "How do you balance individual practice with orchestra rehearsals?",
        "What's your role within your section of the orchestra?",
        "Describe a challenging piece the orchestra performed."
    ],
    
    "Concert Band": [
        "What instrument do you play and what role do you have in the band?",
        "Tell me about your SYF journey and achievements.",
        "How do you contribute to the ensemble beyond playing your part?",
        "Describe a particularly challenging piece you've performed.",
        "What makes a good band member beyond technical ability?"
    ],
    
    "Choir": [
        "What voice part do you sing?",
        "Describe your SYF Arts Presentation experience and preparation.",
        "How do you maintain vocal health while rehearsing regularly?",
        "Tell me about a challenging choral piece you've performed.",
        "What's your understanding of choral singing technique?"
    ],
    
    "String Orchestra": [
        "What string instrument do you play and why?",
        "Tell me about your orchestra's recent performances or achievements.",
        "How do you work on ensemble skills versus solo technique?",
        "Describe your practice routine.",
        "What repertoire has challenged you most?"
    ],
    
    // ===== PERFORMING ARTS - DANCE & DRAMA =====
    
    "Dance": [
        "What dance style(s) are you trained in?",
        "Tell me about a challenging choreography you've performed.",
        "How do you express emotion and storytelling through dance?",
        "What's your experience with competitions or SYF?",
        "How do you prevent injuries and maintain fitness for dance?"
    ],
    
    "Chinese Dance": [
        "What type of Chinese dance do you specialize in?",
        "Tell me about your SYF experience and achievements.",
        "How do you balance traditional technique with artistic expression?",
        "Describe a memorable performance.",
        "What cultural significance does Chinese dance hold for you?"
    ],
    
    "Drama": [
        "What theatrical productions have you been part of?",
        "Tell me about a challenging role you've played.",
        "How do you approach character development and preparation?",
        "What's your experience with SYF Arts Presentation?",
        "How do you handle stage fright or performance anxiety?"
    ],
    
    // ===== VISUAL ARTS =====
    
    "Art": [
        "What mediums and techniques do you work with most?",
        "Walk me through your creative process for a recent artwork.",
        "Tell me about your SYF Art Exhibition submission.",
        "Which artists or art movements inspire your work?",
        "How do you handle creative blocks or artistic challenges?",
        "Describe your portfolio and which piece you're most proud of."
    ],
    
    "Design": [
        "What areas of design interest you most?",
        "Tell me about a design project you're proud of.",
        "How do you approach the design thinking process?",
        "What software and tools are you proficient in?",
        "How do you incorporate feedback into your design work?"
    ],
    
    // ===== LEADERSHIP & UNIFORMED GROUPS =====
    
    "Student Leadership": [
        "What leadership position(s) did you hold and what were your responsibilities?",
        "Describe a challenging situation you faced as a leader and how you resolved it.",
        "How do you motivate team members who seem unmotivated or resistant?",
        "What leadership style do you adopt and why?",
        "Tell me about an initiative or project you started and led.",
        "How has your leadership experience shaped your character?"
    ],
    
    "NPCC": [
        "What's your current rank and how did you achieve it?",
        "Tell me about your unit's Best Unit Competition achievement and your role.",
        "Describe a camp or activity where you demonstrated leadership.",
        "How has NPCC shaped your character and values?",
        "What's the most valuable lesson you've learned in NPCC?",
        "How do you balance NPCC commitments with academics?"
    ],
    
    "NCC": [
        "What rank have you achieved and what does it represent?",
        "Tell me about a challenging training or camp experience.",
        "How has NCC developed your discipline and resilience?",
        "Describe a leadership role you've taken in your unit.",
        "What military skills or knowledge have you gained?"
    ],
    
    "SJAB": [
        "What first aid certifications do you hold?",
        "Tell me about your experience providing first aid at events.",
        "How has SJAB developed your ability to stay calm under pressure?",
        "Describe a situation where you had to make quick medical decisions.",
        "What leadership roles have you held in your unit?"
    ],
    
    // ===== ACADEMIC TALENT =====
    
    "Mathematics": [
        "What mathematics competitions have you participated in?",
        "Tell me about your Singapore Mathematical Olympiad experience.",
        "What area of mathematics interests you most and why?",
        "Describe a challenging math problem you solved.",
        "How do you approach learning new mathematical concepts?"
    ],
    
    "Science": [
        "What science Olympiads have you participated in?",
        "Tell me about any research projects you've conducted.",
        "What scientific discovery or concept fascinates you most?",
        "Describe your experience with science competitions.",
        "How do you approach scientific problem-solving?"
    ],
    
    "Debate": [
        "What debate competitions have you participated in?",
        "Tell me about a debate topic that challenged you.",
        "How do you prepare for debates and research arguments?",
        "What's your experience with different debate formats?",
        "How has debate developed your critical thinking?"
    ],
};

// Helper function to get real examples for a talent area
function getRealExamples(talentArea) {
    // Try exact match first
    let examples = PAST_QUESTIONS[talentArea];
    
    // If no exact match, try partial match
    if (!examples) {
        const partialKey = Object.keys(PAST_QUESTIONS).find(key => 
            talentArea.toLowerCase().includes(key.toLowerCase()) ||
            key.toLowerCase().includes(talentArea.toLowerCase())
        );
        examples = partialKey ? PAST_QUESTIONS[partialKey] : null;
    }
    
    if (!examples || examples.length === 0) {
        return "No specific historical questions available for this talent area. Generate appropriate DSA-JC interview questions based on general best practices for talent-based admissions.";
    }
    
    return examples.map((q, i) => `${i + 1}. ${q}`).join("\n");
}

// ============================================================================
// PROMPTS
// ============================================================================

export const INTERVIEW_SYSTEM_PROMPT = `
You are a professional DSA-JC Interviewer for {{poly}}. 

HISTORICAL CONTEXT:
Here are real questions students have been asked for {{course}} DSA interviews in the past:
{{real_examples}}

YOUR MISSION:
Generate 7 interview questions for a 16-year-old Secondary 4 student applying through DSA-JC.

- Use the historical context above as a guide for the "vibe" and difficulty level
- Ensure the questions are specific to {{course}} talent area at {{poly}}
- Mix general "passion/motivation" questions with specific "achievement/experience" questions
- Focus on their talent development, dedication, and how they'll contribute to the JC program
- Questions should assess both their skill level and character/values
- Make questions feel natural and conversational, not robotic
- Consider that this is a talent-based admission, so focus on their abilities and commitment

You must respond in this JSON format:
{
  "questions": ["Question 1", "Question 2", "Question 3", "Question 4", "Question 5", "Question 6", "Question 7"]
}
`;

export const FEEDBACK_SYSTEM_PROMPT = `
You are an expert DSA-JC interview coach helping students prepare for their talent-based admissions interviews.

CRITICAL GUARDRAIL:
- If the answer is gibberish, random characters, or completely unrelated to the interview question, set a key 'is_gibberish' to true and leave strengths/improvement empty. Otherwise, set 'is_gibberish' to false.
- Instead, respond with: {"feedback": "I didn't quite catch that. Could you please provide a more detailed answer so I can give you helpful feedback?"}

If the answer is valid, analyze this:
Question: "{{question}}"
Student's Answer: "{{answer}}"

Evaluate their response considering:
- Demonstration of genuine passion for their talent area
- Specific examples, achievements, and experiences mentioned
- Connection to their goals and the JC program
- Depth of reflection and self-awareness
- Communication clarity and confidence

Provide constructive feedback with:
- A few specific strengths they demonstrated in their answer
- Concrete areas for improvement with actionable suggestions
- Use a friendly but honest and constructive tone
- Focus on how they can better showcase their talent and fit for DSA-JC

You must respond in JSON format:
{
  "strengths": "What they did well in their answer...",
  "areas_for_improvement": "Specific ways they can improve their answer..."
}
`;

// Export the helper function
export { getRealExamples };
