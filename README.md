# AI Travel Planner

AI Travel Planner is a modern, interactive web application that generates personalized travel itineraries using OpenAI's GPT model. Users can input their travel destination, budget, and trip duration, and the app will provide a detailed day-by-day plan, food recommendations, and practical travel tips.  

Built with **Next.js**, **React**, **Tailwind CSS**, and **Express**, this app demonstrates a seamless integration between frontend and AI-powered backend services.  

---

## Features

- **AI-Powered Itinerary Generation:** Generates personalized travel plans using OpenAI's GPT-3.5-turbo model.
- **User-Friendly Form:** Input your destination, budget, and number of days.
- **Daily Plans:** Detailed day-by-day itinerary including activities and places to visit.
- **Food Suggestions:** Local cuisines and recommended restaurants.
- **Travel Tips:** Practical advice for smooth travel.
- **Loading State & Error Handling:** Displays a spinner while generating plans and shows error messages when necessary.
- **Responsive Design:** Optimized for mobile, tablet, and desktop devices.

---

## Tech Stack

- **Frontend:** Next.js, React, Tailwind CSS
- **Backend:** Express.js, Node.js
- **AI Integration:** OpenAI GPT-3.5 API
- **API Communication:** REST API (Express → Next.js API route)
- **Other Libraries:** CORS, dotenv

---

## Installation

1. **Clone the repository:**

```bash
git clone https://github.com/Faysal2123/AI-Travel-Planner.git
cd ai-travel-planner

2.Install dependencies for frontend and backend:

# Frontend (Next.js)
npm install

# Backend (Express)
cd backend
npm install

3.Setup environment variables:

Create a .env file in the backend folder:

PORT=3001
OPENAI_API_KEY=your_openai_api_key_here

4.Run the backend server:

node server.js
# or, if using nodemon
nodemon server.js

5.Run the frontend Next.js app:

npm run dev

6.Usage

Enter your destination, budget, and number of days in the form.

Click Generate Travel Plan.

The AI will generate a complete itinerary with an overview, daily plans, food suggestions, and travel tips.

View your itinerary in a clean, interactive UI.

