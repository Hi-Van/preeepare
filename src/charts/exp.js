import React, { Component } from 'react';
import { HorizontalBar } from 'react-chartjs-2';

class HorizontalTwo extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: props.data
        }
    }
    

    render() {
        return (
            <div className="graph-wrapper">
                <HorizontalBar
                    data={this.state.data}
                    options={{ maintainAspectRatio: true, responsive: true }}
                />
            </div>
        );
    }
}

export default HorizontalTwo;