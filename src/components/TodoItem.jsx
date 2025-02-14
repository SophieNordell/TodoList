const TodoItem = ({ todo, toggleTodo, removeTodo }) => {
  return (
    <li
      className={`flex items-center justify-between p-4 bg-white rounded-lg border-2 border-gray-300 shadow-sm transition-all ${
        todo.completed ? "bg-green-100 text-gray-500" : "bg-white"
      }`}
    >
      <span className={`text-lg ${todo.completed ? "line-through" : ""} `}>
        {todo.text}
      </span>
      <div className="flex items-center space-x-2 ">
        <input
          aria-label="inputfield"
          type="checkbox"
          checked={todo.completed}
          onChange={() => toggleTodo(todo.id)}
          className="w-7 h-6 accent-emerald-500"
        />
        <button
          onClick={() => removeTodo(todo.id)}
          className="text-white bg-red-700 hover:bg-red-600 border px-4 rounded-2xl"
        >
          Ta bort
        </button>
      </div>
    </li>
  );
};

export default TodoItem;
