import React from 'react';

interface TodoItemProps {
  text: string;
  completed: boolean;
  onToggle: () => void;
  onRemove: () => void;
}

const TodoItem: React.FC<TodoItemProps> = ({ text, completed, onToggle, onRemove }) => {
  return (
    <li
      className={`flex justify-between items-center p-4 rounded-lg shadow-md transition-all duration-300 transform ${
        completed ? 'bg-green-300 text-gray-500 line-through' : 'bg-indigo-300 text-gray-900'
      }`}
    >
      <span onClick={onToggle} className="flex-1 cursor-pointer select-none">
        {text}
      </span>
      <button
        onClick={onRemove}
        className="ml-4 text-red-500 hover:text-red-700 transition-colors duration-200"
      >
        ✕
      </button>
    </li>
  );
};

export default TodoItem;
