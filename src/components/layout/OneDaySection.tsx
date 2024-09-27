import GlobalStyle from '../../styles/GlobalStyle';
import styled from 'styled-components';
import Slider from '../features/Slider';

function OneDaySection() {
    return (
        <>
            <GlobalStyle />
            <Container className="mw">
                <Title>공고기간이 하루 남은 친구들이에요!</Title>
                <Slider />
            </Container>
        </>
    );
}

const Container = styled.section`
    padding-top: 8rem;
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
