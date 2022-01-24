import styled from 'styled-components';

const Image = ({ width, height, padding, src, alt, widthM }) => {
    return (
        <StyledImage widthM={widthM} width={width} height={height} padding={padding}>
            <img src={src} alt={alt} />
        </StyledImage>
    );
};

const StyledImage = styled.div`
    height: ${(props) => (props.height ? props.height : '100%')};
    padding: ${(props) => props.padding && '1rem'};
    overflow: hidden;
    img {
        width: 100%;
    }
    @media (min-width: 500px) {
        width: ${(props) => (props.widthM ? props.widthM : '100%')};
        height: ${(props) => (props.height ? props.height : '100%')};
    }
`;

export default Image;
