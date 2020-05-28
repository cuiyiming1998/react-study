import React, { Component, Fragment } from 'react';
import List from './List'
import Boss from './Boss'

class App extends Component {
    render() {
        return (
            <Fragment>
                <List></List>
                <Boss></Boss>
            </Fragment>
        )
    }
}

export default App;