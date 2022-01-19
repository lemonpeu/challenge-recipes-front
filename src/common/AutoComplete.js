import styled from 'styled-components';

const AutoComplete = ({ forInput, label, children }) => {
    return (
        <StyledAutoComplete>
            <label htmlFor={forInput} type="text" name="name">
                {label}
            </label>
            <input autoComplete="off" id={forInput} name="name" />
            {children}
        </StyledAutoComplete>
    );
};

const StyledAutoComplete = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    input {
        width: 100%;
        height: 38px;
    }
`;

export default AutoComplete;
