import React from 'react';
import { SAFETY_TIPS, TRANSPORT_INFO } from '../constants';

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

const TravelInfoModal: React.FC<Props> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity" 
        onClick={onClose}
      />
      
      {/* Content */}
      <div className="bg-white rounded-2xl w-full max-w-lg max-h-[85vh] overflow-y-auto relative shadow-2xl animate-fade-in-up">
        <div className="sticky top-0 bg-white p-4 border-b border-gray-100 flex justify-between items-center">
          <h2 className="text-xl font-bold text-gray-800">義大利通用須知 🇮🇹</h2>
          <button onClick={onClose} className="p-2 text-gray-500 hover:bg-gray-100 rounded-full">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="p-6 space-y-6">
          <section>
            <h3 className="text-lg font-bold text-indigo-700 mb-3 flex items-center">
              <span className="mr-2">🚆</span> 交通對照表
            </h3>
            <div className="bg-indigo-50 rounded-xl overflow-hidden border border-indigo-100">
              <table className="w-full text-sm text-left">
                <thead className="bg-indigo-100 text-indigo-900">
                  <tr>
                    <th className="p-3">城市</th>
                    <th className="p-3">車站名</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-indigo-200/50">
                  {TRANSPORT_INFO.map((item, idx) => (
                    <tr key={idx}>
                      <td className="p-3 font-medium text-gray-700">{item.city}</td>
                      <td className="p-3 text-gray-600">
                        <div className="font-mono font-bold text-xs sm:text-sm">{item.station}</div>
                        {item.note && <div className="text-[10px] text-gray-500 mt-1">{item.note}</div>}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          <section>
            <h3 className="text-lg font-bold text-red-600 mb-3 flex items-center">
              <span className="mr-2">⚠️</span> 安全與生存須知
            </h3>
            <div className="space-y-3">
              {SAFETY_TIPS.map((tip, idx) => (
                <div key={idx} className="bg-red-50 p-4 rounded-xl border border-red-100">
                  <h4 className="font-bold text-red-800 text-sm mb-1">{tip.title}</h4>
                  <p className="text-sm text-gray-700">{tip.desc}</p>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default TravelInfoModal;