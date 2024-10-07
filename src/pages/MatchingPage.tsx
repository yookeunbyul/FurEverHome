import Header from '../components/layout/Header';
import { Outlet } from 'react-router-dom';

function MatchingPage() {
    return (
        <>
            <Header />
            <Outlet />
        </>
    );
}

export default MatchingPage;
