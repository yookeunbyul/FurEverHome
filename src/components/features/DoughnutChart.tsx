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
        labels: [
            '전체',
            '가평군',
            '고양시',
            '과천시',
            '광명시',
            '광주시',
            '구리시',
            '군포시',
            '김포시',
            '남양주시',
            '동두천시',
            '부천시',
            '성남시',
            '수원시',
            '시흥시',
            '안산시',
            '안성시',
            '안양시',
            '양주시',
            '양평군',
            '여주시',
            '연천군',
            '오산시',
            '용인시',
            '의왕시',
            '의정부시',
            '이천시',
            '파주시',
            '평택시',
            '포천시',
            '하남시',
            '화성시',
        ],
        datasets: [
            {
                label: '유기동물 수',
                data: [
                    75, 489, 32, 153, 490, 59, 107, 505, 627, 112, 474, 409, 473, 310, 591, 357, 97, 954, 204, 313, 279,
                    150, 327, 47, 159, 372, 603, 1221, 617, 140, 767,
                ],
                backgroundColor: ['#FFF9A0', '#66B2E0', '#FFB3B3', '#A4D8FF', '#FFC09F', '#A8E6A1', '#EAB8E6'],
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
