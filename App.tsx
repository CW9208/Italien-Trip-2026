import React, { useState, useEffect } from 'react';
import DateSelector from './components/DateSelector';
import SpotCard from './components/SpotCard';
import DayOverviewCard from './components/DayOverviewCard';
import FloatingMenu from './components/FloatingMenu';
import TravelInfoModal from './components/TravelInfoModal';
import { ITINERARY_DATA } from './constants';
import { DayPlan } from './types';

type ViewMode = 'list' | 'detail';

const App: React.FC = () => {
  const [viewMode, setViewMode] = useState<ViewMode>('list');
  const [currentDayId, setCurrentDayId] = useState<string>("0205");
  const [isInfoOpen, setIsInfoOpen] = useState(false);

  const currentDay: DayPlan | undefined = ITINERARY_DATA.find(d => d.id === currentDayId);

  // Scroll to top when day changes or view mode changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentDayId, viewMode]);

  const handleDayClick = (dayId: string) => {
    setCurrentDayId(dayId);
    setViewMode('detail');
  };

  // Switch to List View
  const handleGoHome = () => {
    setViewMode('list');
  };

  // Switch to Detail View for "Today" (Simulated as 2/5 or logic could be added)
  const handleGoToday = () => {
    const todayId = "0205"; // Default simulation to start of trip
    setCurrentDayId(todayId);
    setViewMode('detail');
  };
  
  const handleBackToList = () => {
    setViewMode('list');
  };

  return (
    <div className="min-h-screen bg-slate-50 pb-24">
      {/* Detail View Components */}
      {viewMode === 'detail' && (
        <>
          {/* Header Bar with Back Button */}
          <div className="bg-white sticky top-0 z-50">
            <div className="flex items-center p-2 border-b border-gray-100">
               <button 
                 onClick={handleBackToList}
                 className="p-2 mr-2 rounded-full hover:bg-gray-100 text-gray-600 transition-colors"
                 aria-label="Back to List"
               >
                 <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                 </svg>
               </button>
               {/* Re-use DateSelector logic but maybe lighter? Actually we can just put DateSelector below */}
               <div className="font-bold text-lg text-gray-800">行程詳情</div>
            </div>
             <DateSelector selectedDayId={currentDayId} onSelectDay={handleDayClick} />
          </div>

          {currentDay && (
            <main className="max-w-3xl mx-auto px-4 pt-6 animate-fade-in-up">
              {/* Header Info */}
              <div className="mb-6">
                <h1 className="text-3xl font-bold text-slate-800 flex items-center">
                  {currentDay.city}
                  <span className="ml-3 text-sm px-3 py-1 bg-slate-200 text-slate-600 rounded-full font-medium">
                    Day {ITINERARY_DATA.indexOf(currentDay)}
                  </span>
                </h1>
                <p className="text-slate-500 mt-2 font-medium">{currentDay.highlights}</p>
              </div>

              {/* Ticket Alerts */}
              {currentDay.ticketAlerts && currentDay.ticketAlerts.length > 0 && (
                <div className="mb-6 space-y-3">
                  {currentDay.ticketAlerts.map((alert, idx) => (
                    <div 
                      key={idx} 
                      className={`p-4 rounded-xl border-l-4 shadow-sm flex items-start space-x-3 ${
                        alert.urgent 
                          ? 'bg-red-50 border-red-500 text-red-900' 
                          : 'bg-orange-50 border-orange-400 text-orange-900'
                      }`}
                    >
                      <span className="text-xl shrink-0">🚨</span>
                      <div>
                        <span className="block font-black text-lg">{alert.time}</span>
                        <span className="block font-medium">{alert.title}</span>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* Spots List */}
              <div>
                <div className="flex items-center space-x-2 text-slate-500 mb-4 px-1">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                  </svg>
                  <h2 className="font-bold text-lg uppercase tracking-wide">行程與景點</h2>
                </div>
                
                {currentDay.spots.map((spot, index) => (
                  <SpotCard key={index} spot={spot} />
                ))}
              </div>

              {/* Accommodation Card - Moved to bottom */}
              {currentDay.accommodation && (
                <div className="mt-8 mb-8 bg-white rounded-2xl p-5 shadow-sm border border-slate-200">
                  <div className="flex items-center space-x-2 text-indigo-600 mb-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                    </svg>
                    <h2 className="font-bold text-lg uppercase tracking-wide">今晚住宿</h2>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-800 mb-1">{currentDay.accommodation.name}</h3>
                  
                  <a 
                    href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(currentDay.accommodation.address)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-500 text-sm mb-4 block hover:text-indigo-600 underline decoration-dotted"
                  >
                    📍 {currentDay.accommodation.address}
                  </a>

                  <div className="grid grid-cols-2 gap-4 mt-4 bg-slate-50 p-3 rounded-lg">
                    <div>
                      <div className="text-xs text-slate-400 uppercase font-bold">Check-in</div>
                      <div className="font-semibold text-slate-700">{currentDay.accommodation.checkIn}</div>
                    </div>
                    <div>
                      <div className="text-xs text-slate-400 uppercase font-bold">Booking</div>
                      <div className="font-semibold text-slate-700">{currentDay.accommodation.bookingPlatform}</div>
                    </div>
                    {currentDay.accommodation.tax && (
                      <div className="col-span-2 border-t border-slate-200 pt-2 mt-1">
                         <div className="text-xs text-slate-400 uppercase font-bold">費用/稅金</div>
                         <div className="font-semibold text-red-600">{currentDay.accommodation.tax}</div>
                      </div>
                    )}
                    {currentDay.accommodation.note && (
                      <div className="col-span-2 bg-yellow-100 text-yellow-800 text-xs p-2 rounded">
                        ⚠️ {currentDay.accommodation.note}
                      </div>
                    )}
                  </div>
                </div>
              )}
            </main>
          )}
        </>
      )}

      {/* List View Components */}
      {viewMode === 'list' && (
        <div className="max-w-3xl mx-auto px-4 pt-8">
           <header className="mb-8 text-center">
              <h1 className="text-3xl font-black text-slate-900 tracking-tight mb-2">義大利之旅 2026 🇮🇹</h1>
              <p className="text-slate-500 font-medium">2/5 - 2/17 行程總覽</p>
           </header>
           
           <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
             {ITINERARY_DATA.map((day) => (
               <DayOverviewCard 
                 key={day.id} 
                 day={day} 
                 onClick={() => handleDayClick(day.id)} 
               />
             ))}
           </div>
           
           <div className="mt-12 text-center text-slate-400 text-sm pb-8">
              Bon Voyage! 🍕🍷
           </div>
        </div>
      )}

      {/* Floating Menu - Always visible */}
      <FloatingMenu 
        onHome={handleGoHome} 
        onToday={handleGoToday}
        onInfo={() => setIsInfoOpen(true)} 
      />

      {/* Travel Info Modal */}
      <TravelInfoModal isOpen={isInfoOpen} onClose={() => setIsInfoOpen(false)} />
    </div>
  );
};

export default App;