import React from "react";
import Todo from "./Todo";

const TodoList = props => {
    return (
        <div className="todo-list">
            {props.todos.map(todo => {
                return <Todo todo={todo} key={todo.id} />;
            })}
        </div>
    );
};

export default TodoList;
