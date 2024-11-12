import { useState } from "react";
import { moreTasks, tasks } from "./data/tasks";

export default function Todos() {
    const [todos, setTodos] = useState([]);

    function handleTodo() {
        setTodos(tasks);
    }

    function handleMoreTodo() {
        const moreTodos = [...todos, ...moreTasks];
        setTodos(moreTodos);
    }

    function handleEditTodo() {
        // edit
    }

    return (
        <div>
            <h1>Todos</h1>
            <ul>
                {todos.map((todo) => (
                    <li key={todo.id}>
                        {todo?.title} -{" "}
                        <button onClick={() => handleEditTodo(todo.id)}>
                            Edit
                        </button>
                    </li>
                ))}
            </ul>
            <div>
                <button onClick={handleTodo}>Load...</button>

                <button onClick={handleMoreTodo}>Load more...</button>
            </div>
        </div>
    );
}
