import React, { Component } from 'react'

export default class Item extends Component {
    clickCheck=(e)=>{
        const {checkedDone}=this.props
       console.log(e,'查看e在item中',this.props) 
       checkedDone(e)
            //   e.target.name
    
    }
    clickDelete=(e)=>{
      console.log(this.props,'props啦啦啦啦啦',e)  
      const {deleteTodo}=this.props
      deleteTodo(e)
    }
    render() {
        console.log(this.props,'在item页面中查看对应得todos')
        const {todos}=this.props
        return (
            <div>
                    {
                        todos.map((item,index)=>{
                            return (
                                <li key={item.id} className="liName">
                                   <div>
                                       {/* 采用defaultChecked可以默认选中 */}
                                   <input   type="checkbox" onClick={()=>{return this.clickCheck(index)}} name={item.id} checked={item.done} />
                                   
                                   <span> { item.name}</span>
                                   </div>
                                   {/* 需要传参就用箭头函数形式，否则会自执行一次，如果直接用this */}
                                   <button type="button" onClick={()=>{return this.clickDelete(index)}}>删除</button>
                                   {/* <button type="button" onClick={this.clickDelete}>删除</button> */}
                                </li>
                              )
                              
                                
                        })
                     
                    }

                 
                
              
            </div>
        )
    }
}
