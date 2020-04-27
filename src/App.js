import React from "react";
import { todos } from "./data";
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";
import "./components/Todo.css";

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            todos: todos
        };
    }

    addTodo = todoText => {
        const newTodo = {
            task: todoText,
            completed: false,
            id: Date.now()
        };

        this.setState({
            todos: [...this.state.todos, newTodo]
        });
    };

    render() {
        return (
            <div className="app">
                <div className="header">
                    <h1>todos:</h1>
                    <TodoForm addTodo={this.addTodo} />
                </div>
                <TodoList todos={this.state.todos} />
            </div>
        );
    }
}

export default App;
