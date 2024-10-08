import CardList from '../components/features/CardList';
import Header from '../components/layout/Header';
import styled from 'styled-components';
import illust from '../assets/illust.svg';
import { AnimalData } from '../hooks/useAnimals';
import { useEffect, useState } from 'react';

function BookMarkPage() {
    const [storedAnimals, setStoredAnimals] = useState<AnimalData[]>([]);

    useEffect(() => {
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
        <>
            <Header />
            <Container className="mw">
                {storedAnimals.length > 0 ? (
                    <>
                        <Title>친구들에게 관심을 가져주셔서 감사해요!</Title>
                        <CardList
                            paddingtop="2rem"
                            animalList={storedAnimals}
                            onRemoveBookmark={handleRemoveBookmark}
                        />
                    </>
                ) : (
                    <IllustContainer className="mw">
                        <IllustArea>
                            <Illust src={illust} alt="dog and cat" />
                        </IllustArea>
                        <SubTitle>다시 보고 싶은 친구들을 추가해주세요!</SubTitle>
                    </IllustContainer>
                )}
            </Container>
        </>
    );
}

const Container = styled.div`
    padding-bottom: 8rem;

    padding-top: 4rem;

    @media (max-width: 650px) {
        padding-top: 2rem;
    }
`;

const Title = styled.h3`
    font-size: 2rem;
    font-weight: 900;
    letter-spacing: -2px;
    padding-top: 4rem;

    @media (max-width: 650px) {
        font-size: 1.7rem;
    }
`;

const SubTitle = styled.h3`
    font-size: 1.8rem;
    font-weight: 900;
    letter-spacing: -2px;
    white-space: nowrap;
    @media (max-width: 650px) {
        font-size: 1.7rem;
    }
`;

const IllustContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    position: absolute;
    top: 58%;
    left: 50%;
    transform: translate(-50%, -58%);
`;

const IllustArea = styled.div`
    width: fit-content;
`;

const Illust = styled.img`
    width: 100%;
    max-width: 400px; // 최대 너비 설정 (필요에 따라 조정)
    height: auto; // 비율 유지
    object-fit: contain; // 이미지 비율 유지

    @media (max-width: 650px) {
        min-width: 400px; // 최대 너비 설정 (필요에 따라 조정)
    }
`;

export default BookMarkPage;
