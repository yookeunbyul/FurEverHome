import styled from 'styled-components';
import OneStepBar from '../../assets/1st-Bar-Active.png';
import TwoStepBar from '../../assets/2nd-Bar.png';
import ThreeStepBar from '../../assets/3rd-Bar.png';
import LastStepBar from '../../assets/4th-Bar.png';
import pow from '../../assets/pow.png';
import { Link } from 'react-router-dom';
import Option from '../common/Option';
import dog from '../../assets/dog.png';
import kitty from '../../assets/kitty.png';
import rabbit from '../../assets/rabbit.png';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setSpecies } from '../../store/matchingSlice';

function MatchingOneStep() {
    const dispatch = useDispatch();

    const breedOptions = [
        { value: '강아지', imgSrc: dog },
        { value: '고양이', imgSrc: kitty },
        { value: '그 외', imgSrc: rabbit },
    ];

    const [selectedOption, setSelectedOption] = useState<string | null>(null);

    const handleOptionClick = (value: string) => {
        // 이미 선택된 옵션을 클릭한 경우 선택 해제
        if (selectedOption === value) {
            setSelectedOption(null); // 선택 해제
            dispatch(setSpecies('')); // Redux 상태도 초기화
        } else {
            setSelectedOption(value); // 새로운 옵션 선택
            switch (value) {
                case '강아지':
                    dispatch(setSpecies('개'));
                    break;
                case '그 외':
                    dispatch(setSpecies('기타축종'));
                    break;
                default:
                    dispatch(setSpecies(value)); // 기본적으로 선택된 값 설정
                    break;
            }
        }
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
                <Question>어느 날 눈 앞에 동물이 나에게 달려온다!</Question>
                <Question>이 동물은 무엇일까?</Question>
            </QuestionArea>
            <Container>
                <OptionArea>
                    {breedOptions &&
                        breedOptions.map((option) => (
                            <Option
                                key={option.value}
                                value={option.value}
                                imgSrc={option.imgSrc}
                                isSelected={option.value === selectedOption}
                                onClick={() => handleOptionClick(option.value)}
                            />
                        ))}
                </OptionArea>
            </Container>
            {selectedOption && (
                <MatchingLinkArea>
                    <MatchingLink to="/matching/step2">
                        <LinkArea>
                            다음
                            <Pow src={pow} alt="pow" />
                        </LinkArea>
                    </MatchingLink>
                </MatchingLinkArea>
            )}
        </div>
    );
}

const Container = styled.div`
    width: calc(100% - 40px);
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateX(-50%);

    display: flex;
    flex-direction: column;
    align-items: center;
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
    top: 30%;
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
    display: flex;
    width: fit-content;
    justify-content: center;
    gap: 2rem;

    @media (max-width: 690px) {
        gap: 1.5rem;
    }
`;

const MatchingLinkArea = styled.div`
    position: absolute;
    bottom: 5%;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    justify-content: center;

    @media (max-width: 690px) {
        width: calc(100% - 40px);
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

export default MatchingOneStep;
