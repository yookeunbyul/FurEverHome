import { useCallback, useEffect, useMemo, useState } from 'react';
import styled from 'styled-components';
import ResultCard from '../common/ResultCard';
import illust from '../../assets/illust.png';
import pow from '../../assets/pow.png';
import { Link, useNavigate } from 'react-router-dom';
import Modal from '../features/Modal';
import { useDispatch, useSelector } from 'react-redux';
import { resetMatchingState } from '../../store/matchingSlice';
import { useQuery } from '@tanstack/react-query';
import { fetchAllData } from '../../utils/fetchAllData';
import { RootState } from '../../store/store';
import { AnimalData } from '../../hooks/useAnimals';
import { handleResult, resetResult } from '../../store/resultSlice';
import Loading from '../features/Loading';

function ResultSection() {
    const [isShowModal, setIsShowModal] = useState(false);
    const matchingState = useSelector((state: RootState) => state.matching.matchingState);
    const result = useSelector((state: RootState) => state.result.randomResult);

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const { data, isError, isLoading } = useQuery({
        queryKey: ['allData'],
        queryFn: fetchAllData,
        staleTime: 1000 * 60 * 5, // 5분 동안 캐시 유지
        retry: 1,
    });

    const handleModal = () => {
        if (isShowModal) {
            setIsShowModal(false);
        } else {
            setIsShowModal(true);
        }
    };

    const handleReturn = () => {
        navigate(`/matching`);
        dispatch(resetMatchingState());
        dispatch(resetResult());
    };

    const filteredSpecies = useCallback(
        (value: string | null) => {
            if (value && value.includes(matchingState.species)) {
                return true;
            } else {
                return false;
            }
        },
        [matchingState.species]
    );

    const filteredGender = useCallback(
        (value: string | null) => {
            if (value === matchingState.gender) {
                return true;
            } else {
                return false;
            }
        },
        [matchingState.gender]
    );

    const filteredWeight = useCallback(
        (value: string | null) => {
            const weight = Number(value?.split('(')[0]);
            if (matchingState.weight === '3kg 미만' && weight < 3) return true;
            if (matchingState.weight === '3kg 이상 5kg 미만' && 3 <= weight && weight < 5) return true;
            if (matchingState.weight === '5kg 이상 10kg 미만' && 5 <= weight && weight < 10) return true;
            if (matchingState.weight === '10kg 이상' && weight >= 10) return true;
        },
        [matchingState.weight]
    );

    const filteredColor = useCallback(
        (value: string | null) => {
            const whiteKeyword = ['아이보리', '크림', '백', '흰'];
            const blackKeyword = ['검', '흑'];
            const grayKeyword = ['회백', '쥐', '검', '흰', '흑', '백'];
            const brownKeyword = ['갈', '베이지', '초코'];
            const goldKeyword = ['노', '황', '크림', '치즈'];
            const threeKeyword = ['삼', '줄', '흰', '검', '갈'];
            const fishKeyword = ['고등어', '반점'];
            const blackWhiteKeyword = ['얼룩', '검', '흑', '백', '흰'];

            if (matchingState.color === '흰색' && whiteKeyword.some((keyword) => value?.includes(keyword))) return true;
            if (matchingState.color === '검은색' && blackKeyword.some((keyword) => value?.includes(keyword)))
                return true;
            if (matchingState.color === '회색' && grayKeyword.some((keyword) => value?.includes(keyword))) return true;
            if (matchingState.color === '갈색' && brownKeyword.some((keyword) => value?.includes(keyword))) return true;
            if (matchingState.color === '금색' && goldKeyword.some((keyword) => value?.includes(keyword))) return true;
            if (matchingState.color === '삼색' && threeKeyword.some((keyword) => value?.includes(keyword))) return true;
            if (matchingState.color === '고등어색' && fishKeyword.some((keyword) => value?.includes(keyword)))
                return true;
            if (matchingState.color === '흑백색' && blackWhiteKeyword.some((keyword) => value?.includes(keyword)))
                return true;
            return false;
        },
        [matchingState.color]
    );

    const filteredData = useMemo(() => {
        return data?.filter((animal) => {
            if (!filteredSpecies(animal.SPECIES_NM)) return false;
            if (!filteredGender(animal.SEX_NM)) return false;
            if (!filteredWeight(animal.BDWGH_INFO)) return false;
            if (!filteredColor(animal.COLOR_NM)) return false;
            return true;
        });
    }, [data, filteredSpecies, filteredGender, filteredWeight, filteredColor]);

    const getRandomElements = useCallback((arr: AnimalData[], count: number) => {
        if (arr.length < count) return [];

        const result = [];
        const usedIndices = new Set(); //중복 제거 위해 뽑힌 번호 저장

        while (result.length < count) {
            const randomIndex = Math.floor(Math.random() * arr.length);
            //중복 방지
            if (!usedIndices.has(randomIndex)) {
                result.push(arr[randomIndex]);
                usedIndices.add(randomIndex);
            }
        }
        return result;
    }, []);

    useEffect(() => {
        if (filteredData && filteredData.length > 0 && result.length === 0) {
            const randomData = getRandomElements(filteredData, 3);
            dispatch(handleResult(randomData));
        }
    }, [filteredData, getRandomElements, dispatch, result.length]);

    // randomFilteredData 대신 result를 사용
    const displayData = result.length > 0 ? result : [];

    console.log('redux', displayData);

    if (isError) return <div>오류가 났습니다.</div>;
    if (isLoading) return <Loading />;

    return (
        <Container className="mw">
            <ContentsContainer>
                {displayData && displayData.length > 0 ? (
                    <>
                        {isShowModal && (
                            <ModalArea>
                                <Modal handleModal={handleModal} />
                            </ModalArea>
                        )}
                        <Title>당신의 운명의 반려동물을 찾았어요! 🎊</Title>
                        <ResultArea>
                            {displayData.map((item) => (
                                <ResultCard key={item.ABDM_IDNTFY_NO} animal={item} />
                            ))}
                        </ResultArea>
                        <BtnArea>
                            <ExplainBtn
                                onClick={() => {
                                    handleModal();
                                    document.body.style.overflow = 'hidden';
                                }}
                            >
                                결과 설명듣기
                            </ExplainBtn>
                            <ReStartBtn onClick={handleReturn}>테스트 다시 하기</ReStartBtn>
                        </BtnArea>
                    </>
                ) : (
                    <IllustContainer>
                        <IllustArea>
                            <Illust src={illust} alt="dog and cat" />
                        </IllustArea>
                        <SubTitle>운명의 반려동물을 찾지 못 했어요</SubTitle>
                        <Context>
                            지금 당신의 따뜻한 마음을 기다리는 친구들이 있습니다. <br /> 유기동물 입양으로 가족이
                            되어주세요.
                        </Context>
                        <MatchingLinkArea>
                            <MatchingLink to="/list">
                                <LinkArea>
                                    유기동물 보기
                                    <Pow src={pow} alt="pow" />
                                </LinkArea>
                            </MatchingLink>
                        </MatchingLinkArea>
                    </IllustContainer>
                )}
            </ContentsContainer>
        </Container>
    );
}

