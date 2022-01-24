import styled from 'styled-components';

const Box = ({ children, rest, margin, display, justifyContent, padding }) => {
    return (
        <StyledBox
            padding={padding}
            margin={margin}
            display={display}
            justifyContent={justifyContent}
            {...rest}
        >
            {children}
        </StyledBox>
    );
};

const StyledBox = styled.div`
    margin: ${(props) => props.margin || 0};
    padding: ${(props) => props.padding || 0};
    display: ${(props) => (props.display ? 'flex' : 'block')};
    justify-content: ${(props) => (props.justifyContent ? 'center' : 'unset')};
`;

export default Box;
