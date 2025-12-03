import { NextResponse } from "next/server"

export async function GET() {
  try {
    const apiKey = process.env.GEMINI_API_KEY
    
    if (!apiKey) {
      return NextResponse.json({ error: "API key not found" }, { status: 500 })
    }

    // List available models using v1beta
    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models?key=${apiKey}`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        }
      }
    )

    const data = await response.json()

    if (!response.ok) {
      return NextResponse.json({ 
        error: "Failed to list models",
        status: response.status,
        details: data
      }, { status: response.status })
    }

    // Filter models that support generateContent
    const generateModels = data.models?.filter((m: any) => 
      m.supportedGenerationMethods?.includes('generateContent')
    ).map((m: any) => ({
      name: m.name.replace('models/', ''), // Remove "models/" prefix
      displayName: m.displayName,
      description: m.description,
    })) || []

    return NextResponse.json({ 
      success: true,
      availableModels: generateModels,
      totalModels: generateModels.length,
      rawData: data.models // Full data for debugging
    })

  } catch (error: any) {
    return NextResponse.json({ 
      error: error.message,
      details: error.toString()
    }, { status: 500 })
  }
}