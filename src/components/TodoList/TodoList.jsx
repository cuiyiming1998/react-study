import React, { Component } from 'react';
import { Input, Button, List } from 'antd'
import store from '../../store'
import './style.less'

class TodoList extends Component {
    constructor(props){
        super(props);
        this.state = store.getState();
        store.subscribe(this.storeChange)
    }

    changeInputValue = (e) => {
        const action = {
            type: 'changeInput',
            value: e.target.value
        }
        store.dispatch(action);
    }

    storeChange = () => {
        this.setState(store.getState());
    }

    clickBtn = () => {
        const action = {
            type: 'addItem'
        }
        store.dispatch(action);
    }

    removeItem = (index) => {
        const action = {
            type: 'removeItem',
            index: index
        }
        store.dispatch(action)
    }

    render() {
        return (
            <div className='main'>
                <div>
                    <Input onChange={this.changeInputValue} value={this.state.inputValue} placeholder='...' style={{width:'250px',marginRight:'10px'}} />
                    <Button onClick={this.clickBtn} type="primary">增加</Button>
                    <div style={{margin: '10px',width: '300px'}}>
                        <List
                            bordered
                            dataSource={this.state.list}
                            renderItem={(item,index)=>{
                                return (
                                    <List.Item onClick={()=>{this.removeItem(index)}}>{ item }</List.Item>
                                )
                            }}
                        />
                    </div>
                </div>
            </div>
        );
    }
}

export default TodoList;