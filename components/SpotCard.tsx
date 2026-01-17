import React, { useState } from 'react';
import { Spot } from '../types';

interface Props {
  spot: Spot;
}

const SpotCard: React.FC<Props> = ({ spot }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => setIsOpen(!isOpen);

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden mb-4 transition-all duration-300">
      {/* Header - Always visible */}
      <button
        onClick={toggleOpen}
        className="w-full text-left p-4 flex justify-between items-center bg-gradient-to-r from-white to-gray-50 hover:bg-gray-50"
      >
        <div className="flex items-center space-x-3">
          <div className="w-2 h-10 bg-blue-500 rounded-full"></div>
          <h3 className="text-lg font-bold text-gray-800">{spot.name}</h3>
        </div>
        <span className={`transform transition-transform duration-300 text-blue-500 ${isOpen ? 'rotate-180' : ''}`}>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </span>
      </button>

      {/* Expanded Content */}
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="p-4 pt-0 border-t border-gray-100">
          <p className="text-gray-600 mt-3 leading-relaxed">{spot.description}</p>
          
          {spot.tips && spot.tips.length > 0 && (
            <div className="mt-4 bg-yellow-50 p-3 rounded-lg border border-yellow-100">
              <h4 className="text-xs font-bold text-yellow-800 uppercase tracking-wide mb-2">💡 參觀須知</h4>
              <ul className="list-disc list-inside space-y-1">
                {spot.tips.map((tip, idx) => (
                  <li key={idx} className="text-sm text-yellow-900">{tip}</li>
                ))}
              </ul>
            </div>
          )}

          {spot.foods && spot.foods.length > 0 && (
            <div className="mt-5">
              <h4 className="text-sm font-bold text-gray-800 mb-3 flex items-center">
                <span className="text-lg mr-2">🍝</span> 附近美食
              </h4>
              <div className="grid gap-3">
                {spot.foods.map((food, idx) => (
                  <a
                    key={idx}
                    href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(food.addressQuery)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-3 bg-blue-50 hover:bg-blue-100 rounded-lg border border-blue-100 transition-colors group"
                  >
                    <div>
                      <div className="font-bold text-blue-900 text-sm group-hover:text-blue-700">{food.name}</div>
                      {food.note && <div className="text-xs text-blue-700 mt-0.5">{food.note}</div>}
                    </div>
                    <div className="text-blue-500 bg-white p-1.5 rounded-full shadow-sm">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SpotCard;