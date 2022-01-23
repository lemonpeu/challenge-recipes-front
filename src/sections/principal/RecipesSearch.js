import { useState } from 'react';
import { useQuery } from '../../utils/hooks/useQuery';
import Form from '../../common/Form';
import RecipesList from './RecipesList';
import { useEffect } from 'react/cjs/react.development';

const RecipesSearch = () => {
    const [recipes, setRecipes] = useState([]);
    const [query, setQuery] = useState({ text: '', type: '' });
    const { elements } = useQuery({
        method: 'get',
        endpoint: query.text !== '' ? `/api/search?${query.type}=${query.text}` : `/api/recipes`,
        defaultValue: [],
    });

    useEffect(() => {
        if (!recipes.length) setRecipes(elements);
    }, [elements, recipes]);

    const onSubmit = (event) => {
        event.preventDefault();
        setQuery({ text: event.target.search.value, type: 'name' });
    };

    return (
        <section>
            <Form
                btnName="Search"
                name="search"
                label="Search recipes by name, anime name or ingredients"
                onSubmit={onSubmit}
                onClearSearch={() => setRecipes(recipes.recipes)}
                isSecondaryBtn
            />
            <RecipesList
                recipesByOrder={(order) => setQuery({ text: order, type: 'order' })}
                recipes={recipes.recipes}
            />
        </section>
    );
};

export default RecipesSearch;
