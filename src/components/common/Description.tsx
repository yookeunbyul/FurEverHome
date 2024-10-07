import styled from 'styled-components';

interface DescriptionProps {
    title: string;
    text: string | undefined;
}

function Description({ title, text }: DescriptionProps) {
    return (
        <>
            <Container>
                <TitleArea>
                    <Title>{title}</Title>
                </TitleArea>
                <TextArea>
                    <Text>{text}</Text>
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
        gap: 1rem;
    }
`;

const TitleArea = styled.div`
    width: 80px;

    display: flex;
    align-items: center;

    @media (max-width: 650px) {
        font-size: 0.9rem;
        width: 75px;
    }
`;

const Title = styled.div`
    padding: 0.26rem 0;
    width: 100%;
    text-align: center;
    background-color: #47b2ff;
    color: #ffffff;
    border-radius: 1rem;
    font-weight: 600;
    white-space: nowrap;

    @media (max-width: 650px) {
        font-size: 0.9rem;
    }
`;

const TextArea = styled.div`
    display: flex;
    align-items: center;

    flex: 1;
`;

const Text = styled.div`
    @media (max-width: 650px) {
        font-size: 0.9rem;
    }
`;

export default Description;
