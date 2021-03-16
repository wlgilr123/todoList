
import React, { Component } from 'react'
import './App.css'
import Header from './component/Header/header.jsx'
import Center from './component/Center/center.jsx'
import Footer from './component/Footer/footer.jsx'


export default class App extends Component {
	state={
		todos:[
			{id:'001',name:'吃饭',done:true},
			{id:'002',name:'睡觉',done:true},
			{id:'003',name:'敲代码',done:false},
			{id:'004',name:'看电视',done:true}
		],
		todosListNumber:'',
		checkListNumber: '',
		checkedDoneL:"",
		footchecked:false
      
	}
	addTodo=(input)=>{
		
		console.log(input,'llll')
		this.state.todos.unshift(input)
		let checkedDoneList=this.state.todos.filter((item) => {
			return item.done===true
		})
		console.log(this.state.todos,'this.state.todos-===================')
     this.setState({
		todos:this.state.todos,
		checkedDoneL:checkedDoneList.length
	
  })}
//  删除已勾选得列,单一删除
deleteTodo=(deleteInput)=>{
	this.state.todos.splice(deleteInput, 1)
	let checkedDoneList=this.state.todos.filter((item) => {
		return item.done===true
	})
	 console.log('deletetodosdeletetodos',this.state.todos)
    this.setState({
		todos: this.state.todos,
		checkedDoneL:checkedDoneList.length
	})
}
// 清除已完成得任务
deleteAllTodo=()=>{
	const deleteAllTodoList=this.state.todos.filter((item)=>{
return item.done===false
	})
	let checkedDoneList=this.state.todos.filter((item) => {
		return item.done===true
	})
	this.setState({
		// setState是浅比较，如果发现2个数组得地址一样就不会更新
		todos: deleteAllTodoList,
		checkedDoneL:checkedDoneList.length
		
	 })
console.log('deleteAllTododeleteAllTodo',this.state.todos.filter((item)=>{
	return item.done===false
		}))

}
// 修改center组件中得单选中done得值
checkedDone=(key)=>{
	console.log(this.state.todos[key],'this.state.todos[key].done',key)
	this.state.todos[key].done=!this.state.todos[key].done
	console.log(this.state.todos[key].done, '[key].done[key].done')
	let checkedDoneList=this.state.todos.filter((item) => {
		return item.done===true
	})
	 this.setState({
		// setState是浅比较，如果发现2个数组得地址一样就不会更新
todos:[...this.state.todos],
		checkedDoneL:checkedDoneList.length
	 })
	console.log(this.state.checkedDoneL,checkedDoneList)
}
	// 	点击全部
	allCheck = () => {
		if(this.state.footchecked){
			this.state.footchecked=false
			this.state.todos.map((item) => {
				return item.done=false
			})
		}else{
			this.state.footchecked=true
			this.state.todos.map((item) => {
				return item.done=true
			})
		}
		
		let checkedDoneList=this.state.todos.filter((item) => {
			return item.done===true
		})
		console.log(this.state.todos, 'allCheckallCheck')
		this.setState({
			todos:[...this.state.todos],
			checkedDoneL:checkedDoneList.length
		})
	}
	// 
	componentWillMount() {
		console.log('componentWillMountpppppppp')
		const ll=this.state.todos.filter((item) => {
			return item.done===true
		})
		this.setState({
			checkedDoneL:ll.length
		})
		console.log(this.state.todos.filter((item) => {
			return item.done===true
		}),'componentWillMount')
	}
// 控制组件更新得阀门
shouldComponentUpdate(){
	console.log('Count---shouldComponentUpdate');
	return true
}
// 
componentWillUpdate(){
	console.log('Count---componentWillUpdate');
	 let {todosListNumber}=this.state
	 const {todos}=this.state
		todosListNumber=todos.length
	console.log(todosListNumber, 'componentWillUpdate', this.state.todosListNumber, todos)
	// 更新处理状态
	// let checkedDoneList=this.state.todos.filter((item) => {
	// 	return item.done===true
	// })
// 	 this.setState({
// 		// setState是浅比较，如果发现2个数组得地址一样就不会更新
// todos:[...this.state.todos],
// 		checkedDoneL:checkedDoneList.length
// 	 })
	// this.setState({
	// 	todosListNumber:todos.length
	// })
}

	
	render() {
		const {todos}=this.state
	
	
	// this.setState({
		
	// })
		console.log(this.deleteTodo,'deleteTododeleteTodo',this.state.todosListNumber,'render')
		return (
			<div className="divBox">
				<Header addTodo={this.addTodo}/>
				<Center todos={todos} deleteTodo={this.deleteTodo} checkedDone={this.checkedDone}/>
				<Footer deleteAllTodo={this.deleteAllTodo} todosListNumber={todos.length} checkedDoneL={this.state.checkedDoneL} allCheck={ this.allCheck} footchecked={this.state.footchecked}/>
			</div>
		)
	}
}
