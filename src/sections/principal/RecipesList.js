import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useQuery } from '../../utils/hooks/useQuery';
import Article from '../../common/Article';

const RecipesList = ({ searchRecipes }) => {
    const [recipes, setRecipies] = useState([]);
    const { elements, loading } = useQuery({
        method: 'get',
        endpoint: '/api/recipes',
        defaultValue: [],
    });

    useEffect(() => {
        if (searchRecipes.length > 0) {
            setRecipies(searchRecipes);
        } else {
            setRecipies(elements);
        }
    }, [elements, searchRecipes]);

    return (
        <StyledRecipesList>
            <h3 className="title">Recipes list</h3>
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
