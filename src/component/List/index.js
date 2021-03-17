import React, { Component } from 'react'
import axios from 'axios'
import './index.css'
export default class List extends Component {
    render() {
        const {inputPara,isFirst, isLoading,isLoadingValue}=this.props
        console.log(isFirst,isLoading,isLoadingValue,'查看对应的list中的数据')
        return (
            <div className="ListContent">
               {
                   isFirst?<h2 style={{color:'black'}}>{inputPara}</h2>:!isLoading?<h2>{isLoadingValue}</h2>:'搜索到了数据'
               }
               
            </div>
        )
    }
}
