import React, { Component, Fragment } from 'react';
import TodoList from './components/TodoList/TodoList'
// import AppRouter from './components/AppRouter'

class App extends Component {
    render() {
        return (
            <Fragment>
                <TodoList></TodoList>
            </Fragment>
        )
    }
}

export default App;