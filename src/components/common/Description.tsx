import styled from 'styled-components';

function Description() {
    return (
        <>
            <Container>
                <TitleArea>
                    <Title>중성화여부</Title>
                </TitleArea>
                <TextArea>
                    <Text>2024-09-06 ~ 2024-09-19</Text>
                </TextArea>
            </Container>
        </>
    );
}

const Container = styled.div`
    display: flex;
    gap: 3rem;
    letter-spacing: -1px;

    @media (max-width: 650px) {
        gap: 0.8rem;
    }
`;

const TitleArea = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
`;

const Title = styled.div`
    background-color: #47b2ff;
    padding: 0.3rem 2rem;
    color: #ffffff;
    border-radius: 1rem;
    font-weight: 600;
    width: fit-content;
    white-space: nowrap;

    @media (max-width: 650px) {
        padding: 0.3rem 0.8rem;
        font-size: 0.9rem;
    }
`;

const Text = styled.div`
    flex: 1;

    @media (max-width: 650px) {
        font-size: 0.9rem;
    }
`;

const TextArea = styled.div`
    display: flex;
    align-items: center;
`;

export default Description;
