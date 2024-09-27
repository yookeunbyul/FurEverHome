import GlobalStyle from '../../styles/GlobalStyle';
import styled from 'styled-components';
import Select from '../common/Select';
import CardList from '../common/CardList';

function ListSection() {
    return (
        <>
            <GlobalStyle />
            <Container className="mw">
                <SelectArea>
                    <Select />
                    <Select />
                    <Select />
                    <Select />
                    <Select />
                    <Select />
                </SelectArea>
                <Title>
                    <span className="point">$data.size</span>마리의 친구들이 기다리고 있어요
                </Title>
                <CardList />
            </Container>
        </>
    );
}

const Container = styled.section`
    padding-bottom: 8rem;
`;

const Title = styled.h4`
    font-size: 1.8rem;
    font-weight: 900;
    letter-spacing: -2px;
    padding-bottom: 2rem;

    @media (max-width: 650px) {
        font-size: 1.5rem;
    }
`;

const SelectArea = styled.div`
    margin-top: 8rem;
    margin-bottom: 2rem;
    display: flex;
    gap: 1rem;

    @media (max-width: 650px) {
        gap: 0.5rem;
        margin-top: 6rem;
    }
`;

export default ListSection;
