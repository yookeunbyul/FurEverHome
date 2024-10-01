import styled from 'styled-components';

interface OptionProps {
    value: string;
    isRow?: boolean;
    imgSrc: string;
}

function Option({ value, isRow = false, imgSrc }: OptionProps) {
    return (
        <>
            <OptionContainer isRow={isRow}>
                <ImgArea>
                    <Img src={imgSrc} />
                </ImgArea>

                <Text>{value}</Text>
            </OptionContainer>
        </>
    );
}

const OptionContainer = styled.button<{ isRow: boolean }>`
    padding: 1rem 2.5rem;
    border: 1px solid #e5e5e5;
    border-radius: 1rem;
    display: inline-flex;
    gap: ${(props) => (props.isRow ? '1.2rem' : '0')};
    justify-content: ${(props) => (props.isRow ? 'space-between' : 'center')};
    align-items: center;
    flex-direction: ${(props) => (props.isRow ? 'row' : 'column')};
    letter-spacing: -1px;

    @media (max-width: 690px) {
        padding: ${(props) => (props.isRow ? '1.5rem 1.5rem' : '1.5rem 2rem')};
    }
`;

const ImgArea = styled.div`
    width: 100px; // 또는 원하는 크기
    height: 100px; // 높이 추가
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 0.5rem; // 텍스트와의 간격

    @media (max-width: 690px) {
        width: 70px; // 또는 원하는 크기
        height: 70px; // 높이 추가
    }
`;

const Img = styled.img`
    width: 100%;
    height: 100%;
    object-fit: contain; // 이미지 비율 유지
`;

const Text = styled.div`
    font-size: 1.5rem;
    text-align: center; // 텍스트 중앙 정렬
    white-space: nowrap;

    @media (max-width: 690px) {
        font-size: 1.1rem;
    }
`;

export default Option;
