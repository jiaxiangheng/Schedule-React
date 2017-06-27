import React,{Component} from 'react';

export default class TodoItem extends Component {
    render(){
        return(
            <li className="list-group-item">
                <input type="checkbox" checked={this.props.todo.completed} onChange={()=>this.props.toggle(this.props.todo.id)}/>
                <span style={{marginLeft:10,textDecoration:this.props.todo.completed?'line-through':'none'}}>{this.props.todo.content}</span>
                <button className="btn btn-danger btn-xs pull-right" onClick={()=>this.props.delTodo(this.props.todo.id)}>X</button>
            </li>
        )
    }
}