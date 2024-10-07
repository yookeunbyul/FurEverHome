import styled from 'styled-components';
import OneStepBar from '../../assets/1st-Bar-Active.png';
import TwoStepBar from '../../assets/2rd-Bar-Active.png';
import ThreeStepBar from '../../assets/2rd-Bar-Active.png';
import LastStepBar from '../../assets/4th-Bar.png';
import pow from '../../assets/pow.png';
import { Link } from 'react-router-dom';
import Option from '../common/Option';
import key from '../../assets/key.png';
import carrier from '../../assets/carrier.png';
import car from '../../assets/car.png';
import house from '../../assets/house.png';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { setWeight } from '../../store/matchingSlice';

function MatchingThreeStep() {
    const dispatch = useDispatch();
    const options = [
        { value: '열쇠 크기', imgSrc: key },
        { value: '캐리어 크기', imgSrc: carrier },
        { value: '자동차 크기', imgSrc: car },
        { value: '집채 크기', imgSrc: house },
    ];

    const [selectedOption, setSelectedOption] = useState<string | null>(null);

    const handleOptionClick = (value: string) => {
        // 이미 선택된 옵션을 클릭한 경우 선택 해제
        if (selectedOption === value) {
            setSelectedOption(null); // 선택 해제
            dispatch(setWeight('')); // Redux 상태도 초기화
        } else {
            setSelectedOption(value); // 새로운 옵션 선택
            switch (value) {
                case '열쇠 크기':
                    dispatch(setWeight('3kg 이하'));
                    break;
                case '캐리어 크기':
                    dispatch(setWeight('3kg 이상 5kg 이하'));
                    break;
                case '자동차 크기':
                    dispatch(setWeight('5kg 이상 10kg 이하'));
                    break;
                case '집채 크기':
                    dispatch(setWeight('10kg 이상'));
                    break;
            }
        }
    };

    return (
        <>
            <BarArea className="mw">
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
                <Question>꿈 속에서 이상한 나라로 가는 문이 눈 앞에 있다.</Question>
                <Question>이 문의 크기는 얼마날까?</Question>
            </QuestionArea>
            <Container>
                <OptionArea>
                    {options &&
                        options.map((option) => (
                            <Option
                                key={option.value}
                                value={option.value}
                                imgSrc={option.imgSrc}
                                isRow={true}
                                isSelected={option.value === selectedOption}
                                onClick={() => handleOptionClick(option.value)}
                            />
                        ))}
                </OptionArea>
            </Container>
            {selectedOption && (
                <MatchingLinkArea>
                    <MatchingLink to="/matching/step4">
                        <LinkArea>
                            다음
                            <Pow src={pow} alt="pow" />
                        </LinkArea>
                    </MatchingLink>
                </MatchingLinkArea>
            )}
        </>
    );
}

const Container = styled.div`
    position: absolute;
    top: 45%;
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
    top: 27%;
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
        font-size: 1.5rem;
    }
`;

const OptionArea = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 2rem;
    width: fit-content;

    @media (max-width: 690px) {
        gap: 1rem;
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

export default MatchingThreeStep;
