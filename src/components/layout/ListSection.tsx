import GlobalStyle from '../../styles/GlobalStyle';
import styled from 'styled-components';
import Select from '../common/Select';
import Card from '../common/Card';

function ListSection() {
    return (
        <>
            <GlobalStyle />
            <Container className="mw">
                <SelectArea>
                    <Select />
                    <Select />
                    <Select />
                    <Select />
                    <Select />
                    <Select />
                </SelectArea>
                <Title>
                    <span className="point">$data.size</span>마리의 친구들이 기다리고 있어요
                </Title>
                <CardArea>
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                </CardArea>
            </Container>
        </>
    );
}

const Container = styled.section`
    padding-bottom: 8rem;
`;

const SelectArea = styled.div`
    margin-top: 8rem;
    margin-bottom: 2rem;
    display: flex;
    gap: 1rem;

    @media (max-width: 650px) {
        gap: 0.5rem;
        margin-top: 6rem;
    }
`;

const Title = styled.h4`
    font-size: 1.8rem;
    font-weight: 900;
    letter-spacing: -2px;
    padding-bottom: 2rem;

    @media (max-width: 650px) {
        font-size: 1.5rem;
    }
`;

const CardArea = styled.div`
    display: grid;
    grid-template-columns: repeat(6, 1fr); // 한 줄에 6개 카드
    gap: 40px; // 카드 간의 간격

    @media (max-width: 1400px) {
        grid-template-columns: repeat(5, 1fr); // 한 줄에 5개 카드
    }

    @media (max-width: 1200px) {
        grid-template-columns: repeat(4, 1fr); // 한 줄에 4개 카드
    }

    @media (max-width: 1000px) {
        grid-template-columns: repeat(3, 1fr); // 한 줄에 3개 카드
    }

    @media (max-width: 768px) {
        grid-template-columns: repeat(2, 1fr); // 한 줄에 2개 카드
    }
`;

export default ListSection;
