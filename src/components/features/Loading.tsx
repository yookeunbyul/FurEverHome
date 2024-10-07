import styled from 'styled-components';
import icon from '../../assets/icon.png';
import { BarLoader } from 'react-spinners';

function Loading() {
    return (
        <ContentsArea>
            <ImgArea>
                <Img src={icon} />
            </ImgArea>
            <LoadingTitle>로딩 중입니다...</LoadingTitle>
            <BarLoader
                height={10}
                width={425}
                color="#47B2FF"
                cssOverride={{
                    borderRadius: '1rem',
                    marginTop: '1rem',
                }}
            />
        </ContentsArea>
    );
}

const ContentsArea = styled.div`
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const ImgArea = styled.div`
    text-align: center;
    width: 60px;
`;

const Img = styled.img`
    width: 100%;
    object-fit: contain;
`;

const LoadingTitle = styled.h2`
    font-size: 2.8rem;
    font-weight: 900;
    letter-spacing: -1px;
    text-align: center; // 중앙 정렬
    margin: 0.7rem 0;

    @media (max-width: 690px) {
        font-size: 2.3rem;
        line-height: 3rem;
    }
`;

export default Loading;