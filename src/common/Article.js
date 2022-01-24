import Image from './Image';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Article = ({ name, urlAnimeImage, m, mb, mt, mr, rating, id }) => {
    const defaultImage = 'https://i.pinimg.com/564x/25/51/d4/2551d4ecb38352c4972c0b7b489ca8d8.jpg';
    const recipeImage = urlAnimeImage !== '' ? urlAnimeImage : defaultImage;

    return (
        <StyledArticle
            style={{
                margin: `${m * 2}rem`,
                marginBottom: `${mb * 2}rem`,
                marginTop: `${mt * 2}rem`,
                marginRight: `${mr * 2}rem`,
            }}
        >
            <Image src={recipeImage} alt="" />
            <h4>
                {name} | Rating: {rating} ⭐
            </h4>
            <Link to={`/recipe/${id}`}>Go to recipe</Link>
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
    a {
        font-size: 1.2rem;
    }
    @media (min-width: 500px) {
        width: 40%;
    }
    @media (min-width: 1000px) {
        width: 33%;
    }
`;

export default Article;
