import { useState } from 'react';
import styled from 'styled-components';
import Image from './Image';
import { useParams } from 'react-router-dom';
import { useQuery } from '../utils/hooks/useQuery';
import Form from './Form';

const RecipeArticle = () => {
    let { id } = useParams();
    const { elements, loading } = useQuery({
        method: 'get',
        endpoint: '/api/recipes',
        defaultValue: [],
    });
    let recipeObj = elements.find((element) => element.id === id);

    const [userQuantity, setUserQuantity] = useState(1);

    const setDefaultQuantity = (ingredient) => {
        return ingredient.quantity !== ''
            ? ingredient.quantity * userQuantity
            : ingredient.quantity;
    };

    const multiplyQuantity = (event) => {
        event.preventDefault();
        let value = parseInt(event.target.quantity.value);
        console.log('Value', value);
        setUserQuantity(value);
    };

    return (
        <StyledRecipeArticle>
            {!loading && (
                <>
                    <Image src={recipeObj.urlAnimeImage} alt={recipeObj.name} />
                    <h2>{recipeObj.name}</h2>
                    <p>Rating: {recipeObj.rating / recipeObj.people} ⭐</p>
                    <Form
                        defaultValue={recipeObj.quantity}
                        btnName="Send"
                        name="quantity"
                        label="Servings:"
                        onSubmit={multiplyQuantity}
                    />
                    <div className="ingredients">
                        <p>Ingredients:</p>
                        <ul>
                            {recipeObj.Ingredients.map((ingredient) => (
                                <li>- {`${setDefaultQuantity(ingredient)} ${ingredient.name}`}</li>
                            ))}
                        </ul>
                    </div>
                    <div className="instructions">
                        <p>Instructions:</p>
                        {recipeObj.steps.map((step) => (
                            <p>{step}</p>
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
