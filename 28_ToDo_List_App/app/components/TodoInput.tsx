import React, { useState } from 'react';

interface TodoInputProps {
  onAdd: (text: string) => void;
}

const TodoInput: React.FC<TodoInputProps> = ({ onAdd }) => {
  const [input, setInput] = useState('');

  const handleAdd = () => {
    if (input.trim()) {
      onAdd(input);
      setInput('');
    }
  };

  return (
    <div className="flex items-center space-x-2 mb-6">
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Add a new task"
        className="flex-1 px-4 py-3 text-gray-800 rounded-lg border-2 border-purple-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
      />
      <button
        onClick={handleAdd}
        className="px-4 py-3 bg-purple-500 text-white font-semibold rounded-lg shadow-md hover:bg-purple-600 hover:scale-105 transition-transform duration-200"
      >
        Add
      </button>
    </div>
  );
};

export default TodoInput;
