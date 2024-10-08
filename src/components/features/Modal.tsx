import styled from 'styled-components';
import close from '../../assets/close.svg';

function Modal({ handleModal }: { handleModal: () => void }) {
    return (
        <Container>
            <CloseArea>
                <Close
                    src={close}
                    onClick={() => {
                        handleModal();
                        document.body.style.overflow = 'auto';
                    }}
                />
            </CloseArea>
            <ExplainArea>
                <Title>첫 번째 문제는</Title>
                <div>품종에 대한 문제입니다.</div>
            </ExplainArea>
            <ExplainArea>
                <Title>두번째 문제는</Title>
                <div>성별에 대한 문제입니다.</div>
            </ExplainArea>
            <ExplainArea>
                <Title>세 번째 문제는</Title>
                <div>몸무게에 대한 문제입니다.</div>
            </ExplainArea>
            <ExplainArea>
                <Title>네 번째 문제는</Title>
                <div>색상에 대한 문제입니다.</div>
            </ExplainArea>
        </Container>
    );
}

const Container = styled.div`
    background-color: #f8f9fa;
    border-radius: 1rem;
    padding: 2rem 1.5rem 1.8rem 1.5rem;

    @media (max-width: 500px) {
        padding: 2rem 1rem 1rem 1rem;
    }
`;

const CloseArea = styled.div`
    display: flex;
    justify-content: end;
    margin-bottom: 2.5rem;
`;

const Close = styled.img`
    width: 100%;
    max-width: 15px; // 최대 너비 설정 (필요에 따라 조정)
    height: auto; // 비율 유지
    object-fit: contain; // 이미지 비율 유지
    cursor: pointer;
`;

const ExplainArea = styled.div`
    background-color: #ffffff;
    border: 1px solid #d9d9d9;
    padding: 1rem;
    margin-bottom: 1rem;
    border-radius: 0.8rem;

    width: 400px;
    letter-spacing: -1px;

    @media (max-width: 500px) {
        width: 300px;
    }
`;

const Title = styled.div`
    font-weight: 700;
`;

export default Modal;
