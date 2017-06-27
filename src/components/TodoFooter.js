import React,{Component} from 'react';
import * as filterTypes from './filter-types'
export default class TodoFooter extends Component {
    render(){
        return(
        <div className="row">
            <div className="col-md-3">
                <span>待办{this.props.activeCount}</span>
            </div>
            <div className="col-md-6">
                <button className={"btn btn-default "+(this.props.filter==filterTypes.SHOW_ALL?'active':'')} style={{marginRight:5}} onClick={()=>this.props.changeFilter(filterTypes.SHOW_ALL)}>全部</button>
                <button className={"btn btn-default "+(this.props.filter==filterTypes.SHOW_ACTIVE?'active':'')} style={{marginRight:5}} onClick={()=>this.props.changeFilter(filterTypes.SHOW_ACTIVE)}>未完成</button>
                <button className={"btn btn-default "+(this.props.filter==filterTypes.SHOW_COMPLETED?'active':'')} onClick={()=>this.props.changeFilter(filterTypes.SHOW_COMPLETED)}>已完成</button>
            </div>
            <div className="col-md-3">
                <button className="btn btn-danger">删除已完成</button>
            </div>
        </div>
        )
    }
}