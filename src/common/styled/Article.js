import styled from 'styled-components';

const Box = ({ children }) => {
    return <StyledBox>{children}</StyledBox>;
};

const StyledBox = styled.div`
    margin: ${(props) => props.margin || 0};
    padding: ${(props) => props.padding || 0};
    width: ${(props) => props.width || 'auto'};
    height: ${(props) => props.height || 'auto'};
`;

export default Box;
