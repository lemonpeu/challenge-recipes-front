import styled from 'styled-components';
import { COLORS } from '../utils/COLORS';

const Button = ({ styled, name, submit, m = 0, onClick }) => {
    return (
        <StyledButton
            style={{ margin: `${m * 2}rem` }}
            className={styled}
            type={submit ? 'submit' : 'button'}
            onClick={onClick}
        >
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
        border: 2px solid ${COLORS.principalColor};
        color: #333333;
    }
    &.secondary {
        border: none;
        font-size: 1.2rem;
        padding: 5px 12px;
        background-color: transparent;
        border: 2px solid ${COLORS.lilac};
        color: #333333;
    }
`;

export default Button;
