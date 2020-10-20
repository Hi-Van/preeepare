import React, { Component } from 'react';
import { HorizontalBar } from 'react-chartjs-2';


class HorizontalTwo extends Component {

    constructor(props) {
        super(props);
        this.state = {
            expData: {
                labels: ['My Attempts'],
                datasets: [
                    {
                        label: 'Easy',
                        backgroundColor: 'rgba(140, 204, 92,0.2)',
                        borderColor: 'rgba(140, 204, 92,1)',
                        borderWidth: 1,
                        data: [68]
                    },
                    {
                        label: 'Medium',
                        backgroundColor: 'rgba(219, 158, 72,0.2)',
                        borderColor: 'rgba(219, 158, 72,1)',
                        borderWidth: 1,
                        data: [100]
                    },
                    {
                        label: 'Hard',
                        backgroundColor: 'rgba(255,99,132,0.2)',
                        borderColor: 'rgba(255,99,132,1)',
                        borderWidth: 1,
                        data: [32]
                    }
                ]
            }
        }
    }

    render() {
        return (
            <div className="graph-wrapper">
                <HorizontalBar
                    data={this.state.expData}
                    options={{ maintainAspectRatio: true, responsive: true }}
                />
            </div>
        );
    }
}

export default HorizontalTwo;