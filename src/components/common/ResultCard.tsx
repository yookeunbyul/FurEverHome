import styled from 'styled-components';
import cat from '../../assets/cat.jpeg';
import coloredPow from '../../assets/coloredpow.png';
function ResultCard() {
    return (
        <Container>
            <ImgArea>
                <Img src={cat} />
            </ImgArea>
            <TextArea>
                <div>한국 고양이</div>
                <Separator>·</Separator>
                <div>1살</div>
            </TextArea>
            <Button>
                <ButtonArea>
                    보러가기
                    <IconArea>
                        <Icon src={coloredPow} />
                    </IconArea>
                </ButtonArea>
            </Button>
        </Container>
    );
}

const Container = styled.div`
    display: inline-flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const ImgArea = styled.div`
    width: fit-content;
`;

const Img = styled.img`
    width: 100%;
    max-width: 250px; // 최대 너비 설정 (필요에 따라 조정)
    height: auto; // 비율 유지
    object-fit: contain; // 이미지 비율 유지
    border-radius: 10rem;
    border: 6px solid #47b2ff;

    @media (max-width: 650px) {
        max-width: 200px; // 최대 너비 설정 (필요에 따라 조정)
    }
`;

const TextArea = styled.div`
    padding: 1rem 0;
    display: flex;
    gap: 0.5rem;
    letter-spacing: -1px;
    font-size: 1.4rem;
    font-weight: 700;
    align-items: center;
`;

const Separator = styled.div`
    color: #7f7f7f;
`;

const Button = styled.button`
    font-size: 1.1rem;

    border-radius: 2rem;
    letter-spacing: -1px;
    font-weight: 700;
    border: 1px solid #47b2ff;
    padding: 0.5rem 1.5rem;
`;

const ButtonArea = styled.div`
    color: #47b2ff;
    display: flex;
    align-items: center;

    gap: 0.2rem;
`;

const IconArea = styled.div`
    width: fit-content;
    display: flex;
    align-items: center;
`;

const Icon = styled.img`
    width: 100%;
    max-width: 25px; // 최대 너비 설정 (필요에 따라 조정)
    height: auto; // 비율 유지
    object-fit: contain; // 이미지 비율 유지
`;

export default ResultCard;
