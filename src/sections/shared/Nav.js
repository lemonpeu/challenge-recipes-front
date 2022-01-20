import styled from 'styled-components';
import { COLORS } from '../../utils/COLORS';

const Nav = () => {
    return (
        <StyledNav>
            <ul>
                <li>HOME</li>
                <li>Recipes</li>
                <li>Reviews</li>
            </ul>
        </StyledNav>
    );
};

const StyledNav = styled.nav`
    height: 3rem;
    width: 100%;
    color: #fff;
    background-color: ${COLORS.lilac};
    font-size: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
    ul {
        display: flex;
        padding: 0;
        li {
            margin-right: 1rem;
            &:last-of-type {
                margin: 0;
            }
        }
    }
`;

export default Nav;
