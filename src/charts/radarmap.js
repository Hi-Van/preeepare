import React from 'react';
import { Radar } from 'react-chartjs-2';

const data = {
    labels: ['Arrays & Strings', 'Searching & Sorting', 'Graphs & Trees', 'Stacks & Queues', 'Traversal Algorithms', 'Linked Lists', 'Dynamic Programming'],
    datasets: [
        {
            label: 'My Topics',
            backgroundColor: 'rgba(255,99,132,0.2)',
            borderColor: 'rgba(255,99,132,1)',
            pointBackgroundColor: 'rgba(255,99,132,1)',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgba(255,99,132,1)',
            data: [28, 48, 40, 19, 96, 27, 100]
        }
    ]
};

function RadarMap() {
    return (
        <div className="radar-wrapper">
            <Radar
                data={data}
                options={{ maintainAspectRatio: true, responsive: true }}
            />
        </div>
    );
}

export default RadarMap;