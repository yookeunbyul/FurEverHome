import { Route, Routes } from 'react-router-dom';
import MainPage from './pages/MainPage';
import ListPage from './pages/ListPage';
import MapPage from './pages/MapPage';
import MatchingPage from './pages/MatchingPage';
import BookMarkPage from './pages/BookMarkPage';

function App() {
    return (
        <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/list" element={<ListPage />} />
            <Route path="/matching" element={<MapPage />} />
            <Route path="/map" element={<MatchingPage />} />
            <Route path="/bookmark" element={<BookMarkPage />} />
        </Routes>
    );
}

export default App;
