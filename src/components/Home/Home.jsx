import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class Home extends Component {
    constructor(props){
        super(props);
        this.state = {
            list: [
                {cid:123, title:'小明的文章'},
                {cid:456, title:'小黑的文章'},
                {cid:789, title:'小蔡的文章'},
            ]
        }
    }
    render() {
        return (
            <ul>
                {
                    this.state.list.map((item,index)=>{
                        return (
                            <li key={item+index}>
                                <Link to={"/test/"+item.cid}>
                                    id:{item.cid}———标题:{item.title}
                                </Link>
                            </li>
                        )
                    })
                }
            </ul>
        );
    }
}

export default Home;