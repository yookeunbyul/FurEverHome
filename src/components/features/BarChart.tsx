import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { ChartOptions } from 'chart.js';
import styled from 'styled-components';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

export default function BarChart() {
    const options: ChartOptions<'bar'> = {
        responsive: true,
        scales: {
            x: {
                grid: {
                    drawOnChartArea: false, // x축 그리드 선 제거
                },
            },
            y: {
                grid: {
                    drawOnChartArea: false, // y축 그리드 선 제거
                },
            },
        },
        indexAxis: 'y',
        plugins: {
            legend: {
                display: false,
            },
            title: {
                display: false,
            },
        },
    };

    const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

    const data = {
        labels,
        datasets: [
            {
                label: '분류 1',
                data: [1, 2, 3, 4, 5, 6, 7],
                backgroundColor: 'rgba(255, 99, 132)',
                barPercentage: 0.8,
            },
        ],
    };

    return (
        <ChartContainer>
            <Bar options={options} data={data} />
        </ChartContainer>
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
