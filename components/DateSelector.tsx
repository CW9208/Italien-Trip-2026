import React, { useRef } from 'react';
import { ITINERARY_DATA } from '../constants';

interface Props {
  selectedDayId: string;
  onSelectDay: (id: string) => void;
}

const DateSelector: React.FC<Props> = ({ selectedDayId, onSelectDay }) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const isDown = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);
  const isDragging = useRef(false);

  const handleMouseDown = (e: React.MouseEvent) => {
    isDown.current = true;
    isDragging.current = false;
    if (scrollRef.current) {
      scrollRef.current.classList.add('cursor-grabbing');
      scrollRef.current.classList.remove('cursor-grab');
      startX.current = e.pageX - scrollRef.current.offsetLeft;
      scrollLeft.current = scrollRef.current.scrollLeft;
    }
  };

  const handleMouseLeave = () => {
    isDown.current = false;
    if (scrollRef.current) {
      scrollRef.current.classList.remove('cursor-grabbing');
      scrollRef.current.classList.add('cursor-grab');
    }
  };

  const handleMouseUp = () => {
    isDown.current = false;
    if (scrollRef.current) {
      scrollRef.current.classList.remove('cursor-grabbing');
      scrollRef.current.classList.add('cursor-grab');
    }
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDown.current) return;
    e.preventDefault();
    if (scrollRef.current) {
      const x = e.pageX - scrollRef.current.offsetLeft;
      const walk = (x - startX.current) * 2; // scroll-fast multiplier
      
      // If moved significantly, mark as dragging to prevent click events
      if (Math.abs(walk) > 5) {
        isDragging.current = true;
      }

      scrollRef.current.scrollLeft = scrollLeft.current - walk;
    }
  };

  const handleClickCapture = (e: React.MouseEvent) => {
    // Intercept click event if it was a drag action
    if (isDragging.current) {
      e.stopPropagation();
      e.preventDefault();
    }
  };

  return (
    <div className="sticky top-0 z-50 bg-white shadow-md w-full">
      <div 
        ref={scrollRef}
        className="flex overflow-x-auto no-scrollbar py-3 px-2 space-x-2 cursor-grab select-none"
        onMouseDown={handleMouseDown}
        onMouseLeave={handleMouseLeave}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
        onClickCapture={handleClickCapture}
      >
        {ITINERARY_DATA.map((day) => {
          const isSelected = day.id === selectedDayId;
          return (
            <button
              key={day.id}
              onClick={() => onSelectDay(day.id)}
              className={`flex-shrink-0 flex flex-col items-center justify-center min-w-[4.5rem] py-2 rounded-xl transition-all duration-200 ${
                isSelected
                  ? 'bg-blue-600 text-white shadow-lg transform scale-105'
                  : 'bg-gray-100 text-gray-500 hover:bg-gray-200'
              }`}
            >
              <span className="text-xs font-medium">{day.dateLabel}</span>
              <span className={`text-sm font-bold ${isSelected ? 'text-white' : 'text-gray-700'}`}>
                {day.dayOfWeek}
              </span>
              <span className="text-[10px] truncate w-full text-center px-1">
                {day.city.split(' ')[0]}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default DateSelector;