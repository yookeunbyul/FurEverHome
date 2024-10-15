import CardList from '../components/features/CardList';
import styled from 'styled-components';
import illust from '../assets/Man walking two dogs on leash.png';
import { AnimalData } from '../hooks/useAnimals';
import { useEffect, useState } from 'react';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import Footer from '../components/layout/Footer';

function BookMarkPage() {
    const [storedAnimals, setStoredAnimals] = useState<AnimalData[]>([]);
    const [imageLoaded, setImageLoaded] = useState(false);

    useEffect(() => {
        const img = new Image();
        img.onload = () => {
            setImageLoaded(true);
        };
        img.src = illust;

        const loadStoredAnimals = () => {
            const animals = JSON.parse(localStorage.getItem('bookmarkedAnimals') || '[]');
            setStoredAnimals(animals);
        };

        loadStoredAnimals(); //마운트 될 때 load

        //로컬스토리지 변경 감지
        window.addEventListener('storage', loadStoredAnimals);

        return () => {
            window.removeEventListener('storage', loadStoredAnimals);
        };
    }, []);

    const handleRemoveBookmark = (animalId: string) => {
        const updatedAnimals = storedAnimals.filter((animal) => animal.ABDM_IDNTFY_NO !== animalId);
        setStoredAnimals(updatedAnimals);
        localStorage.setItem('bookmarkedAnimals', JSON.stringify(updatedAnimals));
    };

    return (
        <PageWrapper>
            <ContentContainer className="mw">
                {storedAnimals.length > 0 ? (
                    <Container>
                        <ContentWrapper>
                            <Title>친구들에게 관심을 가져주셔서 감사해요!</Title>
                            <CardList
                                paddingtop="2rem"
                                animalList={storedAnimals}
                                onRemoveBookmark={handleRemoveBookmark}
                            />
                        </ContentWrapper>
                    </Container>
                ) : (
                    <Container>
                        <IllustContainer>
                            <IllustArea>
                                {!imageLoaded ? (
                                    <SkeletonWrapper>
                                        <StyledSkeleton />
                                    </SkeletonWrapper>
                                ) : (
                                    <Illust src={illust} alt="dog and cat" />
                                )}
                            </IllustArea>
                            <SubTitle>다시 보고 싶은 친구들을 추가해주세요!</SubTitle>
                        </IllustContainer>
                    </Container>
                )}
            </ContentContainer>
            <Footer />
        </PageWrapper>
    );
}

const PageWrapper = styled.div`
    display: flex;
    flex-direction: column;
`;

const ContentContainer = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
`;

const Container = styled.div`
    flex: 1;
    padding-bottom: 2rem;
    padding-top: 4rem;
    position: relative;

    min-height: 100vh;

    @media (max-width: 650px) {
        padding-top: 2rem;
    }
`;

const ContentWrapper = styled.div`
    position: relative;
`;

const Title = styled.h3`
    font-size: 1.8rem;
    font-weight: 900;
    letter-spacing: -2px;
    padding-top: 4rem;

    @media (max-width: 480px) {
        font-size: 1.4rem;
    }
`;

const SubTitle = styled.h3`
    font-size: 1.8rem;
    font-weight: 900;
    letter-spacing: -2px;
    white-space: nowrap;
    margin-top: 1rem;
    @media (max-width: 500px) {
        font-size: 1.4rem;
    }
`;

const IllustContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
`;

const IllustArea = styled.div``;

const Illust = styled.img`
    width: 100%;
    max-width: 450px; // 최대 너비 설정 (필요에 따라 조정)
    height: auto; // 비율 유지
    object-fit: contain; // 이미지 비율 유지

    @media (max-width: 500px) {
        max-width: 350px; // 최대 너비 설정 (필요에 따라 조정)
    }
`;

const SkeletonWrapper = styled.div`
    width: 450px; // 최대 너비 설정 (필요에 따라 조정)
    height: 280px;
    position: relative;
    @media (max-width: 500px) {
        max-width: 400px; // 최대 너비 설정 (필요에 따라 조정)
    }
`;

const StyledSkeleton = styled(Skeleton)`
    position: absolute;
    top: 0;
    left: 0;
    border-radius: 0.5rem;
    width: 100% !important;
    height: 100%; !important;
`;

export default BookMarkPage;
