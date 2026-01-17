import React, { useState, useEffect } from 'react';
import { DayPlan } from '../types';

interface Props {
  day: DayPlan;
  onClick: () => void;
}

const DayOverviewCard: React.FC<Props> = ({ day, onClick }) => {
  // Generate a consistent placeholder based on the day ID so the image remains consistent across re-renders
  const placeholderUrl = `https://picsum.photos/seed/${day.id}/800/600`;
  
  // Initialize state with the provided image URL, or fall back to placeholder immediately if empty
  const [imgSrc, setImgSrc] = useState(day.imageUrl || placeholderUrl);

  // Update internal state if the day prop changes (e.g. data update)
  useEffect(() => {
    setImgSrc(day.imageUrl || placeholderUrl);
  }, [day.imageUrl, placeholderUrl]);

  const handleError = () => {
    // If the main image fails to load, switch to the placeholder
    if (imgSrc !== placeholderUrl) {
      setImgSrc(placeholderUrl);
    }
  };

  return (
    <div 
      onClick={onClick}
      className="bg-white rounded-2xl shadow-md overflow-hidden cursor-pointer transform transition-all duration-200 hover:scale-[1.02] active:scale-95 group"
    >
      <div className="relative h-40 overflow-hidden bg-gray-200">
        <img 
          src={imgSrc} 
          alt={day.city} 
          onError={handleError}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col justify-end p-4">
          <div className="flex justify-between items-end">
             <h3 className="text-white text-xl font-bold drop-shadow-md">{day.city.split(' ')[0]}</h3>
             <span className="text-white/90 text-sm font-medium bg-black/30 px-2 py-1 rounded backdrop-blur-sm">
               {day.dateLabel} {day.dayOfWeek}
             </span>
          </div>
        </div>
      </div>
      <div className="p-4">
        <p className="text-gray-600 text-sm line-clamp-2">{day.highlights}</p>
        
        {/* Indicators for alerts/hotel */}
        <div className="flex space-x-3 mt-3">
          {day.ticketAlerts && day.ticketAlerts.length > 0 && (
             <span className="flex items-center text-xs text-red-600 bg-red-50 px-2 py-1 rounded-full">
               🚨 {day.ticketAlerts.length} 提醒
             </span>
          )}
          {day.accommodation && (
             <span className="flex items-center text-xs text-indigo-600 bg-indigo-50 px-2 py-1 rounded-full">
               🛏️ 住宿
             </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default DayOverviewCard;