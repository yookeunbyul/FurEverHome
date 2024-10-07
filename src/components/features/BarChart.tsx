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

    const labels = ['보호중', '자연사', '입양', '안락사', '반환', '기증'];

    const data = {
        labels,
        datasets: [
            {
                data: [1999, 2614, 1916, 1954, 1461, 796],
                backgroundColor: ['#008BF0', '#E5E5E5', '#47B2FF', '#FFF6D6', '#D9D9D9'],
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
