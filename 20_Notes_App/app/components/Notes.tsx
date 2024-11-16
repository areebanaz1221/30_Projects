"use client";

import React, { useState } from "react";

interface Note {
  id: number;
  text: string;
}

const Notes: React.FC = () => {
  const [notes, setNotes] = useState<Note[]>([]);
  const [noteText, setNoteText] = useState<string>("");

  const addNote = () => {
    if (!noteText) return;

    const newNote: Note = {
      id: Date.now(),
      text: noteText,
    };

    setNotes([...notes, newNote]);
    setNoteText(""); // Clear the input field after adding the note
  };

  const deleteNote = (id: number) => {
    setNotes(notes.filter(note => note.id !== id));
  };

  return (
    <div className="max-w-md mx-auto bg-white shadow-md rounded-lg p-6">
      <h2 className="text-2xl font-bold mb-4">Notes</h2>
      <div className="mb-4">
        <input
          type="text"
          value={noteText}
          onChange={(e) => setNoteText(e.target.value)}
          placeholder="Write a note..."
          className="border border-gray-300 rounded p-2 w-full mb-2"
        />
        <button
          onClick={addNote}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Add Note
        </button>
      </div>

      <ul>
        {notes.map((note) => (
          <li key={note.id} className="flex justify-between items-center border-b py-2">
            <span>{note.text}</span>
            <button onClick={() => deleteNote(note.id)} className="text-red-500">Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Notes;
