# 🐶 발바닥구조대(FurEver Home)

![Slide 16_9 - 2](https://github.com/user-attachments/assets/d0a4c625-c06c-4684-9f11-a11d52a735e4)


## ✍🏻 요약

현대 사회에서 반려동물의 입양은 단순히 외양적 특성이나 품종에 기반한 선택을 넘어서, 개인의 라이프스타일과 심리적 호환성을 고려한 맞춤형 접근이 필요합니다.

이에 따라, **유기동물의 입양**을 보다 효과적으로 홍보하고자 하는 발바닥구조대(FurEver Home)는 단순히 동물의 품종이나 나이와 같은 기본적 정보를 제공하는 것을 넘어, 서로에게 잘 맞는 파트너를 찾아주기 위해 기획되었습니다.

발바닥구조대(FurEver Home)는 **경기도 유기 동물 보호 현황 API**를 활용하여 `매칭 시스템`, `유기동물 리스트`, `필터링`, `북마크`를 제공합니다.

또한 **카카오맵 API**를 통해 `주변 보호소 위치`를 시각적으로 제공하여 유기동물 보호소의 접근성 상승은 물론 유기동물의 입양을 장려합니다.

#### 🔗 활용 API URL

-   https://data.gg.go.kr/portal/data/service/selectServicePage.do?infId=UOKOBXSYKT10BAGIDAXZ28522406&infSeq=3

#### ⚙️ 기술 스택

-   `TypeScript`, `React`, `styled-components`, `react-router-dom`, `Redux`, `React-Query`, `axios`

-   `swiper`, `chart.js`, `React kakao-map sdk`, `react-spinners`, `react-loading-skeleton`

-   `vercel`

<br />

## ✍🏻 주요 기능

- 랜딩 페이지
  
  ![image 22](https://github.com/user-attachments/assets/cbeee7a6-ec20-478a-8f68-17d88bbf8105)
  ![image 23](https://github.com/user-attachments/assets/81d97e23-c3d6-40cf-a24c-d346eb629e48)

- 유기동물 보기, 상세 페이지

  ![image 15](https://github.com/user-attachments/assets/1dd088c3-cee9-41f1-b811-22c7587639ef)
  ![image 167](https://github.com/user-attachments/assets/d5734ff3-de80-443a-8aac-17ccdca9a62f)

- 유기동물 매칭 시스템(털친소)
  
  ![image 19](https://github.com/user-attachments/assets/b7f10041-ce5b-486a-a00e-631bb9a0c039)
  ![image 201](https://github.com/user-attachments/assets/92cac020-40fc-4e2c-bbcd-6a1e236125b9)

- 주변 보호소 찾기

  ![image 191](https://github.com/user-attachments/assets/00550e56-f0f9-4e56-8daa-630f2adf258e)

- 나의 관심동물(북마크)

  ![image 202](https://github.com/user-attachments/assets/f00b0881-b543-46df-8626-19eb45fbbbd0)

<br />

## ✍🏻 트러블 슈팅

-   09/27 : chart.js 설치 및 적용

    ✅ 내용 정리 : https://s2ylvia.tistory.com/25

-   10/05 : 전체 데이터가 필요한데 pSize=1000으로 해서 for문으로 돌려서 사용하는 것이 옳은가?

    -   강사님의 답변

        ```
        데이터 요청 시 파라미터 정보를 활용해서 필요한 데이터만 서버에서 요청하고 파라미터에 따라 요청 URL이 변경되는 방법으로 진행해야 한다
        ```

-   10/07 : (vercel) Uncaught TypeError: Cannot read properties of undefined (reading '1')

    -   원인 : api 연동에 문제? undefined가 뜬 거같다.

    -   해결 : vercel에 api key 설정을 안해준 거였다. 항상 확인 필수🔥🔥

-   10/07: 컴포넌트가 리렌더링될 때마다 getRandomElements 함수가 새로운 랜덤 값을 생성하고 있어 결과가 계속 변경되고 있다.

    -   시도 : useCallback, useMemo 훅을 사용한다. => 그래도 안되네?

    -   해결 : redux로 상태 전역으로 관리 및 useEffect 사용

-   10/11: vercel 배포 사이트에 새로고침 시 404 오류

    -   해결 : https://shape-coding.tistory.com/entry/Vercel-%EB%B2%84%EC%85%80-%ED%94%84%EB%A1%A0%ED%8A%B8-%EB%B0%B0%ED%8F%AC-%ED%9B%84-%EC%83%88%EB%A1%9C%EA%B3%A0%EC%B9%A8-%EC%8B%9C-404-%EC%97%90%EB%9F%AC

-   10/11: 카카오톡 공유하기하면 왜 vercel 링크가 안가고 local 링크가 갈까

    -   해결 : 카카오 개발자 사이트에서 도메인 적은 곳에서 앞에 있는게 기본 도메인으로 자동 설정이 된다. 그걸 vercel 링크로 바꿔줬다.

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

    🔥 ~~vercel 아이콘 바꾸기~~

-   `10/10`

    🔥 ~~털친소 시작하는 설명 페이지 구현?~~

-   `10/11`

    🔥 ~~카카오톡 공유하기 기능 구현~~

    🔥 ~~Footer 추가~~

    🔥 고민하고 라이브러리 처음 적용하는 것들 다 정리하기

    🔥 ~~스켈레톤 UI 적용? 그리고 뭔가 뚝뚝 끊기면서 페이지 넘어가는 거 같음~~
