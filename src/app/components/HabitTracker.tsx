import React, { useState } from 'react';
import { Habit } from '../types';

const HabitTracker: React.FC = () => {
  const [habits, setHabits] = useState<Habit[]>([]);
  const [newHabit, setNewHabit] = useState('');

  const addHabit = () => {
    if (newHabit.trim()) {
      setHabits([...habits, { id: Date.now(), name: newHabit, streak: 0 }]);
      setNewHabit('');
    }
  };

  const incrementStreak = (id: number) => {
    setHabits(habits.map(habit =>
      habit.id === id ? { ...habit, streak: habit.streak + 1 } : habit
    ));
  };

  return (
    <div className="mt-6">
      <h2 className="text-xl font-bold mb-4">Habit Tracker</h2>
      <div className="flex mb-4">
        <input
          type="text"
          value={newHabit}
          onChange={(e) => setNewHabit(e.target.value)}
          className="flex-grow p-2 border rounded-l"
          placeholder="New habit"
        />
        <button onClick={addHabit} className="bg-blue-500 text-white p-2 rounded-r">Add</button>
      </div>
      <ul>
        {habits.map(habit => (
          <li key={habit.id} className="flex justify-between items-center mb-2">
            <span>{habit.name}</span>
            <div>
              <span className="mr-2">Streak: {habit.streak}</span>
              <button onClick={() => incrementStreak(habit.id)} className="bg-green-500 text-white p-1 rounded">+</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HabitTracker;