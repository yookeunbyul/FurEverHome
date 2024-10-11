import OneDaySection from '../components/layout/OneDaySection';
import MainSection from '../components/layout/MainSection';
import GraphSection from '../components/layout/GraphSection';
import { ApiResponse } from '../hooks/useAnimals';

interface MainPageProps {
    oneDayAnimals?: ApiResponse;
}

function MainPage({ oneDayAnimals }: MainPageProps) {
    return (
        <>
            <MainSection />
            <OneDaySection oneDayAnimals={oneDayAnimals} />
            <GraphSection />
        </>
    );
}

export default MainPage;
