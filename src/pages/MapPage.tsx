import Map from '../components/features/Map';
import Header from '../components/layout/Header';
import ListSection from '../components/layout/ListSection';
import GlobalStyle from '../styles/GlobalStyle';
import styled from 'styled-components';

function MapPage() {
    return (
        <>
            <GlobalStyle />
            <Header />
            <Container className="mw">
                <Title>나와 가까운 보호소를 클릭해 보세요</Title>
                <Map />
                <ListSection />
            </Container>
        </>
    );
}

const Container = styled.div``;

const Title = styled.h3`
    font-size: 2rem;
    font-weight: 900;
    letter-spacing: -2px;
    padding-top: 4rem;
    padding-bottom: 2rem;

    @media (max-width: 650px) {
        font-size: 1.7rem;
    }
`;

export default MapPage;
