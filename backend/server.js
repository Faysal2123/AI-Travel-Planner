const express = require('express');
const cors = require('cors');
const OpenAI = require('openai');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3001;

// Initialize OpenAI
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

// Middleware
app.use(cors());
app.use(express.json());

// Generate itinerary endpoint
app.post('/api/generate-itinerary', async (req, res) => {
  try {
    const { destination, budget, days } = req.body;

    if (!destination || !budget || !days) {
      return res.status(400).json({ error: 'Missing required parameters' });
    }

    const prompt = `
      Create a detailed travel itinerary for ${destination} with a budget of $${budget} for ${days} days.
      Include:
      1. An overview of the trip
      2. A day-by-day itinerary with activities and places to visit
      3. Food suggestions including local specialties and recommended restaurants
      4. Practical tips for the destination
      
      Format the response as a JSON object with the following structure:
      {
        "destination": "${destination}",
        "budget": "${budget}",
        "days": "${days}",
        "overview": "Brief overview of the trip",
        "dailyItinerary": [
          {
            "day": 1,
            "title": "Day 1 title",
            "activities": "Detailed activities for day 1"
          }
        ],
        "foodSuggestions": ["Suggestion 1", "Suggestion 2", ...],
        "tips": ["Tip 1", "Tip 2", ...]
      }
    `;

    const completion = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [
        { role: "system", content: "You are a helpful travel assistant that creates detailed travel itineraries. Always respond with valid JSON." },
        { role: "user", content: prompt }
      ],
      temperature: 0.7,
      max_tokens: 2000
    });

    const content = completion.choices[0].message.content;
    
    // Extract JSON from the response (in case there's additional text)
    const jsonMatch = content.match(/\{[\s\S]*\}/);
    if (!jsonMatch) {
      throw new Error('Failed to parse itinerary from AI response');
    }
    
    const itinerary = JSON.parse(jsonMatch[0]);
    res.json(itinerary);
  } catch (error) {
    console.error('Error generating itinerary:', error);
    res.status(500).json({ error: 'Failed to generate itinerary' });
  }
});

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ status: 'OK', message: 'Travel Planner API is running' });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});