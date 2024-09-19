import React from 'react';
import { Week } from '../types';

interface WeekGridProps {
  weeks: Week[];
}

const WeekGrid: React.FC<WeekGridProps> = ({ weeks }) => {
  return (
    <div className="font-sans max-w-[1200px] mx-auto p-4">
      <h1 className="text-3xl font-bold text-center mb-4">A 90-YEAR HUMAN LIFE IN WEEKS</h1>
      
      <div className="flex">
        <div className="w-12 mr-2 text-right">
          <div className="h-6 mb-2 text-red-600 font-bold">AGE</div>
          {[...Array(19)].map((_, i) => (
            <div key={i} className="h-[25.8px] text-red-600 font-bold">
              {i * 5}
            </div>
          ))}
        </div>
        
        <div className="flex-1">
          <div className="mb-1 text-blue-600 font-bold flex justify-between">
            <span>WEEK OF THE YEAR →</span>
          </div>
          <div className="flex mb-1 justify-between text-blue-600 font-bold">
            {[1, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50].map((week) => (
              <div key={week} className="text-center" style={{width: '20px'}}>
                {week}
              </div>
            ))}
          </div>
          
          <div className="grid grid-cols-52 gap-[1px]" style={{width: '520px'}}>
            {weeks.map((week) => (
              <div
                key={week.id}
                className={`w-[9px] h-[9px] border border-gray-300 ${
                  week.passed ? 'bg-black' : 'bg-white'
                }`}
                title={`Week ${week.number}: ${week.startDate.toDateString()}`}
              />
            ))}
          </div>
        </div>
      </div>
      
      <div className="text-right mt-1 text-red-600 font-bold">90</div>
    </div>
  );
};

export default WeekGrid;