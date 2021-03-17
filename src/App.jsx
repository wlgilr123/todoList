import React,{Component} from 'react'
import axios from 'axios'
import Search from './component/Search'
import List from './component/List'
export default class App extends Component {
state={
    inputPara:"欢迎使用，输入关键字，随后点击搜索",
    isLoading:false,
    isFirst:true,
    isLoadingValue:'isLoading....'
}
// 搜索按钮点击事件
clickBtn=(e)=>{
this.setState({
    inputPara:e
})
}
// 更新search组件中的状态方法
updateState=(stateObj)=>{
  this.setState(stateObj)
}

       render(){
           return <div style={{width:'50%',margin:'0 auto'}}>
              <Search clickBtn={this.clickBtn} updateState={this.updateState}></Search>
              <List {...this.state}></List>
           </div>

     }
}                                                                                                                                                            