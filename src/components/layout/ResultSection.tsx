import { useState } from 'react';
import styled from 'styled-components';
import ResultCard from '../common/ResultCard';
import illust from '../../assets/illust.png';
import pow from '../../assets/pow.png';
import { Link, useNavigate } from 'react-router-dom';
import Modal from '../features/Modal';
import { useDispatch } from 'react-redux';
import { resetMatchingState } from '../../store/matchingSlice';
import { useAnimals } from '../../hooks/useAnimals';
import Loading from '../features/Loading';

function ResultSection() {
    const [length] = useState(0);
    const [isShowModal, setIsShowModal] = useState(false);

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const { data: activeAnimals, isLoading, isError } = useAnimals(1, 1000, '', '', '보호중', '');

    console.log(activeAnimals);

    if (isError) return <div>오류가 났습니다.</div>;

    if (isLoading)
        return (
            <>
                <Loading />
            </>
        );

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
    };

    return (
        <Container className="mw">
            <ContentsContainer>
                {length ? (
                    <>
                        {isShowModal && (
                            <ModalArea>
                                <Modal handleModal={handleModal} />
                            </ModalArea>
                        )}
                        <Title>당신의 운명의 반려동물을 찾았어요! 🎊</Title>
                        <ResultArea>
                            <ResultCard />
                            <ResultCard />
                            <ResultCard />
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
    font-size: 2.7rem;
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
    @media (max-width: 690px) {
        flex-direction: column;
        width: 100%;
        padding-top: 2rem;
    }
`;

const ExplainBtn = styled.button`
    font-size: 1.3rem;
    letter-spacing: -1px;
    border: 1px solid #7f7f7f;
    padding: 0.7rem 4rem;
    font-weight: 700;
    color: #7f7f7f;
    border-radius: 0.8rem;
`;

const ReStartBtn = styled.button`
    font-size: 1.3rem;
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
    max-width: 500px; // 최대 너비 설정 (필요에 따라 조정)
    height: auto; // 비율 유지
    object-fit: contain; // 이미지 비율 유지

    @media (max-width: 650px) {
        min-width: 400px; // 최대 너비 설정 (필요에 따라 조정)
    }
`;

const SubTitle = styled.h3`
    font-size: 2rem;
    font-weight: 900;
    letter-spacing: -2px;
    white-space: nowrap;
    @media (max-width: 650px) {
        font-size: 1.7rem;
    }
`;

const Context = styled.p`
    font-size: 1.2rem;
    letter-spacing: -1.3px;
    line-height: 1.5;
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
    font-size: 1.5rem;
    padding: 0.5rem 8rem;
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
    width: 35px;
    margin-left: 0.5rem;

    @media (max-width: 690px) {
        width: 30px;
        margin-left: 0.2rem;
    }
`;

export default ResultSection;
