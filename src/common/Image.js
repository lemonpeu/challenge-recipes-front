import styled from 'styled-components';

const Image = ({ width, height, padding, src, alt }) => {
    return (
        <StyledImage width={width} height={height} padding={padding}>
            <img src={src} alt={alt} />
        </StyledImage>
    );
};

const StyledImage = styled.div`
    width: ${(props) => (props.width ? props.width : 'auto')};
    height: ${(props) => (props.height ? props.height : 'auto')};
    padding: ${(props) => props.padding && '1rem'};
    overflow: hidden;
    img {
        width: 100%;
    }
`;

export default Image;
