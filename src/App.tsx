import { Route, Routes } from 'react-router-dom';
import MainPage from './pages/MainPage';
import ListPage from './pages/ListPage';
import MapPage from './pages/MapPage';
import MatchingPage from './pages/MatchingPage';
import BookMarkPage from './pages/BookMarkPage';
import DetailPage from './pages/DetailPage';
import GlobalStyle from './styles/GlobalStyle';
import ScrollToTop from './components/features/ScrollToTop';

function App() {
    return (
        <>
            <GlobalStyle />
            <ScrollToTop />
            <Routes>
                <Route path="/" element={<MainPage />} />
                <Route path="/list" element={<ListPage />} />
                <Route path="/matching" element={<MatchingPage />} />
                <Route path="/map" element={<MapPage />} />
                <Route path="/bookmark" element={<BookMarkPage />} />
                <Route path="/detail/:id" element={<DetailPage />} />
            </Routes>
        </>
    );
}

export default App;
