import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useQuery } from '../../utils/hooks/useQuery';
import Article from '../../common/Article';
import Button from '../../common/Button';

const RecipesList = ({ searchRecipes, setIsOrder, isOrder }) => {
    const [recipes, setRecipies] = useState([]);
    const [isOrderAsc, setIsOrderAsc] = useState(false);
    const { elements, loading } = useQuery({
        method: 'get',
        endpoint: '/api/recipes',
        defaultValue: [],
    });

    useEffect(() => {
        if (!isOrder) {
            if (searchRecipes.length > 0) {
                setRecipies(searchRecipes);
            } else if (searchRecipes.length < 1) {
                setRecipies(elements);
            }
        }
    }, [elements, searchRecipes, isOrder]);

    const recipesByOrder = (value) => {
        setIsOrderAsc(value);
        setIsOrder(true);
        if (isOrderAsc) {
            recipes && recipes.sort((a, b) => a.rating - b.rating);
            setRecipies(recipes);
        } else {
            recipes && recipes.sort((a, b) => b.rating - a.rating);
            setRecipies(recipes);
        }
    };

    return (
        <StyledRecipesList>
            <h3 className="title">Recipes list</h3>
            <Button onClick={() => recipesByOrder(true)} btnName="The best!" styled="principal" />
            <Button onClick={() => recipesByOrder(false)} btnName="Worst :(" styled="secondary" />
            <section className="article-container">
                {loading ? (
                    <p>Loading</p>
                ) : (
                    recipes.map((recipe) => <Article mb={2} {...recipe} key={recipe.id} />)
                )}
            </section>
        </StyledRecipesList>
    );
};

const StyledRecipesList = styled.section`
    padding: 1rem;
    .title {
        font-size: 2rem;
        text-align: center;
        margin-bottom: 2rem;
    }
`;

export default RecipesList;
