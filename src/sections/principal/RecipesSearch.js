import { useState } from 'react';
import { useQuery } from '../../utils/hooks/useQuery';
import Form from '../../common/Form';
import RecipesList from './RecipesList';

const RecipesSearch = () => {
    const { elements } = useQuery({
        method: 'get',
        endpoint: '/api/recipes',
        defaultValue: [],
    });

    const [recipes, setRecipes] = useState([]);

    return (
        <section>
            <Form setFilteredRecipes={(data) => setRecipes(data)} elements={elements} />
            <RecipesList searchRecipes={recipes} />
        </section>
    );
};

export default RecipesSearch;
