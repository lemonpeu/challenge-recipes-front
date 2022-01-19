import styled from 'styled-components';

const Button = ({ styled, name, submit }) => {
    return (
        <StyledButton className={styled} type={submit ? 'submit' : 'button'}>
            {name}
        </StyledButton>
    );
};

const StyledButton = styled.button`
    &.principal {
        border: none;
        font-size: 1.2rem;
        padding: 5px 12px;
        background-color: transparent;
        border: 2px solid #cccc99;
        color: #333333;
    }
`;

export default Button;
