import React from "react";
import { todos } from "./data";
import TodoList from "./components/TodoList";

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            todos: todos
        };
    }

    render() {
        return (
            <div className="app">
                <div className="header">
                    <h1>todos:</h1>
                </div>
                <TodoList todos={this.state.todos} />
            </div>
        );
    }
}

export default App;
