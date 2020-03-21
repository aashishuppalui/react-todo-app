import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/layout/Header";
import Todos from "./components/Todos";
import Addtodo from "./components/Addtodo";
import about from "./components/pages/about";
import { v4 as uuidv4 } from "uuid";
import axios from "axios";

// import logo from "./logo.svg";
import "./App.css";
import Axios from "axios";

class App extends Component {
  state = {
    todos: [
      // {
      //   id: uuidv4(),
      //   title: "Take out the trash",
      //   completed: false
      // },
      // {
      //   id: uuidv4(),
      //   title: "Dinner with friend",
      //   completed: false
      // },
      // {
      //   id: uuidv4(),
      //   title: "Meeting with Boss",
      //   completed: false
      // }
    ]
  };

  componentDidMount() {
    axios
      .get("https://jsonplaceholder.typicode.com/todos?_limit=10")
      .then(res => this.setState({ todos: res.data }));
  }
  //Toggle Complete
  markComplete = id => {
    // console.log(id);
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      })
    });
  };

  //delete todo
  delTodo = id => {
    // console.log(id);
    axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`).then(res =>
      this.setState({
        todos: [...this.state.todos.filter(todo => todo.id !== id)]
      })
    );
    // this.setState({
    //   todos: [...this.state.todos.filter(todo => todo.id !== id)]
    // });
  };

  //Add todo
  Addtodo = title => {
    // console.log(title);
    // const newTodo = {
    //   id: uuidv4(),
    //   title,
    //   completed: false
    // };
    axios
      .post("https://jsonplaceholder.typicode.com/todos", {
        title,
        completed: false
      })
      .then(res => this.setState({ todos: [...this.state.todos, res.data] }));
  };

  render() {
    // console.log(this.state.todos);
    return (
      <Router>
        <div className="App">
          <div className="container">
            <Header />
            {/* eslint-disable  */}
            <Route
              exact
              path="/"
              render={props => (
                <React.Fragment>
                  <Addtodo Addtodo={this.Addtodo} />
                  <Todos
                    todos={this.state.todos}
                    markComplete={this.markComplete}
                    delTodo={this.delTodo}
                  />
                </React.Fragment>
              )}
            />

            <Route path="/about" component={about} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
