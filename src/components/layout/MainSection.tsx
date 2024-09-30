import styled from 'styled-components';
import illust from '../../assets/illust.png';
import pow from '../../assets/pow.png';
import { Link } from 'react-router-dom';

function MainSection() {
    return (
        <>
            <Container className="mw">
                <TitleArea>
                    <Title>버려진 아이들과</Title>
                    <Title>
                        당신의 <span className="point">운명적 만남</span>, 찾고 계신가요?
                    </Title>
                    <Context>
                        지금 당신의 따뜻한 마음을 기다리는 친구들이 있습니다. <br /> 유기동물 입양으로 가족이
                        되어주세요.
                    </Context>
                    <MatchingLink to="/matching" aria-label="나의 반려동물 찾기">
                        나의 반려동물 찾기
                        <Pow src={pow} alt="pow" />
                    </MatchingLink>
                </TitleArea>
                <IllustArea>
                    <Illust src={illust} alt="dog and cat" />
                </IllustArea>
            </Container>
        </>
    );
}

const Container = styled.section`
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: relative;
    padding-top: 4rem;

    @media (max-width: 1153px) {
        padding-top: 6rem;
    }
`;

const TitleArea = styled.div`
    @media (max-width: 1153px) {
        position: absolute;
        z-index: 9998;
    }
`;

const Title = styled.h2`
    font-size: 3rem;
    font-weight: 900;
    letter-spacing: -2px;
    line-height: 1.2;

    @media (max-width: 650px) {
        font-size: 2rem;
    }
`;

const Context = styled.p`
    font-size: 1.2rem;
    letter-spacing: -1.3px;
    line-height: 1.5;
    padding: 1.2rem 0;

    @media (max-width: 650px) {
        font-size: 1rem;
    }
`;

const IllustArea = styled.div`
    padding-top: 3.5rem;
    width: 40%;

    @media (max-width: 1153px) {
        width: 100%;
        padding-top: 0;
        opacity: 0.4;
    }
`;

const Illust = styled.img`
    width: 100%;
    object-fit: contain;
`;

const MatchingLink = styled(Link)`
    background-color: #008bf0;
    color: #ffffff;
    font-size: 1.2rem;
    padding: 0.8rem 2rem;
    letter-spacing: -1px;
    font-weight: 600;
    border-radius: 2rem;
    display: inline-flex;

    @media (max-width: 650px) {
        font-size: 1rem;
    }
`;

const Pow = styled.img`
    width: 30px;
    margin-left: 0.5rem;

    @media (max-width: 650px) {
        width: 22px;
        margin-left: 0.2rem;
    }
`;

export default MainSection;
