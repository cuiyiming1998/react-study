import React, { Component } from 'react';

class Test extends Component {
    constructor(props){
        super(props);
        this.state = {
            id: null
        }
    }
    render() {
        return (
            <div>
                <h1>这是Test页面,id = {this.state.id}</h1>
            </div>
        );
    }
    componentDidMount(){
        let tmpId = this.props.match.params.id;
        this.setState({
            id: tmpId
        })
    }
}

export default Test;