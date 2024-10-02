import { Route, Routes } from 'react-router-dom';
import MainPage from './pages/MainPage';
import ListPage from './pages/ListPage';
import MapPage from './pages/MapPage';
import MatchingPage from './pages/MatchingPage';
import BookMarkPage from './pages/BookMarkPage';
import DetailPage from './pages/DetailPage';
import GlobalStyle from './styles/GlobalStyle';
import ScrollToTop from './components/features/ScrollToTop';
import MatchingOneStep from './components/layout/MatchingOneStep';
import MatchingTwoStep from './components/layout/MatchingTwoStep';
import MatchingThreeStep from './components/layout/MatchingThreeStep';
import MatchingFourStep from './components/layout/MatchingFourStep';
import ResultSection from './components/layout/ResultSection';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from './store/store';
import Hamburger from './components/features/Hamburger';
import { handleVisibility } from './store/menuSlice';
import { useEffect } from 'react';

function App() {
    const isShowMenu = useSelector((state: RootState) => state.menu.isShowMenu);
    const dispatch = useDispatch();

    useEffect(() => {
        const mediaQuery = window.matchMedia('(min-width: 650px)');

        const handleMediaQueryChange = (e: MediaQueryListEvent) => {
            if (e.matches) {
                // 화면이 650px 이상으로 커졌을 때 햄버거 메뉴 닫기
                dispatch(handleVisibility(false));
            }
        };

        mediaQuery.addEventListener('change', handleMediaQueryChange);

        return () => {
            mediaQuery.removeEventListener('change', handleMediaQueryChange);
        };
    }, [dispatch]);

    return (
        <>
            <GlobalStyle />
            <ScrollToTop />
            {isShowMenu && <Hamburger />}
            <Routes>
                <Route path="/" element={<MainPage />} />
                <Route path="/list" element={<ListPage />} />
                <Route path="/matching" element={<MatchingPage />}>
                    <Route index element={<MatchingOneStep />} />
                    <Route path="step2" element={<MatchingTwoStep />} />
                    <Route path="step3" element={<MatchingThreeStep />} />
                    <Route path="step4" element={<MatchingFourStep />} />
                    <Route path="result" element={<ResultSection />} />
                </Route>
                <Route path="/map" element={<MapPage />} />
                <Route path="/bookmark" element={<BookMarkPage />} />
                <Route path="/detail/:id" element={<DetailPage />} />
            </Routes>
        </>
    );
}

export default App;
