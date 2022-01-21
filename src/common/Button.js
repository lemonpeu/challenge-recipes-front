import styled from 'styled-components';
import { COLORS } from '../utils/COLORS';

const Button = ({ styled, btnName, submit, m = 0, onClick, ...rest }) => {
    return (
        <StyledButton
            style={{ margin: `${m * 2}rem` }}
            className={styled}
            type={submit ? 'submit' : 'button'}
            onClick={onClick}
            {...rest}
        >
            {btnName}
        </StyledButton>
    );
};

const StyledButton = styled.button`
    border: none;
    font-size: 1.2rem;
    padding: 5px 12px;
    background-color: transparent;
    color: #333333;
    &.principal {
        border: 2px solid ${COLORS.principalColor};
    }
    &.secondary {
        border: 2px solid ${COLORS.lilac};
    }
`;

export default Button;
