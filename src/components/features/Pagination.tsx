import styled from 'styled-components';

interface PaginationProps {
    currentPage: number;
    setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
    totalPages: number; // 총 페이지 수를 prop으로 받습니다.
}

function Pagination({ currentPage, setCurrentPage, totalPages }: PaginationProps) {
    const handleNextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage((prev) => Math.min(prev + 1, totalPages));
            window.scrollTo({ top: 0 });
        }
    };

    const handlePreviousPage = () => {
        if (currentPage > 1) {
            setCurrentPage((prev) => Math.max(prev - 1, 1));
            window.scrollTo({ top: 0 });
        }
    };

    // 페이지 번호 생성 로직
    const getPaginationButtons = () => {
        const buttons = [];
        const startPage = Math.max(1, Math.floor((currentPage - 1) / 5) * 5 + 1); // 현재 페이지에 따라 시작 페이지 계산
        const endPage = Math.min(startPage + 4, totalPages); // 최대 5개 버튼 표시

        for (let i = startPage; i <= endPage; i++) {
            buttons.push(
                <Button
                    key={i}
                    onClick={() => {
                        setCurrentPage(i);
                        window.scrollTo({ top: 0 });
                    }}
                    active={currentPage === i} // 현재 페이지와 비교하여 active prop 설정
                >
                    {i}
                </Button>
            );
        }

        return buttons;
    };

    return (
        <PaginationContainer>
            <PageButton onClick={handlePreviousPage} disabled={currentPage === 1}>
                이전
            </PageButton>
            {getPaginationButtons()}
            <PageButton onClick={handleNextPage} disabled={currentPage === totalPages}>
                다음
            </PageButton>
        </PaginationContainer>
    );
}

const PaginationContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 3rem;
    gap: 1rem;
`;

const PageButton = styled.button``;

const Button = styled.button<{ active?: boolean }>`
    color: ${(props) => (props.active ? '#ffffff' : '#7f7f7f')};
    background-color: ${(props) => (props.active ? '#47B2FF' : '#ffffff')};
    border: ${(props) => (props.active ? '' : '1px solid #7f7f7f;')};
    width: 40px;
    height: 40px;
    border-radius: 0.5rem;
`;

export default Pagination;
