import React, { Component } from 'react';
import { Button } from 'antd'
import './Boss.less'

class Boss extends Component {
    constructor(props){
        super(props);
        this.state = {
            isShow : false
        }
    }
    render() {
        return (
            <div>
                <div className={'boss'+" "+(this.state.isShow?'show':'hide')}>Boss---孙悟空</div>
                <div>
                    <Button onClick={this.toToggle}>召唤Boss</Button>
                </div>
            </div>
        );
    }

    toToggle = ()=>{
        this.setState({
            isShow : !this.state.isShow
        })
    }
}

export default Boss;