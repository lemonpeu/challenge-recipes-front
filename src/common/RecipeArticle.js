import { useState } from 'react';
import styled from 'styled-components';
import Image from './Image';
import { useParams } from 'react-router-dom';
import { useQuery } from '../utils/hooks/useQuery';
import Form from './Form';
import Rating from '../sections/article/Rating';
import { useEffect } from 'react/cjs/react.development';

const RecipeArticle = () => {
    let { id } = useParams();

    const [recipe, setRecipe] = useState();
    const [userQuantity, setUserQuantity] = useState(1);

    const { elements, loading } = useQuery({
        method: 'get',
        endpoint: '/api/recipe/' + id,
        defaultValue: [],
    });

    useEffect(() => {
        if (!recipe) setRecipe(elements.recipe);
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
                    <p>Rating: {recipe.rating / recipe.people} ⭐</p>
                    <div>
                        <p>Send your rating for this recipe:</p>
                        <Rating id={recipe.id} />
                    </div>
                    <Form
                        defaultValue={recipe.quantity}
                        btnName="Send"
                        name="quantity"
                        label="Servings:"
                        onSubmit={multiplyQuantity}
                    />
                    <div className="ingredients">
                        <p>Ingredients:</p>
                        <ul>
                            {recipe.Ingredients.map((ingredient, index) => (
                                <li key={index}>
                                    - {`${setDefaultQuantity(ingredient)} ${ingredient.name}`}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="instructions">
                        <p>Instructions:</p>
                        {recipe.steps.map((step, index) => (
                            <p key={index}>{step}</p>
                        ))}
                    </div>
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
    .instructions,
    .ingredients {
        padding: 1rem 0;
    }
`;

export default RecipeArticle;
