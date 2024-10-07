# 🐶 발바닥구조대(FurEver Home)

<img width="1255" alt="화면 캡처 2024-09-27 124017" src="https://github.com/user-attachments/assets/a7105d57-2be5-4970-8e1b-86cb1fc5e316">

## ✍🏻 요약

현대 사회에서 반려동물의 입양은 단순히 외양적 특성이나 품종에 기반한 선택을 넘어서, 개인의 라이프스타일과 심리적 호환성을 고려한 맞춤형 접근이 필요합니다.

이에 따라, **유기동물의 입양**을 보다 효과적으로 홍보하고자 하는 발바닥구조대(FurEver Home)는 단순히 동물의 품종이나 나이와 같은 기본적 정보를 제공하는 것을 넘어, 서로에게 잘 맞는 파트너를 찾아주기 위해 기획되었습니다.

발바닥구조대(FurEver Home)는 **경기도 유기 동물 보호 현황 API**를 활용하여 `매칭 시스템`, `유기동물 리스트`, `필터링`, `북마크`를 제공합니다.

또한 **카카오맵 API**를 통해 `주변 보호소 위치`를 시각적으로 제공하여 유기동물 보호소의 접근성 상승은 물론 유기동물의 입양을 장려합니다.

#### 🔗 활용 API URL

-   https://data.gg.go.kr/portal/data/service/selectServicePage.do?infId=UOKOBXSYKT10BAGIDAXZ28522406&infSeq=3

#### ⚙️ 기술 스택

-   `TypeScript`, `React`, `styled-components`, `react-router-dom`, `Redux`, `React-Query`, `axios`

-   `swiper`, `chart.js`, `React kakao-map sdk`, `react-spinners`

-   `vercel`

<br />

## ✍🏻 진행사항

-   `9/26~9/27`

    ✅ 메인페이지 퍼블리싱(반응형)

    ✅ 유기동물 보기 퍼블리싱(반응형)

    ✅ 나의 관심동물 퍼블리싱(반응형)

-   `9/30`

    ✅ 주변 보호소 찾기 퍼블리싱(반응형)

    ✅ 유기동물 상세페이지 퍼블리싱(반응형)

-   `10/1`

    ✅ 털친소 총 4단계 퍼블리싱(반응형)

-   `10/2`

    ✅ 털친소 결과 퍼블리싱(반응형)

    ✅ 햄버거 메뉴 퍼블리싱(반응형, Redux 사용)

-   `10/4`

    ✅ vercel 배포

-   `10/5`

    ✅ MainPage, oneDaySection, GraphSection API 연동

-   `10/6`

    ✅ 북마크 기능

    ✅ DetailPage, Kakao Map, 유기동물 보기, 주변 보호소 찾기 API 연동

    ✅ Matching 4단계 redux로 state 관리

-   `10/7`

    ✅ Matching 결과 페이지 구현 완료

    🔥 ~~시도군, 보호소명으로 API 호출하는거 오류나는 게 있음~~

    🔥 ~~매칭 결과를 아직 구현 못 함~~

    🔥 ~~graphSection 수정~~ (우선 barchart만 개선, 도넛은 생각을 좀 해야겠다)

-   `10/8`

    🔥 털친소 시작하는 설명 페이지 구현?

    🔥 vercel 아이콘 바꾸기

    🔥 swiper 버튼 제공

    🔥 고민하고 라이브러리 처음 적용하는 것들 다 정리하기

    🔥 스켈레톤 UI 적용? 그리고 뭔가 뚝뚝 끊기면서 페이지 넘어가는 거 같음

<br />

## ✍🏻 트러블 슈팅

-   09/27 : chart.js 설치 및 적용

    ✅ 내용 정리 : https://s2ylvia.tistory.com/25

-   10/07 : (vercel) Uncaught TypeError: Cannot read properties of undefined (reading '1')

    -   원인 : api 연동에 문제? undefined가 뜬 거같다.

    -   해결 : vercel에 api key 설정을 안해준 거였다. 항상 확인 필수🔥🔥

-   10/07: 컴포넌트가 리렌더링될 때마다 getRandomElements 함수가 새로운 랜덤 값을 생성하고 있어 결과가 계속 변경되고 있다.

    -   시도 : useCallback, useMemo 훅을 사용한다. => 그래도 안되네?

    -   해결 : redux로 상태 전역으로 관리 및 useEffect 사용
