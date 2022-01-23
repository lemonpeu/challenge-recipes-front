import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import { useQuery } from '../utils/hooks/useQuery';

//Components
import Image from './Image';
import Form from './Form';
import Rating from '../sections/article/Rating';
import Box from './styled/Article';

const RecipeArticle = () => {
    let { id } = useParams();
    const { elements, loading } = useQuery({
        method: 'get',
        endpoint: '/api/recipe/' + id,
        defaultValue: [],
    });

    const [recipe, setRecipe] = useState();
    const [userQuantity, setUserQuantity] = useState(1);
    const [userRating, setUserRating] = useState({ rating: 0, people: 0 });

    useEffect(() => {
        if (elements.recipe && !recipe) {
            setRecipe(elements.recipe);
            setUserRating({ rating: elements.recipe.rating, people: elements.recipe.people });
        }
    }, [elements, recipe]);

    const setDefaultQuantity = (ingredient) => {
        return ingredient.quantity !== ''
            ? ingredient.quantity * userQuantity
            : ingredient.quantity;
    };

    const multiplyQuantity = (event) => {
        event.preventDefault();
        let value = parseInt(event.target.quantity.value);
        setUserQuantity(value);
    };

    return (
        <StyledRecipeArticle>
            {loading ? (
                <p>Loading</p>
            ) : (
                <>
                    <Image src={recipe.urlAnimeImage} alt={recipe.name} />
                    <h2>{recipe.name}</h2>
                    <p>
                        Rating: {userRating && (userRating.rating / userRating.people).toFixed(1)}{' '}
                        ⭐
                    </p>
                    <div>
                        <p>Send your rating for this recipe:</p>
                        <Rating
                            setUserRating={(e) =>
                                setUserRating({
                                    rating: userRating.rating + e,
                                    people: userRating.people + 1,
                                })
                            }
                            id={id}
                        />
                    </div>
                    <Form
                        defaultValue={recipe.quantity}
                        btnName="Send"
                        name="quantity"
                        label="Servings:"
                        onSubmit={multiplyQuantity}
                    />
                    <Box padding="1rem">
                        <p>Ingredients:</p>
                        <ul>
                            {recipe.Ingredients.map((ingredient, index) => (
                                <li key={index}>
                                    - {`${setDefaultQuantity(ingredient)} ${ingredient.name}`}
                                </li>
                            ))}
                        </ul>
                    </Box>
                    <Box padding="1rem">
                        <p>Instructions:</p>
                        {recipe.steps.map((step, index) => (
                            <p key={index}>{step}</p>
                        ))}
                    </Box>
                </>
            )}
        </StyledRecipeArticle>
    );
};

const StyledRecipeArticle = styled.article`
    height: auto;
    padding: 1rem;
    h2 {
        font-size: 1.5rem;
    }
    p,
    label,
    input {
        font-size: 1.2rem;
    }
    input {
        width: 2rem;
    }
    li {
        font-size: 1.2rem;
    }
`;

export default RecipeArticle;
