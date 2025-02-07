import TodoItem from "./TodoItem";

const TodoList = ({ todos, toggleTodo, removeTodo }) => {
  return (
    <ul className="space-y-1 p-2 mt-3 max-w-md mx-auto">
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          toggleTodo={toggleTodo}
          removeTodo={removeTodo}
        />
      ))}
    </ul>
  );
};

export default TodoList;
