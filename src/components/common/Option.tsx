import styled from 'styled-components';

interface OptionProps {
    value: string;
    isRow?: boolean;
    imgSrc: string;
    isSelected?: boolean;
    onClick?: (value: string) => void;
}

function Option({ value, isRow = false, imgSrc, isSelected, onClick }: OptionProps) {
    return (
        <>
            <OptionContainer isRow={isRow} isSelected={isSelected} onClick={() => onClick && onClick(value)}>
                <ImgArea>
                    <Img src={imgSrc} />
                </ImgArea>

                <Text>{value}</Text>
            </OptionContainer>
        </>
    );
}

const OptionContainer = styled.button<{ isRow?: boolean; isSelected?: boolean }>`
    padding: 1rem 2rem;
    border: ${(props) => (props.isSelected ? '3px solid #47B2FF' : '1px solid #e5e5e5')};
    border-radius: 1rem;
    display: inline-flex;
    gap: ${(props) => (props.isRow ? '1.2rem' : '0.2rem')};
    justify-content: center; // 항상 중앙 정렬
    align-items: center; // 세로 가운데 정렬
    flex-direction: ${(props) => (props.isRow ? 'row' : 'column')};
    letter-spacing: -1px;

    @media (max-width: 600px) {
        padding: ${(props) => (props.isRow ? '1.5rem 1.5rem' : '1.5rem 1.8rem')};
    }

    @media (max-width: 400px) {
        font-size: 1.3rem;
        padding: ${(props) => (props.isRow ? '1rem 0.5rem' : '1rem 1.5rem')};
    }
`;

const ImgArea = styled.div`
    width: 100px; // 또는 원하는 크기
    height: 100px; // 높이 추가
    display: flex;
    justify-content: center;
    align-items: center;

    @media (max-width: 600px) {
        width: 55px; // 또는 원하는 크기
        height: 55px; // 높이 추가
    }

    @media (max-width: 400px) {
        width: 45px; // 또는 원하는 크기
        height: 45px; // 높이 추가
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
