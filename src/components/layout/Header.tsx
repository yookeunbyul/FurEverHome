import { Link } from 'react-router-dom';
import styled from 'styled-components';
import logo from '../../assets/logo.png';
import hamburger from '../../assets/hamburger.png';
import { useEffect, useState } from 'react';

interface FixedHeaderProps {
    isScroll: boolean;
}

function Header() {
    const [isScroll, setIsScroll] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 10) {
                setIsScroll(true);
            } else {
                setIsScroll(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    return (
        <FixedHeader isScroll={isScroll}>
            <Container className="mw">
                <h1>
                    <Link to="/">
                        <Logo src={logo} alt="logo" />
                    </Link>
                </h1>
                <button>
                    <HamburgerMenu src={hamburger} />
                </button>
                <LinkArea>
                    <Link to="/list">유기동물 보기</Link>
                    <Link to="/matching">털친소</Link>
                    <Link to="/map">주변 보호소 찾기</Link>
                    <Link to="/bookmark">나의 관심동물</Link>
                </LinkArea>
            </Container>
        </FixedHeader>
    );
}

const FixedHeader = styled.header<FixedHeaderProps>`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 9999;
    background-color: ${(props) => (props.isScroll ? '#ffffff' : 'transparent')};
    transition: all 0.3s ease-in-out;
`;

const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 2rem 0;
`;

const Logo = styled.img`
    width: 130px;
`;

const LinkArea = styled.nav`
    display: flex;
    gap: 1.5rem;
    letter-spacing: -1px;

    @media (max-width: 650px) {
        display: none;
    }
`;

const HamburgerMenu = styled.img`
    width: 30px;
    display: none;

    @media (max-width: 650px) {
        display: block; /* 650px 이하일 때 보이도록 설정 */
    }
`;

export default Header;