const Container = styled.section`
    padding-top: 9rem;
    padding-bottom: 4rem;
    @media (max-width: 690px) {
        padding-top: 8rem;
    }
`;

const ModalArea = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);

    display: flex;
    justify-content: center;
    align-items: center;
`;

const ContentsContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const Title = styled.h2`
    font-size: 2.5rem;
    font-weight: 900;
    letter-spacing: -1px;
    text-align: center; // 중앙 정렬
    margin-bottom: 2rem;

    @media (max-width: 690px) {
        font-size: 1.7rem;
        margin-bottom: 0;
    }
`;

const ResultArea = styled.div`
    display: flex;
    gap: 3rem;
    margin: 4rem 0;

    @media (max-width: 690px) {
        flex-direction: column;
    }
`;

const BtnArea = styled.div`
    display: inline-flex;
    gap: 1.5rem;
    padding-top: 3rem;
    @media (max-width: 690px) {
        flex-direction: column;
        width: 100%;
        padding-top: 2rem;
    }
`;

const ExplainBtn = styled.button`
    font-size: 1.2rem;
    letter-spacing: -1px;
    border: 1px solid #7f7f7f;
    padding: 0.7rem 4rem;
    font-weight: 700;
    color: #7f7f7f;
    border-radius: 0.8rem;
`;

const ReStartBtn = styled.button`
    font-size: 1.2rem;
    letter-spacing: -1px;
    padding: 0.7rem 4rem;
    border-radius: 0.8rem;
    color: #ffffff;
    background-color: #323232;
    font-weight: 700;
`;

const IllustContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const IllustArea = styled.div`
    width: fit-content;
`;

const Illust = styled.img`
    width: 100%;
    max-width: 400px; // 최대 너비 설정 (필요에 따라 조정)
    height: auto; // 비율 유지
    object-fit: contain; // 이미지 비율 유지

    @media (max-width: 650px) {
        min-width: 400px; // 최대 너비 설정 (필요에 따라 조정)
    }
`;

const SubTitle = styled.h3`
    font-size: 1.6rem;
    font-weight: 900;
    letter-spacing: -2px;
    white-space: nowrap;
    @media (max-width: 650px) {
        font-size: 1.7rem;
    }
`;

const Context = styled.p`
    font-size: 1.1rem;
    letter-spacing: -1.3px;
    line-height: 1.6;
    padding: 1.2rem 0;
    text-align: center;
    @media (max-width: 650px) {
        font-size: 1rem;
    }
`;

const MatchingLinkArea = styled.div`
    padding-top: 1rem;
    display: flex;
    justify-content: center;

    @media (max-width: 690px) {
        width: 100%;
    }
`;

const MatchingLink = styled(Link)`
    background-color: #47b2ff;
    color: #ffffff;
    font-size: 1.3rem;
    padding: 0.5rem 6rem;
    letter-spacing: -1px;
    font-weight: 600;
    border-radius: 2rem;
    display: inline-flex;

    @media (max-width: 690px) {
        font-size: 1.3rem;
        width: 100%;
        padding: 0.5rem 0;
    }
`;

const LinkArea = styled.div`
    display: flex;
    color: #ffffff;
    width: 100%;
    justify-content: center;
`;

const Pow = styled.img`
    width: 30px;
    margin-left: 0.5rem;

    @media (max-width: 690px) {
        width: 30px;
        margin-left: 0.2rem;
    }
`;

export default ResultSection;
