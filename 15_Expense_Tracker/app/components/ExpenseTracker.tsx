"use client";

import React, { useState } from "react";

interface Expense {
  id: number;
  description: string;
  amount: number;
}

const ExpenseTracker: React.FC = () => {
  const [expenses, setExpenses] = useState<Expense[]>([]);
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState<number>(0); // Initialized as 0

  const addExpense = () => {
    if (!description.trim() || amount <= 0) return; // Validate input

    const newExpense: Expense = {
      id: Date.now(),
      description,
      amount,
    };

    setExpenses([...expenses, newExpense]);
    setDescription("");
    setAmount(0); // Reset amount
  };

  const totalExpenses = expenses.reduce((acc, expense) => acc + expense.amount, 0);

  return (
    <div className="max-w-md mx-auto bg-white shadow-md rounded-lg p-6">
      <h2 className="text-2xl font-bold mb-4">Expense Tracker</h2>
      <div className="mb-4">
        <input
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Description"
          className="border border-gray-300 rounded p-2 w-full mb-2"
        />
        <input
          type="number"
          value={amount === 0 ? "" : amount} // Show empty if zero
          onChange={(e) => setAmount(Number(e.target.value) || 0)} // Set to zero if invalid
          placeholder="Amount"
          className="border border-gray-300 rounded p-2 w-full"
        />
      </div>
      <button
        onClick={addExpense}
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Add Expense
      </button>

      <h3 className="text-xl font-semibold mt-6">Expenses</h3>
      <ul className="mt-4">
        {expenses.map((expense) => (
          <li key={expense.id} className="flex justify-between border-b py-2">
            <span>{expense.description}</span>
            <span>${expense.amount.toFixed(2)}</span>
          </li>
        ))}
      </ul>

      <div className="mt-4">
        <h4 className="font-semibold">Total Expenses: ${totalExpenses.toFixed(2)}</h4>
      </div>
    </div>
  );
};

export default ExpenseTracker;
