import { useState } from "react";

const TodoForm = ({ addTodo }) => {
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text.trim()) return;
    addTodo(text);
    setText("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col items-center p-6 bg-white shadow-lg rounded-lg space-y-4 max-w-md mx-auto"
    >
      <h2 className="text-2xl font-semibold text-emerald-700 leading-snug">
        Vad behöver du göra idag?
      </h2>

      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Lägg till en ny uppgift..."
        className="w-full p-4 rounded-lg border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-emerald-700 transition-all"
      />

      <button
        type="submit"
        className="w-full bg-emerald-700 text-white py-3 rounded-lg font-semibold hover:bg-emerald-600 focus:outline-none focus:ring-2 focus:ring-emerald-400 transition-all leading-snug"
      >
        Lägg till
      </button>
    </form>
  );
};

export default TodoForm;
