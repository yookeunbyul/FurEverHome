import { Link } from 'react-router-dom';
import styled from 'styled-components';
import GlobalStyle from '../../styles/GlobalStyle';
import logo from '../../assets/logo.png';
import hamburger from '../../assets/hamburger.png';

function Header() {
    return (
        <>
            <GlobalStyle />
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
        </>
    );
}

const Container = styled.header`
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
