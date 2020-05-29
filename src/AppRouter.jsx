import React, { Component } from 'react';
import { BrowserRouter as Router, Route , Link} from 'react-router-dom'
import Home from './components/Home/Home'
import List from './components/List/List'
import Boss from './components/Boss/Boss'
import Test from './components/Test/Test'
import Hooks from './components/Hooks/Hooks'
import TodoList from './components/TodoList/TodoList'



class AppRouter extends Component {
    render() {
        return (
            <Router>
                <div>
                    <Link to="/">首页 | </Link>
                    <Link to="/list">列表页 | </Link>
                    <Link to="/boss">Boss页 | </Link>
                    <Link to="/test/123">Test页 | </Link>
                    <Link to="/todolist">Todo页 | </Link>
                    <Link to="/hooks">Hooks页</Link>
                </div>
                <Route path="/" exact component={Home}></Route>
                <Route path="/list" component={List}></Route>
                <Route path="/boss" component={Boss}></Route>
                <Route path="/test/:id" component={Test}></Route>
                <Route path="/todolist" component={TodoList}></Route>
                <Route path="/hooks" component={Hooks}></Route>
            </Router>
        );
    }
}

export default AppRouter;