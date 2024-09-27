import styled from 'styled-components';

function Select() {
    return (
        <StyledSelect>
            <option>품종</option>
        </StyledSelect>
    );
}

const StyledSelect = styled.select`
    padding: 0.5rem 1rem 0.5rem 0.4rem;
    border-radius: 0.6rem;
    border: 1px solid #bbbbbb;

    @media (max-width: 650px) {
        font-size: 0.8rem;
        padding: 0.5rem 0.83rem 0.5rem 0.4rem;
    }
`;

export default Select;
