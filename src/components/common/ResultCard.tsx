import styled from 'styled-components';
import coloredPow from '../../assets/coloredpow.svg';
import { AnimalData } from '../../hooks/useAnimals';
import { useNavigate } from 'react-router-dom';
import { getAge, getSpecies } from '../../utils/animalDataUtils';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import { useEffect, useState } from 'react';

interface ResultCardProps {
    animal: AnimalData;
}

function ResultCard({ animal }: ResultCardProps) {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(`/detail/${animal.ABDM_IDNTFY_NO}`, { state: { animal } });
    };

    const [imgSrc] = useState(animal.IMAGE_COURS ?? '');
    const [imageLoaded, setImageLoaded] = useState<boolean>(false);

    useEffect(() => {
        const img = new Image();
        img.onload = () => {
            setImageLoaded(true);
        };
        img.src = imgSrc;
    }, [imgSrc]);

    return (
        <Container>
            {!imageLoaded ? (
                <SkeletonWrapper>
                    <StyledSkeleton />
                </SkeletonWrapper>
            ) : (
                <ImgArea>
                    <Img src={imgSrc} />
                </ImgArea>
            )}
            <TextArea>
                <div>{getSpecies(animal.SPECIES_NM ?? '')}</div>
                <Separator>·</Separator>
                <div>{getAge(animal.AGE_INFO ?? '')}</div>
            </TextArea>
            <Button>
                <ButtonArea onClick={handleClick}>
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

const SkeletonWrapper = styled.div`
    width: 100%;
    height: 200px;
    aspect-ratio: 1 / 1; // 1:1 비율 유지
`;

const StyledSkeleton = styled(Skeleton)`
    width: 100%;
    height: 100%;
    max-width: 250px; // 최대 너비 설정 (필요에 따라 조정)
    border-radius: 10rem;
    border: 6px solid #47b2ff;

    @media (max-width: 650px) {
        max-width: 200px; // 최대 너비 설정 (필요에 따라 조정)
    }
`;

const ImgArea = styled.div`
    width: 100%;
    height: 200px;
    aspect-ratio: 1 / 1; // 1:1 비율 유지
`;

const Img = styled.img`
    width: 100%;
    height: 100%;
    max-width: 250px; // 최대 너비 설정 (필요에 따라 조정)
    object-fit: cover; // 이미지 비율 유지
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
    font-size: 1.3rem;
    font-weight: 700;
    align-items: center;

    @media (max-width: 500px) {
        font-size: 1.2rem;
    }
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

    @media (max-width: 500px) {
        font-size: 1rem;
    }
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

    @media (max-width: 500px) {
        max-width: 20px;
    }
`;

export default ResultCard;
