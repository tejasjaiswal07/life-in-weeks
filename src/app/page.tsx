"use client";


import React, { useState, useEffect } from 'react';
import WeekGrid from './components/WeekGrid';
import { calculateWeeks } from './utils';
import { Week } from './types';

export default function Home() {
  const [weeks, setWeeks] = useState<Week[]>([]);
  const [birthDate, setBirthDate] = useState<string>('');

  useEffect(() => {
    if (birthDate) {
      setWeeks(calculateWeeks(new Date(birthDate)));
    }
  }, [birthDate]);

  return (
    <main className="min-h-screen bg-white py-8 px-4">
      <div className="max-w-[1200px] mx-auto">
        <div className="mb-8">
          <label htmlFor="birthdate" className="block text-sm font-medium text-gray-700 mb-2">Enter your birthdate:</label>
          <input
            type="date"
            id="birthdate"
            value={birthDate}
            onChange={(e) => setBirthDate(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-md"
          />
        </div>

        <WeekGrid weeks={weeks} />
      </div>
    </main>
  );
}