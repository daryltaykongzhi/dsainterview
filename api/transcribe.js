export const config = { api: { bodyParser: false } }

export default async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).end()

  // Forward the raw multipart audio blob to Groq
  const groqRes = await fetch(
    "https://api.groq.com/openai/v1/audio/transcriptions",
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.GROQ_API_KEY}`,
        // Do NOT set Content-Type — let it pass through as-is with the boundary
        ...Object.fromEntries(
          Object.entries(req.headers).filter(([k]) =>
            ["content-type", "content-length"].includes(k)
          )
        ),
      },
      body: req, // stream the raw request body straight to Groq
      duplex: "half",
    }
  )

  const data = await groqRes.json()
  res.status(groqRes.status).json(data)
}
