import TodoItem from "./TodoItem";

const TodoList = ({ todos, toggleTodo, removeTodo }) => {
  const allDone = todos.length > 0 && todos.every((todo) => todo.completed);

  return (
    <div className="max-w-md mx-auto mt-6">
      <ul className="space-y-2">
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            toggleTodo={toggleTodo}
            removeTodo={removeTodo}
          />
        ))}
      </ul>

      {allDone && (
        <div className="mt-6 text-center text-green-600 font-semibold text-lg animate-bounce">
          🎉 Alla uppgifter är klara! Bra jobbat! 🎉
        </div>
      )}
    </div>
  );
};

export default TodoList;
