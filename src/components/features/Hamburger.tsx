import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { handleMenu } from '../../store/menuSlice';
import close from '../../assets/coloredclose.svg';
import { useNavigate } from 'react-router-dom';

function Hamburger() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const handleMenuClick = (path: string) => {
        dispatch(handleMenu());
        document.body.style.overflow = 'auto';
        navigate(path);
    };
    return (
        <Container>
            <CloseArea className="mw">
                <CloseBtn
                    onClick={() => {
                        dispatch(handleMenu());
                        document.body.style.overflow = 'auto';
                    }}
                >
                    <Img src={close} />
                </CloseBtn>
            </CloseArea>
            <ContentsArea>
                <BtnArea>
                    <MenuBtn onClick={() => handleMenuClick('/list')}>유기동물 보기</MenuBtn>
                    <MenuBtn onClick={() => handleMenuClick('/matching')}>털친소</MenuBtn>
                    <MenuBtn onClick={() => handleMenuClick('/map')}>주변 보호소 찾기</MenuBtn>
                    <MenuBtn onClick={() => handleMenuClick('/bookmark')}>나의 관심동물</MenuBtn>
                </BtnArea>
            </ContentsArea>
        </Container>
    );
}

const Container = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #ffffff;
    z-index: 10000;
`;

const CloseArea = styled.div`
    text-align: end;
    padding: 2rem 0.5rem;
`;

const CloseBtn = styled.button`
    width: fit-content;
`;

const Img = styled.img`
    width: 100%;
    max-width: 23px; // 최대 너비 설정 (필요에 따라 조정)
    height: auto; // 비율 유지
    object-fit: contain; // 이미지 비율 유지
`;

const ContentsArea = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`;

const BtnArea = styled.div`
    display: flex;
    flex-direction: column;

    gap: 2rem;
`;

const MenuBtn = styled.button`
    background-color: #ffffff;
    color: #008bf0;
    border: 1px solid #008bf0;
    font-size: 1.2rem;
    padding: 0.7rem 3rem;
    letter-spacing: -1px;
    font-weight: 600;
    border-radius: 2rem;
    white-space: nowrap;

    text-align: center;

    &:hover {
        color: white;
        background-color: #008bf0;
        cursor: pointer;
    }
`;

export default Hamburger;
