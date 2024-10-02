import Header from '../components/layout/Header';
import styled from 'styled-components';
import nonbookmark from '../assets/bluenonbookmark.png';
import cat from '../assets/cat.jpeg';
import Map from '../components/features/Map';
import Description from '../components/common/Description';

function DetailPage() {
    return (
        <>
            <Header />
            <Container className="mw">
                <HeadArea>
                    <Bookmark>
                        <BookmarkIcon src={nonbookmark} />
                    </Bookmark>
                    <MainTitle>
                        <span className="point">공고번호</span> 경기-평택-2024-01466
                    </MainTitle>
                </HeadArea>
                <ContextArea>
                    <ImgArea>
                        <Image src={cat} />
                    </ImgArea>
                    <TextArea>
                        <Description />
                        <Description />
                        <Description />
                        <Description />
                        <Description />
                        <Description />
                        <Description />
                        <Description />
                        <Description />
                        <Description />
                        <Description />
                        <Description />
                    </TextArea>
                </ContextArea>
                <Title>
                    <span>
                        <span className="point">$보호소 이름</span>에서
                    </span>
                    <span>기다리고 있어요</span>
                </Title>
                <Map />
            </Container>
        </>
    );
}

const Container = styled.section`
    padding-bottom: 4.5rem;
    padding-top: 4rem;

    @media (max-width: 650px) {
        padding-top: 2rem;
    }
`;

const HeadArea = styled.div`
    padding-top: 4rem;
    padding-bottom: 2rem;

    display: flex;
    gap: 0.5rem;
`;

const MainTitle = styled.h3`
    font-size: 2rem;
    font-weight: 900;
    letter-spacing: -0.5px;

    @media (max-width: 650px) {
        font-size: 1.7rem;
    }
`;

const Bookmark = styled.button`
    width: 22px;
    padding-top: 0.5rem;
`;

const BookmarkIcon = styled.img`
    width: 100%;
    content-fit: contain;
`;

const ContextArea = styled.div`
    display: flex;
    gap: 8rem;

    @media (max-width: 1440px) {
        gap: 2rem;
    }

    @media (max-width: 850px) {
        flex-direction: column;
        gap: 2rem;
    }
`;

const TextArea = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 1.45rem;

    @media (max-width: 850px) {
        width: 100%;
        display: grid;
        grid-template-columns: repeat(2, 1fr);
    }
`;

const ImgArea = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
`;

const Image = styled.img`
    width: 100%;
    content-fit: contain;
    border-radius: 0.5rem;
`;

const Title = styled.h4`
    font-size: 1.8rem;
    font-weight: 900;
    letter-spacing: -2px;
    padding-top: 4rem;
    padding-bottom: 2rem;
    display: flex;
    gap: 0.5rem;

    @media (max-width: 600px) {
        font-size: 1.7rem;
        flex-direction: column;
        gap: 0rem;
    }
`;

export default DetailPage;
