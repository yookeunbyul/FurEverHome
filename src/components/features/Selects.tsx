import styled from 'styled-components';
import Select from '../common/Select';

function Selects() {
    return (
        <>
            <Container>
                <SelectArea>
                    <Select />
                    <Select />
                    <Select />
                    <Select />
                    <Select />
                    <Select />
                </SelectArea>
            </Container>
        </>
    );
}

const Container = styled.div``;

const SelectArea = styled.div`
    margin-top: 8rem;
    display: flex;
    gap: 1rem;

    @media (max-width: 650px) {
        gap: 0.5rem;
        margin-top: 6rem;
    }
`;

export default Selects;
