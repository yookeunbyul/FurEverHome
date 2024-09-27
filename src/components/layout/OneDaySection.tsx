import GlobalStyle from '../../styles/GlobalStyle';
import styled from 'styled-components';
import Slider from '../features/Slider';

interface OneDayProps {
    paddingTop?: string;
    mobilePaddingTop?: string;
}

interface ContainerProps {
    paddingTop: string;
    mobilePaddingTop: string;
}

function OneDaySection({ paddingTop = '4rem', mobilePaddingTop = '4rem' }: OneDayProps) {
    return (
        <>
            <GlobalStyle />
            <Container className="mw" paddingTop={paddingTop} mobilePaddingTop={mobilePaddingTop}>
                <Title>공고기간이 하루 남은 친구들이에요!</Title>
                <Slider />
            </Container>
        </>
    );
}

const Container = styled.section<ContainerProps>`
    padding-top: ${(props) => props.paddingTop};

    @media (max-width: 500px) {
        padding-top: ${(props) => props.mobilePaddingTop};
    }
`;

const Title = styled.h3`
    font-size: 2rem;
    font-weight: 900;
    letter-spacing: -2px;
    padding-bottom: 2rem;

    @media (max-width: 650px) {
        font-size: 1.7rem;
    }
`;

export default OneDaySection;
