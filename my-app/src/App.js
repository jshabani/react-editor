import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const name = 'World!';
const shortHeader = <h2>My Short Message</h2>;
const longHeader = <h1>My Message</h1>;


class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: 'World',
            message: props.initialMessage,
            color: '#4682b4'
        };
    }

    handleClick() {
        const name = this.state.name === 'World' ? 'Planet' : 'World';
        this.setState({ name });
    }

    handleChange(value) {
        this.setState({
            name: value
        });
    }
    render() {
        const header = this.state.message.length < 20 ? shortHeader : longHeader;


        return (
            <div>
                <div className="App">
                    <div className="App-header">
                        <img src={logo} className="App-logo" alt="logo" />
                        <h2>To my first react App</h2>
                    </div>
                    <p className="App-intro">
            To get started, edit <code>src/App.js</code> and save to reload.
                    </p>
                </div>
                <div className="App" onClick={() => this.handleClick()}>
          Hello {this.state.name}
                </div>
                <div>
                    <label>
                        <input value={this.state.name}
                            onChange={({ target }) => this.handleChange(target.value)} />
                    </label>
                </div>
                <div>
                    {header}
                    <div>
                        <label>
 Message:<input name="message" value={this.state.message} onChange={({ target }) => this.handleChange(target)}/>
                        </label>
                        <label>
Color:<input name="color" value={this.state.color} type="color" onChange={({ target }) => this.handleChange(target)}/>
                        </label>
                    </div>
                    <div className="display" style={{
                        color: this.state.color
                    }}>
                        {this.state.message}
                    </div>
                </div>
            </div>

        );
    }
}

export default App;
