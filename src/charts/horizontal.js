
import React from 'react';
import { HorizontalBar } from 'react-chartjs-2';

const data = {
    labels: ['My Attempts'],
    datasets: [
        {
            label: 'Total Attempts',
            backgroundColor: 'rgba(92, 129, 204,0.2)',
            borderColor: 'rgba(92, 129, 204,1)',
            borderWidth: 1,
            data: [100]
        },
        {
            label: 'Correct',
            backgroundColor: 'rgba(140, 204, 92,0.2)',
            borderColor: 'rgba(140, 204, 92,1)',
            borderWidth: 1,
            data: [68]
        },
        {
            label: 'Incorrect',
            backgroundColor: 'rgba(255,99,132,0.2)',
            borderColor: 'rgba(255,99,132,1)',
            borderWidth: 1,
            data: [32]
        }
    ]
};

function Horizontal() {
    return (
        <div className="horizontal-wrapper">
            <HorizontalBar
                data={data}
                options={{ maintainAspectRatio: true, responsive: true }}
            />
        </div>
    );
}

export default Horizontal;
