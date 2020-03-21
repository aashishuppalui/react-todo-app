import React, { Component } from "react";
import TodoItem from "./TodoItem";
import PropTypes from "prop-types";

class Todos extends Component {
  // markComplete = () => {
  //   console.log("Hello");
  // };

  render() {
    /* eslint-disable */
    return this.props.todos.map(todo => (
      // <TodoItem key={todo.id} todo={todo} />;
      // <h3> {todo.title} </h3>
      <TodoItem
        key={todo.id}
        todo={todo}
        markComplete={this.props.markComplete}
        delTodo={this.props.delTodo}
      />
    ));
  }
}

//PropTypes
Todos.propTypes = {
  todos: PropTypes.array.isRequired,
  markComplete: PropTypes.func.isRequired,
  delTodo: PropTypes.func.isRequired
};

export default Todos;

// console.log(this.props.todos);
// return (
//   <div>
//     <h1>Todos</h1>
//   </div>
// );
