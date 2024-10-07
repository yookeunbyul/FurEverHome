import styled from 'styled-components';

interface SelectProps {
    list: string[][];
    onChange: (value: string) => void;
}

function Select({ list, onChange }: SelectProps) {
    const key = list[0];
    const data = list[1];

    const handleSelectedValue = (e: React.ChangeEvent<HTMLSelectElement>) => {
        let value = e.target.value;

        switch (value) {
            case '전체':
                value = '';
                break;
            case '강아지':
                value = '개';
                break;
            case '그 외':
                value = '기타축종';
                break;
            default:
                break;
        }

        onChange(value);
    };
    return (
        <StyledSelect onChange={handleSelectedValue}>
            <option selected disabled>
                {key}
            </option>
            {data && data.map((item) => <option key={item}>{item}</option>)}
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
