import React, { Component } from 'react';
import { Input, Button, List } from 'antd'
import './style.less'

const data = [
    '早8点开晨会，分配今天代码任务',
    '早9点，和项目经理开需求沟通会',
    '中午12点，吃饭'
]

class TodoList extends Component {
    constructor(props){
        super(props);
        this.state = {

        }
    }
    render() {
        return (
            <div className='main'>
                <div>
                    <Input placeholder='Write something...' style={{width:'250px',marginRight:'10px'}} />
                    <Button type="primary">增加</Button>
                    <div style={{margin: '10px',width: '300px'}}>
                        <List
                            bordered
                            dataSource={data}
                            renderItem={(item)=>{
                                return (
                                    <List.Item>{ item }</List.Item>
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