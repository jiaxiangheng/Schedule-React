import React,{Component} from 'react';
import TodoHeader from './TodoHeader'
import TodoList from './TodoList'
import TodoFooter from './TodoFooter'
import * as filterTypes from './filter-types'

export default class TodoApp extends Component {
    constructor(props){
        super(props);
        this.state = {
            filter:filterTypes.SHOW_ALL,//定义新的过滤条件
            todos:[]//todo对象数组 {id,content,completed}
        }
    }
    toggle = (id)=>{
        let todos = this.state.todos.map(item=>{
            if(item.id === id)
                item.completed = !item.completed;
            return item;
        });
        this.setState({todos});
    }
    //增加TODO
    addTodo = (todo)=>{ //参数为todo对象
        todo.id = Date.now()+''+Math.random();//添加ID
        todo.completed = false;//添加完成状态
        this.state.todos.push(todo);//向老数组里添加一个新的元素
        this.setState({todos:this.state.todos});//设置状态
    }
    delTodo = (deleteId)=>{
        let todos = this.state.todos.filter((todo)=>todo.id != deleteId);
        this.setState({todos});
    }
    toggleAll = (checked)=>{
        let todos = this.state.todos.map(todo=>{
            todo.completed = checked;
            return todo;
        });
        this.setState({todos});
    }
    changeFilter = (filter)=>{
        this.setState({filter});
    }

    render() {
        let showTodos = this.state.todos.filter(todo=>{
            switch (this.state.filter){
                case filterTypes.SHOW_ACTIVE:
                    return !todo.completed;
                case filterTypes.SHOW_COMPLETED:
                    return todo.completed;
                default:
                    return true;
            }
        });
        //未完成的事件数量
        let activeCount=this.state.todos.filter(item=>!item.completed).length;
        return (
            <div className="container">
                <div className="container" style={{marginTop: 10}}>
                    <div className="row">
                        <div className="col-md-6 col-md-offset-3">
                            <div className="panel panel-default">
                                <div className="panel-heading">
                                    <TodoHeader addTodo={this.addTodo}/>
                                </div>
                                <div className="panel-body">
                                    <TodoList toggleAll={this.toggleAll} activeCount={activeCount} todos={showTodos} delTodo={this.delTodo} toggle={this.toggle}/>
                                </div>
                                <div className="panel-footer">
                                    <TodoFooter filter={this.state.filter} changeFilter={this.changeFilter} activeCount={activeCount}/>


                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
