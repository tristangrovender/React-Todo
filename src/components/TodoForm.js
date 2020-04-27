import React from "react";

class TodoForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            todoText: ""
        };
    }

    changeHandler = event => {
        this.setState({ todoText: event.target.value });
    };

    submitHandler = event => {
        event.preventDefault();
        this.props.addTodo(this.state.todoText);
        this.setState({ todoText: "" });
    };

    render() {
        return (
            <form onSubmit={this.submitHandler}>
                <input
                    type="text"
                    name="todoText"
                    value={this.state.todoText}
                    onChange={this.changeHandler}
                />
                <button type="submit">Add</button>
                <button
                    className="clear-button"
                    onClick={this.props.clearCompleted}
                >
                    clear Completed
                </button>
            </form>
        );
    }
}

export default TodoForm;
