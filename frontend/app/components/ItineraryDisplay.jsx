export default function ItineraryDisplay({ itinerary }) {
  if (!itinerary) return null;

  return (
    <div className="bg-white shadow-2xl rounded-3xl p-8 border border-gray-200 w-full">
      <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
        Your AI-Generated Travel Plan
      </h2>

      {/* Summary */}
      <div className="grid sm:grid-cols-3 gap-6 mb-8 text-gray-700">
        <div className="bg-indigo-50 p-4 rounded-xl text-center font-semibold">Destination: {itinerary.destination}</div>
        <div className="bg-indigo-50 p-4 rounded-xl text-center font-semibold">Budget: ${itinerary.budget}</div>
        <div className="bg-indigo-50 p-4 rounded-xl text-center font-semibold">Duration: {itinerary.days} days</div>
      </div>

      {/* Overview */}
      <div className="mb-8">
        <h3 className="text-xl font-semibold text-gray-800 mb-3">Overview</h3>
        <p className="text-gray-700">{itinerary.overview}</p>
      </div>

      {/* Daily Plans */}
      <div className="mb-8">
        <h3 className="text-xl font-semibold text-gray-800 mb-4">Daily Plans</h3>
        <div className="space-y-4">
          {itinerary.dailyItinerary.map((day, index) => (
            <div key={index} className="bg-indigo-50 p-4 rounded-2xl border-l-4 border-indigo-600 shadow-sm hover:shadow-md transition">
              <h4 className="font-semibold text-gray-800 text-lg">Day {day.day}: {day.title}</h4>
              <p className="text-gray-700 mt-1">{day.activities}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Food Suggestions & Tips */}
      <div className="grid sm:grid-cols-2 gap-6">
        <div>
          <h3 className="text-lg font-semibold text-gray-800 mb-2">Food Suggestions</h3>
          <ul className="list-disc list-inside text-gray-700 space-y-1">
            {itinerary.foodSuggestions.map((food, idx) => <li key={idx}>{food}</li>)}
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-gray-800 mb-2">Travel Tips</h3>
          <ul className="list-disc list-inside text-gray-700 space-y-1">
            {itinerary.tips.map((tip, idx) => <li key={idx}>{tip}</li>)}
          </ul>
        </div>
      </div>
    </div>
  );
}
