import React from 'react';
import { Radar } from 'react-chartjs-2';

const data = {
    labels: ['Arrays & Strings', 'Searching & Sorting', 'Graphs & Trees', 'Stacks & Queues', 'Traversal Algorithms', 'Linked Lists', 'Dynamic Programming'],
    datasets: [
        {
            label: 'My Questions',
            backgroundColor: 'rgba(255,99,132,0.2)',
            borderColor: 'rgba(255,99,132,1)',
            pointBackgroundColor: 'rgba(255,99,132,1)',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgba(255,99,132,1)',
            data: [64, 67, 74, 72, 60, 81, 92]
        }
    ]
};

function RadarMap() {
    return (
        <div className="graph-wrapper">
            <Radar
                data={data}
                options={{ maintainAspectRatio: true, responsive: true }}
            />
        </div>
    );
}

export default RadarMap;