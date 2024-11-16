"use client";

import { useState } from 'react';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';

interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

const Home: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodo = (text: string) => {
    setTodos([...todos, { id: Date.now(), text, completed: false }]);
  };

  const toggleComplete = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const removeTodo = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-white">
      <div className="w-full max-w-lg p-8 bg-white rounded-lg shadow-lg text-gray-800">
        <h1 className="text-4xl font-bold text-center text-purple-600 mb-8">Todo List</h1>
        <TodoInput onAdd={addTodo} />
        <TodoList todos={todos} onToggle={toggleComplete} onRemove={removeTodo} />
      </div>
    </div>
  );
};

export default Home;
