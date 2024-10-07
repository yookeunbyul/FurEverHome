import { useSelector } from 'react-redux';
import Header from '../components/layout/Header';
import { Outlet } from 'react-router-dom';
import { RootState } from '../store/store';

function MatchingPage() {
    const matchingState = useSelector((state: RootState) => state.matching.matchingState);
    console.log(matchingState);

    return (
        <>
            <Header />
            <Outlet />
        </>
    );
}

export default MatchingPage;
