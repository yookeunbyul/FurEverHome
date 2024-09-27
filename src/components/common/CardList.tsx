import Card from './Card';
import styled from 'styled-components';

interface CardSectionProps {
    paddingTop?: string;
}

interface ContainerProps {
    paddingTop: string;
}

function CardList({ paddingTop = '0rem' }: CardSectionProps) {
    return (
        <>
            <Container paddingTop={paddingTop}>
                <CardArea>
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                </CardArea>
            </Container>
        </>
    );
}

const Container = styled.div<ContainerProps>`
    padding-top: ${(props) => props.paddingTop};
`;

const CardArea = styled.div`
    display: grid;
    grid-template-columns: repeat(6, 1fr); // 한 줄에 6개 카드
    gap: 40px; // 카드 간의 간격

    @media (max-width: 1400px) {
        grid-template-columns: repeat(5, 1fr); // 한 줄에 5개 카드
    }

    @media (max-width: 1200px) {
        grid-template-columns: repeat(4, 1fr); // 한 줄에 4개 카드
    }

    @media (max-width: 1000px) {
        grid-template-columns: repeat(3, 1fr); // 한 줄에 3개 카드
    }

    @media (max-width: 768px) {
        grid-template-columns: repeat(2, 1fr); // 한 줄에 2개 카드
    }
`;

export default CardList;
