import styled from 'styled-components';
import { COLORS } from '../../utils/COLORS';

const Footer = () => {
    return (
        <StyledFooter>
            <p>Page made by Peu :)</p>
        </StyledFooter>
    );
};

const StyledFooter = styled.footer`
    background-color: ${COLORS.black};
    padding: 2rem 0;
    text-align: center;
    font-size: 1.5rem;
    color: ${COLORS.white};
    font-weight: 200;
`;

export default Footer;
