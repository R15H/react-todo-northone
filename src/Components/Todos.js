import React, {Component} from 'react';
//import TodoForm from './TodoForm';
import Todo from './Todo';
import TodoForm from './TodoForm';
import $ from '../../node_modules/jquery/dist/jquery';

class Todos extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: []
    }
  }

  deleteTodo(id) {
    //Delete is called on Todo.js as it's on a single tuple
    //this.props.onDelete(id);
    // the event is then bubbled up to this to help support single point of contact with Datastore (JSON)
    console.log("event bubbled up to Todos for "+this.props.todo.id)
  }
  editTodo(id) {

  }

  getTodos() {
    $.ajax({
      url: 'http://localhost:3080/todos',
      dataType: 'json',
      cache: false,
      success: function(data) {
        this.setState({
          todos: data
        }, function() {
          // console.log(this.state);
        })
      }.bind(this),
      error: function(xhr, status, err) {
        console.log(err);
      }
    });
  }

  handleAdd(todo) {
    console.log("in handle add for id " + todo.id + " and title "+todo.title );

  }

  handleRemove(id) {
   console.log("incoming id = "+id);
   var old_state = this.state.todos;
   console.log("old_State");
   console.log(old_state);
   var index_of = old_state.map((el) => el.id).indexOf(id);
   var new_state = old_state.splice(index_of, 1);
   console.log("new_state object that is removed");
   console.log(new_state);
   // set to the array which has been spliced
   this.setState({todos: old_state});
  }
  componentWillMount() {
    this.getTodos();
  }

  componentDidMount() {}

  render() {
    let todoList;
    if (this.state.todos) {
      todoList = this.state.todos.map(todo => {
        return (<Todo key={todo.id} todo={todo} handleRemove={this.handleRemove.bind(this)}/>); //map with key
      });
    }
    return (
      <div>
      <TodoForm handleAdd={this.handleAdd.bind(this)}/>
      <div className="container">
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Title</th>
            <th>Description</th>
            <th>Status</th>
            <th>Due Date</th>
            <th>Delete?</th>
          </tr>
        </thead>
        <tbody>
          {todoList}
        </tbody>
      </table>
    </div>
  </div>);
  }
}

export default Todos;
