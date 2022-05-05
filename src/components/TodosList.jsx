import React, {Component} from 'react';
import TodoItem from './TodoItem';

class TodosList extends Component {
    render() { 
        return (
            <ul>
            {this.props.todos.map(todo => (
              <li key={this.id}>{todo.title}</li>
            ))}
          </ul>
        );
    }
}
 
export default TodosList;