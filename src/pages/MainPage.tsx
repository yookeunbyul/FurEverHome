import OneDaySection from '../components/layout/OneDaySection';
import Header from '../components/layout/Header';
import MainSection from '../components/layout/MainSection';
import GraphSection from '../components/layout/GraphSection';

function MainPage() {
    return (
        <>
            <Header />
            <MainSection />
            <OneDaySection />
            <GraphSection />
        </>
    );
}

export default MainPage;
