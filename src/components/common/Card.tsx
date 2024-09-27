import styled from 'styled-components';
import cat from '../../assets/cat.jpeg';
import nonbookmark from '../../assets/nonbookmark.png';

function Card() {
    return (
        <Container>
            <Badge>보호중</Badge>
            <ImgArea>
                <Image src={cat} />
            </ImgArea>
            <NameArea>
                <Name>한국 고양이</Name>
                <Bookmark>
                    <BookmarkIcon src={nonbookmark} />
                </Bookmark>
            </NameArea>
            <TextArea>
                <Line>
                    <Option>나이</Option>
                    <div>1살</div>
                </Line>
                <Line>
                    <Option>시도군</Option>
                    <div>안산시</div>
                </Line>
                <Line>
                    <Option>성별</Option>
                    <div>남아</div>
                </Line>
                <Line>
                    <Option>중성화</Option>
                    <div>중성화 미완료</div>
                </Line>
            </TextArea>
        </Container>
    );
}

const Container = styled.div`
    position: relative;
`;

const ImgArea = styled.div``;

const Image = styled.img`
    width: 100%;
    content-fit: contain;
    border-radius: 0.5rem;
`;

const NameArea = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.5rem 0;
`;

const TextArea = styled.div``;

const Line = styled.div`
    display: flex;
    justify-content: space-between;
    font-size: 0.9rem;
    padding: 0.3rem 0;
    letter-spacing: -1px;
`;

const Badge = styled.div`
    position: absolute;
    background-color: #47b2ff;
    top: 3.5%;
    left: 5%;
    padding: 0.3rem 1rem;
    font-size: 0.9rem;
    letter-spacing: -0.8px;
    border-radius: 1rem;
    color: #ffffff;
    font-weight: 600;
`;

const Name = styled.div`
    font-size: 1.3rem;
    font-weight: 600;
    letter-spacing: -1px;
`;

const Option = styled.div`
    color: #7f7f7f;
`;

const Bookmark = styled.button`
    width: 18px;
    padding-top: 0.2rem;
`;

const BookmarkIcon = styled.img`
    width: 100%;
    content-fit: contain;
`;

export default Card;
