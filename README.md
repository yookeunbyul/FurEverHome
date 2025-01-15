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

## ✍🏻 담당 업무

- `랜딩 페이지`
  
  <img src="https://github.com/user-attachments/assets/cbeee7a6-ec20-478a-8f68-17d88bbf8105" width="250" />
  <img src="https://github.com/user-attachments/assets/81d97e23-c3d6-40cf-a24c-d346eb629e48" width="250" />

  - 미디어쿼리의 max-width를 활용한 반응형 레이아웃 구현
     - 디바이스 뷰포트 크기에 맞춰 레이아웃이 동적으로 조절되어 최적화된 사용자 경험 제공
   
  - div 태그 대신 시맨틱 태그(header, nav, section, footer)를 적극 활용
    - 웹 접근성 향상 및 스크린 리더 사용자들의 콘텐츠 이해도 향상
   
<br />

- `유기동물 보기, 상세 페이지`

  <img src="https://github.com/user-attachments/assets/1dd088c3-cee9-41f1-b811-22c7587639ef" width="250" />
  <img src="https://github.com/user-attachments/assets/d5734ff3-de80-443a-8aac-17ccdca9a62f" width="250" />

  - 유기동물 데이터 로드 시 이미지 지연으로 인한 레이아웃 시프트 현상 발생
    - react-loading-skeleton을 활용한 스켈레톤 UI 구현으로 레이아웃 시프트 현상 제거
    - 로딩 시 콘텐츠 윤곽을 미리 보여줘 사용자 체감 대기 시간 감소
   
  - Tanstack Query 도입으로 서버 데이터 관리와 페칭 최적화
    - 커스텀 훅으로 모듈화하여 재사용성 향상
    - queryKey에 필터링 조건을 포함한 자동 리페칭으로 실시간 데이터 갱신
    - StaleTime 설정으로 데이터 캐싱하여 API 호출 및 서버 부하 감소

<br />

- `유기동물 매칭 시스템(털친소)`

  <img src="https://github.com/user-attachments/assets/b7f10041-ce5b-486a-a00e-631bb9a0c039" width="250" />
  <img src="https://github.com/user-attachments/assets/92cac020-40fc-4e2c-bbcd-6a1e236125b9" width="250" />

  - 사용자 경험 극대화를 위해 심리테스트 형태의 4단계 매칭 시스템 기획
    - Redux와 Redux-toolkit으로 답변 데이터를 전역 상태로 관리
    - 단계별 이동 시에도 선택 데이터가 안정적으로 유지되도록 구현
   
  - 공공 API 제약사항을 고려해 매칭 로직을 프론트엔드에서 처리하도록 설계
    - 품종, 성별, 체중, 색상 등 4가지 조건의 필터링 로직 구현
    - Set 자료구조와 Math.random()으로 중복 없는 랜덤 매칭 결과 3개 생성
    - 사용자에게 '운명의 반려동물'을 찾아주는 특별한 경험 제공
   
  - 페이지 이동마다 getRandomElements 함수의 새로운 랜덤값 생성으로 매칭 결과 불일치 발생
    - 리렌더링시 함수가 재생성되는 사이드 이펙트 인지
    - Redux로 매칭 결과를 전역 상태 관리하여 데이터 일관성 확보
  
<br />

- `주변 보호소 찾기`

  <img src="https://github.com/user-attachments/assets/00550e56-f0f9-4e56-8daa-630f2adf258e" width="250" />

  - react-kakao-maps-sdk를 활용하여 카카오맵 API 도입
    - 유기동물 보호소와 보호 동물들의 정보를 효과적으로 전달
   
  - 지도 아이콘 클릭 시 각 보호소의 보호 동물 현황 조회되도록 구현
    - API 문서를 분석하여 실제 운영 중인 26개 보호소의 위치 데이터 수집

<br />

- `나의 관심동물(북마크)`

  <img src="https://github.com/user-attachments/assets/f00b0881-b543-46df-8626-19eb45fbbbd0" width="250" />

  - LocalStorage와 Redux를 연동하여 효율적인 상태 관리 시스템 구축
  - Storage 이벤트 리스너로 북마크 실시간 동기화하여 사용자 경험 개선

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
