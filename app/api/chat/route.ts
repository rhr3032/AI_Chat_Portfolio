import { GoogleGenerativeAI } from "@google/generative-ai"
import { NextRequest, NextResponse } from "next/server"

export async function POST(req: NextRequest) {
  try {
    const { message } = await req.json()

    if (!message) {
      return NextResponse.json({ error: "Message is required" }, { status: 400 })
    }

    const apiKey = process.env.GEMINI_API_KEY
    
    if (!apiKey) {
      console.error("GEMINI_API_KEY is not set")
      return NextResponse.json({ error: "Gemini API key not configured" }, { status: 500 })
    }

    // Initialize the AI with the API key
    const genAI = new GoogleGenerativeAI(apiKey)
    
    // Initialize the model
    const model = genAI.getGenerativeModel({
      model: "gemini-2.5-flash",
      generationConfig: {
        temperature: 0.9,
        topK: 1,
        topP: 1,
        maxOutputTokens: 2048,
      },
    })

    // Create context about the portfolio
    const context = `You are an AI assistant for Raisul R.'s portfolio website. You should help visitors learn about Raisul, who is a Web & UI/UX Designer with 5+ years of experience. Key information:
- Full Name: Raisul R. (rhr3032)
- Role: Web & UI/UX Designer
- Experience: 5+ years
- Location: Dhaka, Bangladesh
- Skills: Figma, Adobe XD, Sketch, Photoshop, HTML, CSS, JavaScript, React, Tailwind, User Research, Wireframing, Prototyping, Testing
- Projects: E-Commerce Platform, SaaS Dashboard, Mobile App Design, Brand Identity
- Stats: 50+ Clients Globally, 100+ Projects Done
- Contact: contact, Twitter: @raisulr_design, LinkedIn: /in/raisulr, GitHub: @raisulr
- Interests: Exploring coffee shops, playing video games, experimenting with 3D art
- Achievements: Featured on Dribbble & Behance
- Open to remote work and relocation

Answer questions in a friendly, professional tone. Keep responses concise (2-3 sentences) unless more detail is requested.`

    const prompt = `${context}\n\nUser question: ${message}\n\nYour response:`

    // Generate response
    const result = await model.generateContent(prompt)
    const response = await result.response
    const text = response.text()

    return NextResponse.json({ response: text })
  } catch (error: any) {
    console.error("Error in chat API:", error)
    const errorMessage = error?.message || "Failed to process chat request"
    return NextResponse.json({ 
      error: errorMessage,
      details: error?.toString() 
    }, { status: 500 })
  }
}
