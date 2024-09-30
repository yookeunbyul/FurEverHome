import Header from '../components/layout/Header';
import ListSection from '../components/layout/ListSection';
import OneDaySection from '../components/layout/OneDaySection';

function ListPage() {
    return (
        <>
            <Header />
            <OneDaySection paddingTop="4rem" mobilePaddingTop="1rem" />
            <div className="mw">
                <ListSection />
            </div>
        </>
    );
}

export default ListPage;
