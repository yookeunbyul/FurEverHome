import styled from 'styled-components';
import Header from '../components/layout/Header';
import Selects from '../components/features/Selects';
import OneDaySection from '../components/layout/OneDaySection';
import CardList from '../components/features/CardList';

function ListPage() {
    return (
        <>
            <Header />
            <OneDaySection paddingTop="8rem" mobilePaddingTop="6rem" />
            <Container className="mw">
                <Selects />
                <Title>
                    <span className="point">$data.size</span>마리의 친구들이 기다리고 있어요
                </Title>
                <CardList />
            </Container>
        </>
    );
}

const Container = styled.section`
    padding-bottom: 8rem;
`;

const Title = styled.h4`
    font-size: 1.8rem;
    font-weight: 900;
    letter-spacing: -2px;
    padding: 2rem 0;

    @media (max-width: 650px) {
        font-size: 1.5rem;
    }
`;

export default ListPage;
