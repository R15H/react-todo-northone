import React, { Component } from 'react';
import Todos from './Components/Todos';
import TodoForm from './Components/TodoForm';
//import $ from '../node_modules/jquery/dist/jquery';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    // this.state = {
    //   todos: []
    // }
  }

  componentWillMount() {

  }

  componentDidMount() {

  }
  render() {
    return (
      <div className="">
        <header className="App App-header">
          <h1 className="App-title">NorthOne ToDo</h1>
        </header>
        <small id="subTitle" className="form-text text-muted App">Todo List Manager v0.01 for NorthOne</small>
        <Todos />
      </div>
    );
  }
}

export default App;
