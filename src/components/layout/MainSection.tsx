import styled from 'styled-components';
import illust from '../../assets/illust.svg';
import pow from '../../assets/pow.svg';
import { Link } from 'react-router-dom';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import { useEffect, useState } from 'react';

function MainSection() {
    const [imageLoaded, setImageLoaded] = useState(false);

    useEffect(() => {
        const img = new Image();
        img.onload = () => {
            setImageLoaded(true);
        };
        img.src = illust;
    }, []);

    return (
        <>
            <Container className="mw">
                <TitleArea>
                    <Title>버려진 아이들과</Title>
                    <SubTitleArea>
                        <Title>
                            당신의 <span className="point">운명적 만남</span>,
                        </Title>
                        <Title>찾고 계신가요?</Title>
                    </SubTitleArea>
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
                    {!imageLoaded ? (
                        <SkeletonWrapper>
                            <StyledSkeleton />
                        </SkeletonWrapper>
                    ) : (
                        <Illust src={illust} alt="dog and cat" />
                    )}
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
    padding-top: 8rem;
    padding-bottom: 4rem;
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

const SubTitleArea = styled.div`
    display: flex;
    @media (max-width: 500px) {
        flex-direction: column;
    }
`;

const Title = styled.h2`
    font-size: 2.5rem;
    font-weight: 900;
    letter-spacing: -2px;
    line-height: 1.3;

    @media (max-width: 650px) {
        font-size: 2rem;
    }
`;

const Context = styled.p`
    font-size: 1.2rem;
    letter-spacing: -1.3px;
    line-height: 1.6;
    padding: 1.2rem 0;

    @media (max-width: 650px) {
        font-size: 1rem;
    }
`;

const IllustArea = styled.div`
    padding-top: 3.5rem;
    width: 30%;
    @media (max-width: 1153px) {
        width: 100%;
        padding-top: 0;
        opacity: 0.4;
    }
`;

const Illust = styled.img`
    width: 100%;
    object-fit: contain;
    height: auto;
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

const SkeletonWrapper = styled.div`
    width: 100%;
    height: 0;
    padding-bottom: 111.7%; // 385 / 430 * 100
    position: relative;
`;

const StyledSkeleton = styled(Skeleton)`
    position: absolute;
    top: 0;
    left: 0;
    width: 100% !important;
    height: 100% !important;
    border-radius: 0.5rem;
`;

export default MainSection;
