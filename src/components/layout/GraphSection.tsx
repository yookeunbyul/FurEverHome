import GlobalStyle from '../../styles/GlobalStyle';
import styled from 'styled-components';
import BarChart from '../features/BarChart';
import DoughnutChart from '../features/DoughnutChart';

function GraphSection() {
    return (
        <>
            <GlobalStyle />
            <Container className="mw">
                <Title>경기도</Title>
                <Title>
                    <span className="point">유기동물</span> 현황
                </Title>
                <ChartArea>
                    <ChartWrapper>
                        <DoughnutChart />
                    </ChartWrapper>
                    <ChartWrapper>
                        <BarChart />
                    </ChartWrapper>
                </ChartArea>
            </Container>
        </>
    );
}

const Container = styled.section`
    padding-top: 12rem;
`;

const Title = styled.h3`
    font-size: 2rem;
    font-weight: 900;
    letter-spacing: -2px;

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
    @media (max-width: 768px) {
        width: 100%;
    }
`;

export default GraphSection;
