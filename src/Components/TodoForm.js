import React, { Component } from 'react';
import { Autobind } from '../../node_modules/es-decorators';

const formToJSON = elements => [].reduce.call(elements, (data, element) => {

  data[element.name] = element.value;
  return data;

}, {});

const form = document.getElementsByClassName('todo-form')[0];

class TodoForm extends Component {
  constructor() {
    super();
    this.state = {
      title: '',
      status: '',
      duedate: '',
      description: ''
    };
    //this.handleChange = this.handleChange.bind( this );
    //this.handleSubmit = this.handleSubmit.bind( this );
  }
  componentWillMount() {}

  componentDidMount() {}

  //@Autobind
  // add(e) {
  //     e.preventDefault();
  //     this.collection.add(this.state);
  //     this.refs.form.reset();
  //     this.props.handleAdd({'id': 'aa123', 'title': "just checking"});
  // }

  handleChange( event ) {
    this.setState( { value: event.target.value } );
  }

  handleSubmit( event ) {
    // alert('A Todo items was submitted: ' + event.target.todo.title);
    console.log( "in form handleSubmit" + event.target );
    //const form = event.target;
    //const formData = new FormData( form );

    const data = formToJSON(form.elements);

    console.log(data);
    /* console.log(formData.entries());
    // use uuid here to generate a unique id
    let jsonObject = {};

    for ( const [key, value] of formData.entries() ) {
      console.log('key: '+key+', value: '+value);
      jsonObject[ key ] = value;
    }
    console.log( "form data: " );
    console.log( jsonObject );
    */
    this.props.handleAdd( { 'id': 'aa123', 'title': "just checking" } );
    event.preventDefault();
  }

  render() {
    return ( <div className="container">
      <div className="jumbotron">
        <div className="container">
          <form className="todo-form" onSubmit={this.handleSubmit}>
            <div className="form-row">
              <div className="col">
                <input type="text" name="title" value={this.state.title} className="form-control" id="todo.title" aria-describedby="Todo Title" placeholder="Todo Title"/>
              </div>

              <div className="col">
                <select className="form-control" id="todo.status">
                  <option>Pending</option>
                  <option>In Progress</option>
                  <option>Done</option>
                </select>
              </div>

              <div className="col">
                <input type="date" className="form-control" id="todo.duedate" aria-describedby="Todo Due Date" placeholder="Todo Due Date"/>
              </div>
            </div>
            <div className="form-row">
              <div className="col-8">
                <textarea className="form-control" id="todo.description" rows="1" placeholder="Todo Description"></textarea>
              </div>
              <div className="col-4">
                <button type="submit" className="btn btn-primary">Add Todo</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div> );
  }
}

export default TodoForm;
