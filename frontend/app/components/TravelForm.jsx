'use client';

import { useState } from 'react';

export default function TravelForm({ onSubmit, isLoading }) {
  const [formData, setFormData] = useState({
    destination: '',
    budget: '',
    days: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <div className="bg-white shadow-2xl rounded-3xl p-8 border border-gray-200">
      <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
        AI Travel Planner
      </h2>
      <form onSubmit={handleSubmit} className="space-y-5">
        {/* Destination */}
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">Destination</label>
          <input
            type="text"
            name="destination"
            value={formData.destination}
            onChange={handleChange}
            required
            placeholder="e.g., Paris, France"
            className="w-full px-5 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition"
          />
        </div>
        {/* Budget */}
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">Budget (USD)</label>
          <input
            type="number"
            name="budget"
            value={formData.budget}
            onChange={handleChange}
            required
            min="1"
            className="w-full px-5 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition"
            placeholder="Enter your total budget"
          />
        </div>
        {/* Days */}
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">Number of Days</label>
          <input
            type="number"
            name="days"
            value={formData.days}
            onChange={handleChange}
            required
            min="1"
            className="w-full px-5 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition"
            placeholder="Enter trip duration"
          />
        </div>

        {/* Submit */}
        <button
          type="submit"
          disabled={isLoading}
          className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 rounded-xl transition disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isLoading ? 'Generating Your Plan...' : 'Generate Travel Plan'}
        </button>
      </form>
    </div>
  );
}
