import styled from 'styled-components';
import CardList from '../components/features/CardList';
import Select from '../components/common/Select';
import { species, states } from '../utils/selectData';
import ShelterMap from '../components/features/ShelterMap';
import { useState } from 'react';
import { useAnimals } from '../hooks/useAnimals';
import Pagination from '../components/features/Pagination';

function MapPage() {
    const [selectedSpecies, setSelectedSpecies] = useState<string>('');
    const [selectedState, setSelectedState] = useState<string>('');
    const [selectedShelter, setSelectedShelter] = useState<string>('보호소');
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 18; // 한 페이지에 보여줄 아이템 수

    const { data: shelterList, isError } = useAnimals(
        currentPage,
        itemsPerPage,
        '',
        '',
        selectedState,
        selectedSpecies,
        selectedShelter
    );

    if (isError) return <div>오류가 났습니다.</div>;

    const totalLength = shelterList?.AbdmAnimalProtect[0]?.head[0]?.list_total_count ?? 0;

    const totalPages = Math.ceil((totalLength as number) / itemsPerPage); // 총 페이지 수 계산

    return (
        <>
            <Container className="mw">
                <MainTitle>나와 가까운 보호소를 클릭해 보세요</MainTitle>
                <ShelterMap setSelectedShelter={setSelectedShelter} />
                <SelectArea>
                    {/* 품종,상태 */}
                    <Select list={states} onChange={(value: string) => setSelectedState(value)} />
                    <Select list={species} onChange={(value: string) => setSelectedSpecies(value)} />
                </SelectArea>
                <Title>
                    <span>
                        <span className="point">{selectedShelter || '보호소'}</span>에서
                    </span>
                    <span>친구들이 기다리고 있어요</span>
                </Title>
                {shelterList && <CardList animalList={shelterList} />}
            </Container>
            <Pagination currentPage={currentPage} setCurrentPage={setCurrentPage} totalPages={totalPages} />
        </>
    );
}

const Container = styled.section`
    padding-top: 4rem;
    padding-bottom: 1rem;

    @media (max-width: 650px) {
        padding-top: 2rem;
    }
`;

const SelectArea = styled.div`
    margin-top: 6rem;
    display: flex;
    gap: 1rem;
`;

const MainTitle = styled.h3`
    font-size: 1.8rem;
    font-weight: 900;
    letter-spacing: -2px;
    padding-top: 4rem;
    padding-bottom: 2rem;

    @media (max-width: 420px) {
        font-size: 1.4rem;
        padding-bottom: 1rem;
    }
`;

const Title = styled.h4`
    font-size: 1.6rem;
    font-weight: 900;
    letter-spacing: -2px;
    padding: 2rem 0;
    display: flex;
    gap: 0.5rem;

    @media (max-width: 650px) {
        flex-direction: column;
        gap: 0rem;
        font-size: 1.4rem;
    }
`;

export default MapPage;
