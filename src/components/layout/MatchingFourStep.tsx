import styled from 'styled-components';
import OneStepBar from '../../assets/1st-Bar-Active.png';
import TwoStepBar from '../../assets/2rd-Bar-Active.png';
import ThreeStepBar from '../../assets/2rd-Bar-Active.png';
import LastStepBar from '../../assets/4th-Bar-Active.png';
import pow from '../../assets/pow.png';
import { Link } from 'react-router-dom';
import Option from '../common/Option';
import white from '../../assets/white.png';
import black from '../../assets/black.png';
import gray from '../../assets/gray.png';
import brown from '../../assets/brown.png';
import goldColor from '../../assets/goldcolor.png';
import triple from '../../assets/triple.png';
import fish from '../../assets/fish.png';
import blacknwhite from '../../assets/blacknwhite.png';

function MatchingFourStep() {
    const options = [
        { value: '흰색', imgSrc: white },
        { value: '검은색', imgSrc: black },
        { value: '회색', imgSrc: gray },
        { value: '갈색', imgSrc: brown },
        { value: '금색', imgSrc: goldColor },
        { value: '삼색', imgSrc: triple },
        { value: '고등어색', imgSrc: fish },
        { value: '흑백색', imgSrc: blacknwhite },
    ];

    return (
        <>
            <BarArea>
                <ImgArea>
                    <Img src={OneStepBar} />
                </ImgArea>
                <ImgArea>
                    <Img src={TwoStepBar} />
                </ImgArea>
                <ImgArea>
                    <Img src={ThreeStepBar} />
                </ImgArea>
                <ImgArea>
                    <Img src={LastStepBar} />
                </ImgArea>
            </BarArea>
            <QuestionArea>
                <Question>나를 위한 티셔츠를 고르고 있다.</Question>
                <Question>어떤 색깔이 좋을까? 3개 이상 골라보자!</Question>
            </QuestionArea>
            <Container>
                <OptionArea>
                    {options &&
                        options.map((option) => (
                            <Option key={option.value} value={option.value} imgSrc={option.imgSrc} />
                        ))}
                </OptionArea>
                <MatchingLinkArea>
                    <MatchingLink to="/matching/result">
                        <LinkArea>
                            결과보기
                            <Pow src={pow} alt="pow" />
                        </LinkArea>
                    </MatchingLink>
                </MatchingLinkArea>
            </Container>
        </>
    );
}

const Container = styled.div`
    position: absolute;
    top: 40%;
    left: 50%;
    transform: translateX(-50%);

    display: flex;
    flex-direction: column;
    align-items: center;

    width: calc(100% - 40px);
`;

const BarArea = styled.div`
    position: absolute;
    top: 15%;
    left: 50%;
    transform: translateX(-50%);

    display: flex;
    justify-content: center;
    gap: 0.3rem;
    width: calc(100% - 40px);
`;

const ImgArea = styled.div`
    width: 15%; // 퍼센트로 변경

    @media (max-width: 690px) {
        width: 33%;
    }
`;

const Img = styled.img`
    width: 100%;
    object-fit: contain;
`;

const QuestionArea = styled.div`
    position: absolute;
    top: 24%;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    align-items: center;
    flex-direction: column;

    width: 100%;
`;

const Question = styled.h2`
    font-size: 1.9rem;
    font-weight: 900;
    letter-spacing: -1px;
    text-align: center; // 중앙 정렬

    @media (max-width: 690px) {
        font-size: 1.7rem;
    }
`;

const OptionArea = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 2rem;
    width: fit-content;

    @media (max-width: 690px) {
        gap: 1rem;
        grid-template-columns: repeat(2, 1fr);
    }
`;

const MatchingLinkArea = styled.div`
    padding-top: 3.4rem;
    display: flex;
    justify-content: center;

    @media (max-width: 690px) {
        padding-bottom: 3.4rem;
        width: 100%;
    }
`;

const MatchingLink = styled(Link)`
    background-color: #47b2ff;
    color: #ffffff;
    font-size: 1.5rem;
    padding: 0.5rem 4.5rem;
    letter-spacing: -1px;
    font-weight: 600;
    border-radius: 2rem;
    display: inline-flex;

    @media (max-width: 690px) {
        font-size: 1.3rem;
        width: 100%;
    }
`;

const LinkArea = styled.div`
    display: flex;
    color: #ffffff;
    width: 100%;
    justify-content: center;
`;

const Pow = styled.img`
    width: 35px;
    margin-left: 0.5rem;

    @media (max-width: 690px) {
        width: 30px;
        margin-left: 0.2rem;
    }
`;

export default MatchingFourStep;
