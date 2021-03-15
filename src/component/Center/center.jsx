import React, { Component } from 'react'
import Item from '../Item/Item.jsx'
import './center.css'
export default class center extends Component {
    render() {
        const {todos,deleteTodo,checkedDone}=this.props
        console.log(todos,'查看在center.js中得todos',this.props)
        return (
            <div className="center">
                  <ul>
                      {/* deleteTodo={deleteTodo} */}
                  <Item todos={todos}  deleteTodo={deleteTodo} checkedDone={checkedDone}/>


                   </ul>
             
            </div>
        )
    }
}
