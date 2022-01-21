import { useState } from 'react';
import { useQuery } from '../../utils/hooks/useQuery';
import Form from '../../common/Form';
import RecipesList from './RecipesList';
import { capitalize } from '../../utils/convertString';

const RecipesSearch = () => {
    const [recipes, setRecipes] = useState([]);
    const { elements } = useQuery({
        method: 'get',
        endpoint: '/api/recipes',
        defaultValue: [],
    });

    const findRecipes = (value) => {
        const searchLowercase = value.toLowerCase();
        const searchCapitalize = capitalize(value);
        if (elements) {
            let filteredRecipes = [];
            for (const recipe of elements) {
                if (recipe.name.includes(searchCapitalize || searchLowercase)) {
                    filteredRecipes.push(recipe);
                }
                for (const ingredient of recipe.Ingredients) {
                    if (ingredient.name.includes(searchCapitalize || searchLowercase)) {
                        filteredRecipes.push(recipe);
                    }
                }
                setRecipes(filteredRecipes);
            }
        }
    };

    const onSubmit = (event) => {
        event.preventDefault();
        findRecipes(event.target.search.value);
    };

    return (
        <section>
            <Form
                btnName="Search"
                name="search"
                label="Search recipes by name, anime name or ingredients"
                elements={elements}
                onSubmit={onSubmit}
            />
            <RecipesList searchRecipes={recipes} />
        </section>
    );
};

export default RecipesSearch;
