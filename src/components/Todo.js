import React from "react";

const Todo = props => {
    return (
        <div className={`todo${props.todo.completed ? "completed" : ""}`}>
            {props.todo.task}
        </div>
    );
};

export default Todo;
