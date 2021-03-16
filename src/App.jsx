import React,{Component} from 'react'
import axios from 'axios'
import Search from './component/Search'
import List from './component/List'
export default class App extends Component {
state={
    inputPara:""
}
// 搜索按钮点击事件
clickBtn=(e)=>{
this.setState({
    inputPara:e
})
}

       render(){
           return <div style={{width:'50%',margin:'0 auto'}}>
              <Search clickBtn={this.clickBtn}></Search>
              <List inputPara={this.state.inputPara}></List>
           </div>

     }
}