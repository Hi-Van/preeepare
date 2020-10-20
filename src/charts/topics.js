import React, { Component } from 'react';
import { Radar } from 'react-chartjs-2';

class RadarMap extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: props.data
        }
    }


    render() {
        return (
            <div className="graph-wrapper">
                <Radar
                    data={this.state.data}
                    options={{ maintainAspectRatio: true, responsive: true }}
                />
            </div>
        );
    }
}

export default RadarMap;