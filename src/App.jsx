import React, { Component } from 'react';
import { Button } from 'antd'

class App extends Component {
    render() {
        return (
            <div>
                <Button type="primary">Primary</Button>
                <p className="app">Hello</p>
            </div>
        );
    }
}

export default App;