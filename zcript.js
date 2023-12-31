const ctx = document.getElementById('myChart').getContext('2d');
let chart;


const initialData = {
    labels: [],
    datasets: [{
        label: 'Value',
        data: [],
        borderColor: 'gold',
        borderWidth: 3,
        fill: true,
        backgroundColor: 'black',
    }],
};


const update = {
    type: 'line',
    data: initialData,
    options: {
        scales: {
            x: {
                type: 'linear',
                position: 'bottom',
                title: {
                    display: true,
                    text: 'Time',
                },
            },
            y: {
                beginAtZero: true,
                title: {
                    display: true,
                    text: 'Value',
                },
            },
        },
        animation: true,
    },
};


chart = new Chart(ctx, update);


function addData() {
    const newData = Math.random() * 100; 
    chart.data.labels.push(chart.data.labels.length);
    chart.data.datasets[0].data.push(newData);
    chart.update(); 
}


setInterval(addData, 1000);
