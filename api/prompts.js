// ============================================================================
// DSA-JC INTERVIEW QUESTIONS - GENERAL + TALENT-SPECIFIC
// ============================================================================

// General questions asked across all DSA interviews
const GENERAL_QUESTIONS = [
   "Tell me more about yourself",
"What are your strengths and weaknesses",
"What is your biggest life achievement?",
"Why should we pick you over other applicants?",
"What can you contribute to our school's (CCA)",
"Why did you pick our schools's (CCA / Subject stream)",
"If you got an offer from another institution, which offer would you choose and why",
"What do you think contributed to your grades in your past exams?",
"Do you think you will be able to manage your time in coping as a JC student and with your intensive CCA schedules? If so, how?",
"What are your aspirations after joining (jc)?",
];

// Talent-specific questions by area
const TALENT_QUESTIONS = {
    // === SPORTS ===
    "Basketball": [
        "What position do you play and why?",
        "Tell me about your most memorable game.",
        "How do you prepare physically and mentally for competitions?",
        "Describe your basketball training routine.",
        "Who is your basketball role model and why?",
        "How do you communicate with teammates during games?"
    ],
    
    "Football": [
        "What position do you play best?",
        "Tell me about a crucial game moment where you made a difference.",
        "How has football taught you about teamwork?",
        "Describe your training and fitness regime.",
        "Who inspires you in football?",
        "How do you handle losing a match?"
    ],
    
    "Volleyball": [
        "What's your primary position?",
        "Tell me about your most challenging match.",
        "How do you contribute to team morale?",
        "Describe your training schedule.",
        "What skills are you currently working to improve?"
    ],
    
    "Swimming": [
        "What strokes and distances do you specialize in?",
        "Tell me about your personal best times.",
        "How do you train outside of official practice?",
        "Describe your pre-race routine.",
        "How do you push through mental barriers during races?"
    ],
    
    "Badminton": [
        "Singles or doubles - which do you prefer and why?",
        "Tell me about a tough opponent you faced.",
        "How has badminton developed your mental toughness?",
        "Describe your footwork and conditioning training.",
        "What's your game strategy?"
    ],
    
    "Track and Field": [
        "What events do you compete in?",
        "Tell me about your personal records.",
        "How do you train for your events?",
        "Describe your race/competition strategy.",
        "How do you handle pre-race nerves?"
    ],
    
    // === MUSIC ===
    "Music - Piano": [
        "What grade are you at and what pieces can you play?",
        "Tell me about a challenging piece you've mastered.",
        "Do you prefer classical or contemporary music?",
        "Have you performed in public? How was it?",
        "How do you practice effectively?"
    ],
    
    "Music - Guitar": [
        "What styles of guitar do you play?",
        "Tell me about your most challenging piece.",
        "Have you played in a band or ensemble?",
        "How do you learn new songs or techniques?",
        "Who are your guitar influences?"
    ],
    
    "Music - Chinese Orchestra": [
        "What instrument do you play?",
        "Tell me about your orchestra experience.",
        "What's the most complex piece you've performed?",
        "How do you contribute to ensemble harmony?",
        "Describe a memorable performance."
    ],
    
    "Music - Concert Band": [
        "What instrument do you play and why did you choose it?",
        "Tell me about your band experience.",
        "What's your role in the band?",
        "Describe a challenging performance.",
        "How do you practice individually vs. with the band?"
    ],
    
    "Music - Choir": [
        "What vocal range/part do you sing?",
        "Tell me about your choir performances.",
        "How do you maintain vocal health?",
        "Describe singing in harmony with others.",
        "What's your most memorable choir experience?"
    ],
    
    "Music - String Orchestra": [
        "What string instrument do you play?",
        "Tell me about your orchestra experience.",
        "What's the most difficult piece you've performed?",
        "How do you blend with other sections?",
        "Describe your practice routine."
    ],
    
    // === PERFORMING ARTS ===
    "Dance": [
        "What dance styles do you specialize in?",
        "Tell me about your most challenging performance.",
        "How do you choreograph or learn new routines?",
        "What does dance expression mean to you?",
        "Describe your training schedule."
    ],
    
    "Chinese Dance": [
        "What styles of Chinese dance have you learned?",
        "Tell me about a memorable performance.",
        "How do you express cultural elements through dance?",
        "What's the most difficult technique you've mastered?",
        "How do you prepare for competitions?"
    ],
    
    "Drama": [
        "What roles have you played?",
        "Tell me about your most challenging character.",
        "How do you prepare for a role?",
        "What does acting mean to you?",
        "Describe your theater experience."
    ],
    
    // === VISUAL ARTS ===
    "Art": [
        "What art mediums do you work with?",
        "Walk me through your portfolio's best piece.",
        "Tell me about your creative process.",
        "Which artists inspire you?",
        "How do you handle creative blocks?"
    ],
    
    "Design": [
        "What design work have you done?",
        "Tell me about a design project you're proud of.",
        "What design software can you use?",
        "How do you approach a new design brief?",
        "Which designers influence your work?"
    ],
    
    // === LEADERSHIP & SERVICE ===
    "Student Leadership": [
        "What leadership positions have you held?",
        "Tell me about a difficult decision you made as a leader.",
        "How do you motivate and inspire others?",
        "Describe your leadership style.",
        "What did you learn from a leadership failure?",
       "Who do you look up to?"
    ],
    
    "NPCC": [
        "What rank have you achieved?",
        "Tell me about your NPCC training and activities.",
        "How has NPCC shaped your character?",
        "What leadership roles have you taken?",
        "Describe a challenging NPCC experience."
    ],
    
    "NCC": [
        "What rank are you and what does it represent?",
        "Tell me about your NCC camps and training.",
        "How has NCC developed your discipline?",
        "What leadership positions have you held?",
        "Describe your most memorable NCC activity."
    ],
    
    "SJAB": [
        "What training have you completed?",
        "Tell me about providing first aid in a real situation.",
        "How has SJAB taught you about service?",
        "What roles have you taken in SJAB?",
        "Describe a challenging medical scenario you handled."
    ],
    
    // === ACADEMIC ===
    "Mathematics": [
        "What math competitions have you joined?",
        "Tell me about a complex problem you solved.",
        "What area of math interests you most?",
        "How do you approach difficult math problems?",
        "Do you help peers with math?"
    ],
    
    "Science": [
        "What science projects or research have you done?",
        "Tell me about a science competition you joined.",
        "What scientific field interests you most?",
        "Describe an experiment that fascinated you.",
        "How do you apply scientific thinking?"
    ],
    
    "Debate": [
        "What debate format do you compete in?",
        "Tell me about your most challenging debate.",
        "How do you research and prepare?",
        "What's your strongest debate skill?",
        "Describe thinking on your feet during rebuttals."
    ]
};

