import React, { Component } from 'react'
import './footer.css'
export default class footer extends Component {
    handleDelete=()=>{
        const {deleteAllTodo}=this.props
       
        deleteAllTodo()
    }
    allChecked = () => {
        const { allCheck } = this.props
        allCheck()
    }
    render() {
        const { todosListNumber, checkedDoneL } = this.props
        
        return (
            <div className="footer">
               <span>
                    <input type="checkbox" onClick={ this.allChecked}/>
                   已完成{ checkedDoneL}/全部{todosListNumber}
               </span>
               <span>
                   <button type="reset" className="btn btn-danger" onClick={this.handleDelete}>清除已完成任务</button>
               </span>
            </div>
        )
    }
}
