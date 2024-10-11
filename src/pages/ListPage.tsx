import styled from 'styled-components';
import OneDaySection from '../components/layout/OneDaySection';
import CardList from '../components/features/CardList';
import { ApiResponse, useAnimals } from '../hooks/useAnimals';
import Select from '../components/common/Select';
import { sigun, species, states } from '../utils/selectData';
import Pagination from '../components/features/Pagination';
import { useState } from 'react';

interface ListPageProps {
    oneDayAnimals?: ApiResponse;
}
function ListPage({ oneDayAnimals }: ListPageProps) {
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 18; // 한 페이지에 보여줄 아이템 수

    const [selectedSpecies, setSelectedSpecies] = useState<string>('');
    const [selectedState, setSelectedState] = useState<string>('');
    const [selectedSigun, setSelectedSigun] = useState<string>('');

    const { data: currentPageAnimals } = useAnimals(
        currentPage,
        itemsPerPage,
        selectedSigun,
        '',
        selectedState,
        selectedSpecies,
        ''
    );
    const totalLength = currentPageAnimals?.AbdmAnimalProtect?.[0]?.head[0].list_total_count;

    const totalPages = Math.ceil((totalLength as number) / itemsPerPage); // 총 페이지 수 계산

    return (
        <>
            <OneDaySection paddingtop="8rem" mobilepaddingtop="6rem" oneDayAnimals={oneDayAnimals} />
            <Container className="mw">
                <SelectArea>
                    {/* 품종,시도군,상태 */}
                    <Select list={states} onChange={(value: string) => setSelectedState(value)} />
                    <Select list={species} onChange={(value: string) => setSelectedSpecies(value)} />
                    <Select list={sigun} onChange={(value: string) => setSelectedSigun(value)} />
                </SelectArea>
                <Title>
                    <span className="point">{totalLength}</span>마리의 친구들이 기다리고 있어요
                </Title>
                <CardList animalList={currentPageAnimals} />
            </Container>
            <Pagination currentPage={currentPage} setCurrentPage={setCurrentPage} totalPages={totalPages} />
        </>
    );
}

const Container = styled.section`
    padding-bottom: 1rem;
`;

const SelectArea = styled.div`
    margin-top: 6rem;
    display: flex;
    gap: 1rem;
`;

const Title = styled.h4`
    font-size: 1.6rem;
    font-weight: 900;
    letter-spacing: -2px;
    padding: 2rem 0;

    @media (max-width: 420px) {
        font-size: 1.4rem;
    }
`;

export default ListPage;
