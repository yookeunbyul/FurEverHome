import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import { ChartOptions } from 'chart.js';
import styled from 'styled-components';

ChartJS.register(ArcElement, Tooltip, Legend);

export default function DoughnutChart() {
    const options: ChartOptions<'doughnut'> = {
        responsive: true,
        cutout: '80%',
        plugins: {
            legend: {
                display: false,
            },
            title: {
                display: false,
            },
        },
    };
    const data = {
        labels: ['Red', 'Blue', 'Yellow'],
        datasets: [
            {
                label: 'test',
                data: [12, 19, 3],
                backgroundColor: ['rgba(255, 99, 132)', 'rgba(54, 162, 235)', 'rgba(255, 206, 86)'],
                borderWidth: 1,
            },
        ],
    };

    return (
        <>
            <ChartContainer>
                <Doughnut data={data} options={options} />
            </ChartContainer>
        </>
    );
}

const ChartContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 300px; // 원하는 높이로 조정
    @media (max-width: 768px) {
        height: 200px; // 모바일에서의 높이
    }
`;
