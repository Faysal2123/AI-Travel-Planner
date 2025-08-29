import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    const { destination, budget, days } = await request.json();
    
    // In a real application, you would call your backend API here
    // For this example, we'll simulate an API call with a timeout
    const response = await fetch('http://localhost:3001/api/generate-itinerary', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ destination, budget, days }),
    });
    
    if (!response.ok) {
      throw new Error('Failed to generate itinerary');
    }
    
    const itinerary = await response.json();
    return NextResponse.json(itinerary);
  } catch (error) {
    console.error('Error generating itinerary:', error);
    return NextResponse.json(
      { error: 'Failed to generate itinerary' },
      { status: 500 }
    );
  }
}