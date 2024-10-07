// import Card from '../common/Card';
import styled from 'styled-components';
import { AnimalData, ApiResponse } from '../../hooks/useAnimals';
import Card from '../common/Card';

interface CardSectionProps {
    paddingtop?: string;
    animalList?: ApiResponse | AnimalData[];
    onRemoveBookmark?: (animalId: string) => void;
}

interface ContainerProps {
    paddingtop: string;
}

function CardList({ paddingtop = '0rem', animalList, onRemoveBookmark }: CardSectionProps) {
    const animals = Array.isArray(animalList) ? animalList : animalList?.AbdmAnimalProtect?.[1]?.row || [];

    return (
        <>
            <Container paddingtop={paddingtop}>
                <CardArea>
                    {animals &&
                        animals.map((animal: AnimalData) => (
                            <Card key={animal.ABDM_IDNTFY_NO} animal={animal} onRemoveBookmark={onRemoveBookmark} />
                        ))}
                </CardArea>
            </Container>
        </>
    );
}

const Container = styled.div<ContainerProps>`
    padding-top: ${(props) => props.paddingtop};
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
