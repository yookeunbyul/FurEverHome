import styled from 'styled-components';
import BarChart from '../features/BarChart';
import DoughnutChart from '../features/DoughnutChart';

function GraphSection() {
    return (
        <>
            <Container className="mw">
                <Title>경기도</Title>
                <Title>
                    <span className="point">유기동물</span> 현황
                </Title>
                <ChartArea>
                    <ChartWrapper>
                        <DoughnutChart />
                        <ChartTitle>시군별 유기동물 수</ChartTitle>
                    </ChartWrapper>
                    <ChartWrapper>
                        <BarChart />
                        <ChartTitle>유기동물 상태</ChartTitle>
                    </ChartWrapper>
                </ChartArea>
            </Container>
        </>
    );
}

const Container = styled.section`
    padding-top: 12rem;
    padding-bottom: 4rem;

    @media (max-width: 650px) {
        padding-top: 8rem;
        padding-bottom: 0rem;
    }
`;

const Title = styled.h3`
    font-size: 1.8rem;
    font-weight: 900;
    letter-spacing: -2px;
    line-height: 1.3;

    @media (max-width: 650px) {
        font-size: 1.7rem;
    }
`;

const ChartArea = styled.div`
    margin-top: 5rem;
    margin-bottom: 8rem;
    display: flex;
    flex-wrap: wrap; // 자동으로 다음 줄로
    gap: 20px;
    @media (max-width: 768px) {
        flex-direction: column;
        gap: 80px;
        margin-bottom: 5rem;
    }
`;

const ChartWrapper = styled.div`
    flex: 1;
    min-width: 300px;
    text-align: center;
    @media (max-width: 768px) {
        width: 100%;
    }
`;

const ChartTitle = styled.div`
    margin-top: 1.5rem;
    color: #7f7f7f;
    letter-spacing: -1px;
`;

export default GraphSection;
