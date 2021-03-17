import React,{Component} from 'react'
import axios from 'axios'
import './index.css'
export default class Search extends Component{

   
    clickBtns=()=>{
      
       
        console.log(this,'查看this值啦啦啦')
        // 连续重复赋值,value键与值如果是相等的时候就直接写value
        // 冒号前面代表的是从this中解构出来的变量名，冒号后面表示的是这个变量名重命名了，并且把值赋值给了他
        const {inputParams:{value:val}}=this
        // const {}=this.props
         axios.get(`/api1/search/users?q=${val}`).then((response)=>{
           console.log(response)
           let {updateState}=this.props
          if(response.data){
            updateState( {
                isLoading:false,
                isFirst:true,
               
               })
           
         
          }
         
        

         },(error)=>{
         console.log(error,'909090')
         let {updateState}=this.props
         updateState( {
            isLoading:true,
            isFirst:false,
           
           })
     
         })
        
        
     
    }
    render(){
        return <section >
               <div className="searchCenter">
               <div className="searchTitle">搜索gitHub用户</div>
               <div className="searchBtn">
                   <input placeholder="输入关键词点击搜索" ref={(c)=>{ return this.inputParams=c}}/>
                  < button onClick={this.clickBtns}>搜索</button>
               </div>
               </div>
        </section>
    }
}