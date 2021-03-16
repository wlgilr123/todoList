import React, { Component } from 'react'
import axios from 'axios'
import './index.css'
export default class List extends Component {
    render() {
        const {inputPara}=this.props
        return (
            <div className="ListContent">
                {inputPara}
            </div>
        )
    }
}
