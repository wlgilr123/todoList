import React, { Component } from 'react'
import './header.css'
import {nanoid} from 'nanoid'

export default class header extends Component {
    render() {
        return (
            <div className="header">
               <input type="text" placeholder="请输入你的任务名称，按回车键确认" onChange={this.inputParams} onKeyUp={this.handleKeyPress} />
            </div>
        )
    }
    inputParams=(e)=>{
       console.log(e,'查看e值')
       console.log(e.target.value,'e.nativeEvent.data')
    }
    handleKeyPress=(event)=>{
   console.log(event.target.value,'event.target.value','查看接收值',event.keyCode)
//    键盘事件enter键盘码数是13
   if(event.keyCode===13){
    this.props.addTodo({id:nanoid(),name:event.target.value,done:true})
   console.log(this.props,'this.props909099090')
   }
   
    }
   
} 
