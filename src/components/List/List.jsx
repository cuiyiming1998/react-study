import React, { Component, Fragment } from 'react';
import { Button, Input } from 'antd'
import axios from 'axios'

class List extends Component {
    constructor(props){
        super(props);
        this.state = {
            inputValue: '',
            list: []
        }
    }
    // 监听输入事件
    inputChange = (e)=>{
        this.setState({
            inputValue: e.target.value
        })
    }
    // 添加列表项
    addItem = ()=>{
        this.setState({
            list: [...this.state.list,this.state.inputValue],
            inputValue: ''
        })
    }
    // 删除列表项
    removeItem = (index)=>{
        // 不要直接修改state中的值
        let listResult = this.state.list;
        listResult.splice(index,1);
        this.setState({
            list: listResult
        })
    }
    componentDidMount(){
        axios.get('https://www.fastmock.site/mock/44ed3303592068e97c681ba9b7c2d35a/react/api/test')
            .then((res)=>{
                this.setState({
                    list: res.data.data
                })
            })
            .catch((error)=>{console.log(error)})
    }
    render() {
        return (
            <Fragment>
                <Input value={ this.state.inputValue } onChange={(e)=>{this.inputChange(e)}} style={{ width: '50%' }} placeholder="请添加列表项"></Input>
                <Button onClick={this.addItem}>增加</Button>
                <ul>
                {
                    this.state.list.map((item,index)=>{
                        return (
                            <li key={index} onClick={()=>{this.removeItem(index)}}>
                                第{index+1}个：{item}
                            </li>
                        )
                    })
                }
                </ul>
            </Fragment>
        );
    }
}

export default List;