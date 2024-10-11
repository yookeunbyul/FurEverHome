import styled from 'styled-components';
import logo from '../../assets/titlelogo.svg';
import { useEffect } from 'react';
import kakao from '../../assets/kakao.svg';
import github from '../../assets/Github.svg';

export default function Footer() {
    useEffect(() => {
        if (!window.Kakao.isInitialized()) {
            window.Kakao.init(import.meta.env.VITE_KAKAO_KEY);
        }
    }, []);

    const handleShareKakaoClick = () => {
        if (window.Kakao) {
            const kakao = window.Kakao;

            kakao.Share.sendDefault({
                objectType: 'feed',
                content: {
                    title: '발바닥구조대',
                    imageUrl: 'https://drive.google.com/uc?id=1ps3BpoWo93v0jWcQfjRFI0xGqjRZ9UeC',
                    link: {
                        mobileWebUrl: 'window.location.href',
                        webUrl: 'window.location.href',
                    },
                },
            });
        }
    };

    return (
        <FooterContainer>
            <TextArea className="mw">
                <Logo src={logo} />
                <CopyRight>ⓒ 2024. yookeunbyul. All rights reserved</CopyRight>
            </TextArea>
            <ButtonArea className="mw">
                <button onClick={handleShareKakaoClick}>
                    <Btn src={kakao} />
                </button>
                <a href="https://github.com/yookeunbyul/FurEverHome" target="_blank" rel="noopener noreferrer">
                    <Btn src={github} />
                </a>
            </ButtonArea>
        </FooterContainer>
    );
}

const FooterContainer = styled.footer`
    background-color: #f5f5f5;
    padding-top: 3rem;
    padding-bottom: 4rem;
`;

const TextArea = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    @media (max-width: 450px) {
        flex-direction: column;
        align-items: start;
        gap: 0.5rem;
    }
`;

const Logo = styled.img`
    width: 130px;
`;

const CopyRight = styled.div`
    font-size: 0.9rem;
    letter-spacing: -0.8px;
`;

const ButtonArea = styled.div`
    padding-top: 0.5rem;
    display: flex;
    gap: 0.5rem;
    justify-content: end;

    @media (max-width: 450px) {
        justify-content: start;
    }
`;

const Btn = styled.img`
    width: 30px;
    height: 30px;

    @media (max-width: 450px) {
        width: 25px;
        height: 25px;
    }
`;
