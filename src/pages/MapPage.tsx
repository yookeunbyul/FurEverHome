import Map from '../components/features/Map';
import Header from '../components/layout/Header';
import Selects from '../components/features/Selects';
import styled from 'styled-components';
import CardList from '../components/features/CardList';

function MapPage() {
    return (
        <>
            <Header />
            <Container className="mw">
                <MainTitle>나와 가까운 보호소를 클릭해 보세요</MainTitle>
                <Map />
                <Selects />
                <Title>
                    <span>
                        <span className="point">$보호소 이름</span>에서
                    </span>
                    <span>친구들이 기다리고 있어요</span>
                </Title>
                <CardList />
            </Container>
        </>
    );
}

const Container = styled.section`
    padding-bottom: 8rem;
`;

const MainTitle = styled.h3`
    font-size: 2rem;
    font-weight: 900;
    letter-spacing: -2px;
    padding-top: 4rem;
    padding-bottom: 2rem;

    @media (max-width: 650px) {
        font-size: 1.7rem;
    }
`;

const Title = styled.h4`
    font-size: 1.8rem;
    font-weight: 900;
    letter-spacing: -2px;
    padding: 2rem 0;
    display: flex;
    gap: 0.5rem;

    @media (max-width: 650px) {
        font-size: 1.7rem;
        flex-direction: column;
        gap: 0rem;
    }
`;

export default MapPage;
