import React, { Component } from 'react';
import $ from '../../node_modules/jquery/dist/jquery';

class Todo extends Component {
  deleteTodo( id ) {
    this.onDelete( id );

  }
  onDelete( id ) {
    //console.log( "delete clicked on " + this.props.todo.id );
    //console.log("key being sent to parent is " + this.props.todo.id);
    //this.props.onDelete(id);
    $.ajax({
      url: 'http://localhost:3080/todos/' + this.props.todo.id,
      dataType: 'json',
      type: 'DELETE',
      cache: false,
      success: function ( data ) {
        this.props.handleRemove(this.props.todo.id);
        /*
        var tmp_todos = this.state.todos;
        tmp_todos.splice(this.props.todo.id);
        this.setState({
          todos: tmp_todos
        }, function() {
           console.log(this.state);
        })
        */
        console.log( "removed from backend" );
      }.bind( this ),
      error: function ( xhr, status, err ) {
        console.log( err );
      }
    });
  }
  render() {
    //console.log(this.props.todo);
    return ( <tr>
      <td hidden="hidden">{this.props.todo.id}</td>
      <td>{this.props.todo.title}</td>
      <td>{this.props.todo.description}</td>
      <td>{this.props.todo.status}</td>
      <td>{this.props.todo.duedate}</td>
      <td>
        <button type="button" className="btn btn-danger" onClick={this.deleteTodo.bind( this, this.props.todo.id )}>Delete</button>
      </td>
    </tr> );
  }
}

export default Todo;
