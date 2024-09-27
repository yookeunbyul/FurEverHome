import CardList from '../components/common/CardList';
import Header from '../components/layout/Header';
import styled from 'styled-components';
import GlobalStyle from '../styles/GlobalStyle';

function BookMarkPage() {
    return (
        <>
            <GlobalStyle />
            <Header />
            <Container className="mw">
                <Title>친구들에게 관심을 가져주셔서 감사해요!</Title>
                <CardList paddingTop="2rem" />
            </Container>
        </>
    );
}

const Container = styled.section``;

const Title = styled.h3`
    font-size: 2rem;
    font-weight: 900;
    letter-spacing: -2px;
    padding-top: 4rem;

    @media (max-width: 650px) {
        font-size: 1.7rem;
    }
`;

export default BookMarkPage;
