import React, { useState } from 'react';
import { BucketListItem } from '../types';

const BucketList: React.FC = () => {
  const [items, setItems] = useState<BucketListItem[]>([]);
  const [newItem, setNewItem] = useState('');

  const addItem = () => {
    if (newItem.trim()) {
      setItems([...items, { id: Date.now(), description: newItem, completed: false }]);
      setNewItem('');
    }
  };

  const toggleCompleted = (id: number) => {
    setItems(items.map(item =>
      item.id === id ? { ...item, completed: !item.completed } : item
    ));
  };

  return (
    <div className="mt-6">
      <h2 className="text-xl font-bold mb-4">Bucket List</h2>
      <div className="flex mb-4">
        <input
          type="text"
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
          className="flex-grow p-2 border rounded-l"
          placeholder="New bucket list item"
        />
        <button onClick={addItem} className="bg-blue-500 text-white p-2 rounded-r">Add</button>
      </div>
      <ul>
        {items.map(item => (
          <li key={item.id} className="flex items-center mb-2">
            <input
              type="checkbox"
              checked={item.completed}
              onChange={() => toggleCompleted(item.id)}
              className="mr-2"
            />
            <span className={item.completed ? 'line-through' : ''}>{item.description}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BucketList;