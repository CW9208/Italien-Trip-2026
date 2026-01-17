import React from 'react';

interface Props {
  onHome: () => void;
  onToday: () => void;
  onInfo: () => void;
}

const FloatingMenu: React.FC<Props> = ({ onHome, onToday, onInfo }) => {
  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col space-y-3">
      {/* Info Button */}
      <button
        onClick={onInfo}
        className="w-12 h-12 bg-white text-indigo-600 rounded-full shadow-lg border border-indigo-100 flex items-center justify-center hover:bg-indigo-50 active:scale-95 transition-all"
        aria-label="Travel Info"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      </button>

      {/* Today Button */}
      <button
        onClick={onToday}
        className="w-12 h-12 bg-white text-emerald-600 rounded-full shadow-lg border border-emerald-100 flex items-center justify-center hover:bg-emerald-50 active:scale-95 transition-all"
        aria-label="Go to Today"
      >
         <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
         </svg>
      </button>

      {/* Home / List View Button (Primary) */}
      <button
        onClick={onHome}
        className="w-14 h-14 bg-indigo-600 rounded-full text-white shadow-xl shadow-indigo-300 flex items-center justify-center hover:bg-indigo-700 active:scale-95 transition-all"
        aria-label="Home / List View"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
        </svg>
      </button>
    </div>
  );
};

export default FloatingMenu;