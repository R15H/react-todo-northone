import React, {Component} from 'react';

class TodoForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  componentWillMount() {}

  componentDidMount() {}

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('A Todo items was submitted: ' + this.state.title);
    event.preventDefault();
  }

  render() {
    return (<div className="container">
      <div className="jumbotron">
        <div className="container">
          <form onSubmit={this.handleSubmit}>
            <div className="form-row">
              <div className="col">
                <input type="text" className="form-control" id="todo.title" aria-describedby="Todo Title" placeholder="Todo Title"/>
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
    </div>);
  }
}

export default TodoForm;
