import styled from 'styled-components';
import OneStepBar from '../../assets/1st-Bar-Active.png';
import TwoStepBar from '../../assets/2rd-Bar-Active.png';
import ThreeStepBar from '../../assets/2rd-Bar-Active.png';
import LastStepBar from '../../assets/4th-Bar-Active.png';
import pow from '../../assets/pow.png';
import { useNavigate } from 'react-router-dom';
import Option from '../common/Option';
import white from '../../assets/white.png';
import black from '../../assets/black.png';
import gray from '../../assets/gray.png';
import brown from '../../assets/brown.png';
import goldColor from '../../assets/goldcolor.png';
import triple from '../../assets/triple.png';
import fish from '../../assets/fish.png';
import blacknwhite from '../../assets/blacknwhite.png';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import { useState } from 'react';
import { setColor } from '../../store/matchingSlice';

function MatchingFourStep() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const species = useSelector((state: RootState) => state.matching.matchingState.species);
    const [selectedOption, setSelectedOption] = useState<string | null>(null);

    const catOptions = [
        { value: '흰색', imgSrc: white },
        { value: '검은색', imgSrc: black },
        { value: '회색', imgSrc: gray },
        { value: '갈색', imgSrc: brown },
        { value: '금색', imgSrc: goldColor },
        { value: '삼색', imgSrc: triple },
        { value: '고등어색', imgSrc: fish },
        { value: '흑백색', imgSrc: blacknwhite },
    ];

    const dogOptions = [
        { value: '흰색', imgSrc: white },
        { value: '검은색', imgSrc: black },
        { value: '회색', imgSrc: gray },
        { value: '금색', imgSrc: goldColor },
        { value: '흑백색', imgSrc: blacknwhite },
        { value: '갈색', imgSrc: brown },
    ];

    const handleOptionClick = (value: string) => {
        // 이미 선택된 옵션을 클릭한 경우 선택 해제
        if (selectedOption === value) {
            setSelectedOption(null); // 선택 해제
            dispatch(setColor('')); // Redux 상태도 초기화
        } else {
            setSelectedOption(value); // 새로운 옵션 선택
            dispatch(setColor(value));
        }
    };

    const handleGoResult = () => {
        navigate('/matching/result');
    };

    return (
        <div className="mw">
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
                <OptionArea species={species}>
                    {species === '개'
                        ? dogOptions.map((option) => (
                              <Option
                                  key={option.value}
                                  value={option.value}
                                  imgSrc={option.imgSrc}
                                  isSelected={option.value === selectedOption}
                                  onClick={() => handleOptionClick(option.value)}
                              />
                          ))
                        : catOptions.map((option) => (
                              <Option
                                  key={option.value}
                                  value={option.value}
                                  imgSrc={option.imgSrc}
                                  isSelected={option.value === selectedOption}
                                  onClick={() => handleOptionClick(option.value)}
                              />
                          ))}
                </OptionArea>
                {selectedOption && (
                    <MatchingLinkArea>
                        <MatchingLink onClick={handleGoResult}>
                            <LinkArea>
                                결과보기
                                <Pow src={pow} alt="pow" />
                            </LinkArea>
                        </MatchingLink>
                    </MatchingLinkArea>
                )}
            </Container>
        </div>
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

const OptionArea = styled.div<{ species: string }>`
    display: grid;
    grid-template-columns: ${(props) => (props.species === '개' ? 'repeat(3, 1fr)' : 'repeat(4, 1fr)')};
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

const MatchingLink = styled.div`
    background-color: #47b2ff;
    color: #ffffff;
    font-size: 1.5rem;
    padding: 0.5rem 4.5rem;
    letter-spacing: -1px;
    font-weight: 600;
    border-radius: 2rem;
    display: inline-flex;
    cursor: pointer;

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
