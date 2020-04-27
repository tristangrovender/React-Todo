import React from "react";

const Todo = props => {
    return (
        <div
            className={`todo${props.todo.completed ? " completed" : ""}`}
            onClick={e => props.toggleTodo(props.todo.id)}
        >
            {props.todo.task}
        </div>
    );
};

export default Todo;
