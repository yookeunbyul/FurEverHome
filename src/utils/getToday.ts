export const getToday = () => {
    const today = new Date(); // 오늘 날짜를 가져옵니다.

    const year = today.getFullYear(); // 연도
    const month = String(today.getMonth() + 1).padStart(2, '0'); // 월 (0부터 시작하므로 1을 더합니다)
    const day = String(today.getDate()).padStart(2, '0'); // 일

    return `${year}${month}${day}`; // YYYYMMDD 형식으로 반환
};
