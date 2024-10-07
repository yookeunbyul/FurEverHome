import { Link, NavLink } from 'react-router-dom';
import styled from 'styled-components';
import logo from '../../assets/logo.png';
import hamburger from '../../assets/hamburger.png';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { handleMenu } from '../../store/menuSlice';

interface FixedHeaderProps {
    $isScroll: boolean;
}

function Header() {
    const [isScroll, setIsScroll] = useState(false);
    const dispatch = useDispatch();

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

    const handleClickLogo = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <FixedHeader $isScroll={isScroll}>
            <Container className="mw">
                <h1 onClick={handleClickLogo}>
                    <Link to="/">
                        <Logo src={logo} alt="logo" />
                    </Link>
                </h1>
                <button
                    onClick={() => {
                        dispatch(handleMenu());
                        document.body.style.overflow = 'hidden';
                    }}
                >
                    <HamburgerMenu src={hamburger} />
                </button>
                <LinkArea>
                    <NavLink to="/list" className={({ isActive }) => (isActive ? 'active' : '')}>
                        유기동물 보기
                    </NavLink>
                    <NavLink to="/matching" className={({ isActive }) => (isActive ? 'active' : '')}>
                        털친소
                    </NavLink>
                    <NavLink to="/map" className={({ isActive }) => (isActive ? 'active' : '')}>
                        주변 보호소 찾기
                    </NavLink>
                    <NavLink to="/bookmark" className={({ isActive }) => (isActive ? 'active' : '')}>
                        나의 관심동물
                    </NavLink>
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
    background-color: ${(props) => (props.$isScroll ? '#ffffff' : 'transparent')};
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

    .active {
        color: #008bf0; /* 활성화된 링크의 색상 */
        font-weight: bold; /* 강조를 위해 글씨 두껍게 */
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
