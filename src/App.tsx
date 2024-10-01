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

function App() {
    return (
        <>
            <GlobalStyle />
            <ScrollToTop />
            <Routes>
                <Route path="/" element={<MainPage />} />
                <Route path="/list" element={<ListPage />} />
                <Route path="/matching" element={<MatchingPage />}>
                    <Route index element={<MatchingOneStep />} />
                    <Route path="step2" element={<MatchingTwoStep />} />
                    <Route path="step3" element={<MatchingThreeStep />} />
                    <Route path="step4" element={<MatchingFourStep />} />
                </Route>
                <Route path="/map" element={<MapPage />} />
                <Route path="/bookmark" element={<BookMarkPage />} />
                <Route path="/detail/:id" element={<DetailPage />} />
            </Routes>
        </>
    );
}

export default App;
