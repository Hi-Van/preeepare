import React, { Component } from 'react';
import { Radar } from 'react-chartjs-2';
import Fade from 'react-reveal/Fade';

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
                <Fade>
                    <Radar
                        data={this.state.data}
                        options={{ maintainAspectRatio: true, responsive: true }}
                    />
                </Fade>
            </div>
        );
    }
}

export default RadarMap;