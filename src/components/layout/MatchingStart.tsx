import styled from 'styled-components';
import illust from '../../assets/young woman high five with dog in sweater.svg';
import { Link } from 'react-router-dom';
import pow from '../../assets/coloredpow.svg';

export default function MatchingStart() {
    return (
        <IllustContainer className="mw">
            <IllustArea>
                <Illust src={illust} alt="dog and cat" />
            </IllustArea>
            <TitleArea>
                <Title>
                    <span className="point">간단한 테스트</span>로
                </Title>
                <Title>&nbsp;당신과 완벽하게 어울리는 유기동물을</Title>
                <Title>&nbsp;찾아보세요!</Title>
            </TitleArea>
            <MatchingLinkArea>
                <MatchingLink to="/matching/step1">
                    <LinkArea>
                        시작하기
                        <Pow src={pow} alt="pow" />
                    </LinkArea>
                </MatchingLink>
            </MatchingLinkArea>
        </IllustContainer>
    );
}

const TitleArea = styled.div`
    display: flex;
    text-align: center;
    @media (max-width: 600px) {
        flex-direction: column;
    }
`;

const Title = styled.div`
    font-size: 1.6rem;
    font-weight: 600;
    letter-spacing: -2px;
    @media (max-width: 800px) {
        font-size: 1.4rem;
    }
`;

const IllustContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    position: absolute;
    top: 58%;
    left: 50%;
    transform: translate(-50%, -58%);
`;

const IllustArea = styled.div`
    width: fit-content;
    padding-bottom: 3rem;
`;

const Illust = styled.img`
    width: 100%;
    max-width: 400px; // 최대 너비 설정 (필요에 따라 조정)
    height: auto; // 비율 유지
    object-fit: contain; // 이미지 비율 유지

    @media (max-width: 500px) {
        min-width: 320px; // 최대 너비 설정 (필요에 따라 조정)
    }
`;

const MatchingLinkArea = styled.div`
    display: flex;
    justify-content: center;
    padding-top: 2rem;

    @media (max-width: 500px) {
        width: 100%;
    }
`;

const MatchingLink = styled(Link)`
    border: 1px solid #47b2ff;
    background-color: #ffffff;
    color: #47b2ff;
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
    color: #47b2ff;
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