// Retrieve questions with logging
function getRealExamples(talentArea) {
    console.log("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━");
    console.log(`🔍 DSA Interview Questions: "${talentArea}"`);
    
    const generalCount = GENERAL_QUESTIONS.length;
    const talentQuestions = TALENT_QUESTIONS[talentArea];
    
    // Always include general questions
    let result = "GENERAL QUESTIONS (asked to all DSA applicants):\n";
    result += GENERAL_QUESTIONS.map((q, i) => `${i + 1}. ${q}`).join("\n");
    result += "\n\n";
    
    // Add talent-specific if available
    if (talentQuestions && talentQuestions.length > 0) {
        console.log(`✅ FOUND: ${generalCount} general + ${talentQuestions.length} talent-specific`);
        result += `TALENT-SPECIFIC QUESTIONS for ${talentArea}:\n`;
        result += talentQuestions.map((q, i) => `${i + 1}. ${q}`).join("\n");
    } else {
        console.log(`⚠️ PARTIAL: ${generalCount} general questions only`);
        console.log(`💡 No talent-specific questions for "${talentArea}" - AI will generate`);
        result += `TALENT-SPECIFIC: None available - generate appropriate questions for ${talentArea}`;
    }
    
    console.log("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━");
    return result;
}

// ============================================================================
// OPTIMIZED PROMPTS
// ============================================================================

export const INTERVIEW_SYSTEM_PROMPT = `You are a DSA-JC interviewer for {{jc}}.

PAST QUESTIONS:
{{real_examples}}

Generate exactly 7 interview questions for a Sec 4 student applying for DSA through {{talentArea}}.

CRITICAL: Use this exact mix:
- 4 questions from GENERAL QUESTIONS pool
- 3 questions from TALENT-SPECIFIC pool

Natural, conversational tone. Appropriate for 16-year-olds.

Respond in JSON:
{"questions": ["Q1", "Q2", "Q3", "Q4", "Q5", "Q6", "Q7"]}`;

export const FEEDBACK_SYSTEM_PROMPT = `You are a DSA-JC interview coach.

FIRST: Check if answer is gibberish, random characters, emoji spam, single words, or completely unrelated to question.

If gibberish: Respond ONLY with:
{"feedback": "Please provide a proper answer to receive feedback."}

If valid answer to:
Question: "{{question}}"
Answer: "{{answer}}"

Provide brief, actionable feedback in JSON:
{
  "strengths": "What they did well...",
  "areas_for_improvement": "How to improve..."
}`;

export { getRealExamples };
