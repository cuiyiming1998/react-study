import React, { Component, Fragment } from 'react';
// import TodoList from './components/TodoList/TodoList'
// import Hooks from './components/Hooks/Hooks'
import AppRouter from './AppRouter';

class App extends Component {
    render() {
        return (
            <Fragment>
                <AppRouter></AppRouter>
            </Fragment>
        )
    }
}

export default App;