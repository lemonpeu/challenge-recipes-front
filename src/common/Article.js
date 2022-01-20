import Image from './Image';
import styled from 'styled-components';

const Article = ({ name, imageURL, m, mb, mt, stars }) => {
    const defaultImage = 'https://i.pinimg.com/564x/25/51/d4/2551d4ecb38352c4972c0b7b489ca8d8.jpg';
    const recipeImage = imageURL !== '' ? imageURL : defaultImage;

    return (
        <StyledArticle
            style={{
                margin: `${m * 2}rem`,
                marginBottom: `${mb * 2}rem`,
                marginTop: `${mt * 2}rem`,
            }}
        >
            <Image height="10rem" src={recipeImage} alt="" />
            <h4>
                {name} | Rating: {stars}
            </h4>
        </StyledArticle>
    );
};

const StyledArticle = styled.article`
    display: flex;
    flex-direction: column;
    align-items: center;
    h4 {
        font-size: 1.2rem;
        font-weight: 200;
    }
`;

export default Article;
