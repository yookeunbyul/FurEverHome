import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { ChartOptions } from 'chart.js';
import styled from 'styled-components';
import { useAnimals } from '../../hooks/useAnimals';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

export default function BarChart() {
    const states = ['보호중', '종료(자연사)', '종료(입양)', '종료(안락사)', '종료(반환)', '종료(기증)'];
    const labels = ['보호중', '자연사', '입양', '안락사', '반환', '기증'];

    const { data: active } = useAnimals(1, 18, '', '', states[0], '', '');
    const { data: dead } = useAnimals(1, 18, '', '', states[1], '', '');
    const { data: adopted } = useAnimals(1, 18, '', '', states[2], '', '');
    const { data: euthanized } = useAnimals(1, 18, '', '', states[3], '', '');
    const { data: returned } = useAnimals(1, 18, '', '', states[4], '', '');
    const { data: donated } = useAnimals(1, 18, '', '', states[5], '', '');

    const activeLength = active?.AbdmAnimalProtect?.[0]?.head[0].list_total_count;
    const deadLength = dead?.AbdmAnimalProtect?.[0]?.head[0].list_total_count;
    const adoptedLength = adopted?.AbdmAnimalProtect?.[0]?.head[0].list_total_count;
    const euthanizedLength = euthanized?.AbdmAnimalProtect?.[0]?.head[0].list_total_count;
    const returnedLength = returned?.AbdmAnimalProtect?.[0]?.head[0].list_total_count;
    const donatedLength = donated?.AbdmAnimalProtect?.[0]?.head[0].list_total_count;

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

    const data = {
        labels,
        datasets: [
            {
                data: [activeLength, deadLength, adoptedLength, euthanizedLength, returnedLength, donatedLength],
                backgroundColor: ['#008BF0', '#E5E5E5', '#FFF6D6', '#47B2FF', '#D9D9D9', '#FFF3CA'],
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
