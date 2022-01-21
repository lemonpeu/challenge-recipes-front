import styled from 'styled-components';

const Input = ({ forInput, label, name }) => {
    return (
        <StyledInput>
            <label htmlFor={forInput} name={name}>
                {label}
            </label>
            <input autoComplete="off" id={forInput} name={name} />
        </StyledInput>
    );
};

const StyledInput = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 2rem;
    label {
        font-size: 1.2rem;
        margin-bottom: 1rem;
    }
    input {
        width: 100%;
        height: 38px;
        font-size: 1.5rem;
    }
`;

export default Input;
