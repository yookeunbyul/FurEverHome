import CardList from '../components/common/CardList';
import Header from '../components/layout/Header';
import styled from 'styled-components';
import GlobalStyle from '../styles/GlobalStyle';
import illust from '../assets/illust.png';
import { useState } from 'react';

function BookMarkPage() {
    const [length, setLength] = useState(1);

    return (
        <>
            <GlobalStyle />
            <Header />
            <Container className="mw">
                {length ? (
                    <>
                        <Title>친구들에게 관심을 가져주셔서 감사해요!</Title>
                        <CardList paddingTop="2rem" />
                    </>
                ) : (
                    <IllustContainer>
                        <IllustArea>
                            <Illust src={illust} alt="dog and cat" />
                        </IllustArea>
                        <SubTitle>다시 보고 싶은 친구들을 추가해주세요!</SubTitle>
                    </IllustContainer>
                )}
            </Container>
        </>
    );
}

const Container = styled.div`
    padding-bottom: 8rem;
    position: relative;
`;

const Title = styled.h3`
    font-size: 2rem;
    font-weight: 900;
    letter-spacing: -2px;
    padding-top: 4rem;

    @media (max-width: 650px) {
        font-size: 1.7rem;
    }
`;

const SubTitle = styled.h3`
    font-size: 2rem;
    font-weight: 900;
    letter-spacing: -2px;

    @media (max-width: 650px) {
        font-size: 1.7rem;
    }
`;

const IllustContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-top: 5rem;

    @media (max-width: 650px) {
        position: absolute;
    }
`;

const IllustArea = styled.div`
    width: 40%;

    @media (max-width: 650px) {
        width: 100%;
    }
`;

const Illust = styled.img`
    width: 100%;
    object-fit: contain;
`;

export default BookMarkPage;
