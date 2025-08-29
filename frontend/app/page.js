'use client';

import { useState } from 'react';
import TravelForm from './components/TravelForm';
import ItineraryDisplay from './components/ItineraryDisplay';
import LoadingSpinner from './components/LoadingSpinner';

export default function Home() {
  const [itinerary, setItinerary] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (formData) => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch('/api/itinerary', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      if (!response.ok) throw new Error('Failed to generate itinerary');
      const data = await response.json();
      setItinerary(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-10 items-start">
        {/* Left Side: Form */}
        <div className="flex-1 w-full lg:max-w-md">
          <TravelForm onSubmit={handleSubmit} isLoading={isLoading} />
          {isLoading && <LoadingSpinner />}
          {error && (
            <div className="mt-6 p-4 bg-red-100 border border-red-400 text-red-700 rounded-lg">
              Error: {error}
            </div>
          )}
        </div>

        {/* Right Side: Itinerary */}
        <div className="flex-1 w-full">
          {itinerary ? (
            <ItineraryDisplay itinerary={itinerary} />
          ) : (
            <div className="flex items-center justify-center h-full text-gray-400 italic p-6 border border-dashed border-gray-300 rounded-3xl">
              Your AI-generated itinerary will appear here
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
