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

    toggleTodo = todoId => {
        this.setState({
            todos: this.state.todos.map(todo => {
                if (todoId === todo.id) {
                    return {
                        ...todo,
                        completed: !todo.completed
                    };
                }
                return todo;
            })
        });
    };

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

    clearCompleted = event => {
        event.preventDefault();

        this.setState({
            todos: this.state.todos.filter(todo => !todo.completed)
        });
    };

    render() {
        return (
            <div className="app">
                <div className="header">
                    <h1>todos:</h1>
                    <TodoForm
                        addTodo={this.addTodo}
                        clearCompleted={this.clearCompleted}
                    />
                </div>
                <TodoList
                    todos={this.state.todos}
                    toggleTodo={this.toggleTodo}
                />
            </div>
        );
    }
}

export default App;
