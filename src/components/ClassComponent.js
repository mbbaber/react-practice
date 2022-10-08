import React from "react";
import { Component } from "react";

class Practice extends Component {
    state = {
        count: 0,
    }

    increment = () => {
        this.setState({
            count: this.state.count + 1,
        })
    }

    componentDidMount() {
        document.title =  `clicked ${this.state.count} times`
    }

    componentDidUpdate() {
        document.title =  `clicked ${this.state.count} times`
    }

    render() {
        return (
            <div>
                ClassComponent
                <button onClick={this.increment}> {this.state.count}</button>
            </div>
        )
    }
}

export default Practice;