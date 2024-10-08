import styled from 'styled-components';
import Slider from '../features/Slider';
import { ApiResponse } from '../../hooks/useAnimals';

interface OneDayProps {
    paddingtop?: string;
    mobilepaddingtop?: string;
    oneDayAnimals?: ApiResponse;
}

interface ContainerProps {
    paddingtop: string;
    mobilepaddingtop: string;
}

function OneDaySection({ paddingtop = '4rem', mobilepaddingtop = '4rem', oneDayAnimals }: OneDayProps) {
    return (
        <>
            <Container className="mw" paddingtop={paddingtop} mobilepaddingtop={mobilepaddingtop}>
                <Title>공고기간이 오늘까지인 친구들이에요!</Title>
                <Slider oneDayAnimals={oneDayAnimals} />
            </Container>
        </>
    );
}

const Container = styled.section<ContainerProps>`
    padding-top: ${(props) => props.paddingtop};

    @media (max-width: 500px) {
        padding-top: ${(props) => props.mobilepaddingtop};
    }
`;

const Title = styled.h3`
    font-size: 1.8rem;
    font-weight: 900;
    letter-spacing: -2px;
    padding-bottom: 2rem;

    @media (max-width: 650px) {
        font-size: 1.7rem;
    }

    @media (max-width: 420px) {
        font-size: 1.5rem;
    }
`;

export default OneDaySection;
