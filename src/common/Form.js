import styled from 'styled-components';
import { capitalize } from '../utils/convertString';
import Input from './Input';
import Button from './Button';

const Form = ({ elements, setFilteredRecipes }) => {
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
                setFilteredRecipes(filteredRecipes);
            }
        }
    };

    const onSubmit = (event) => {
        event.preventDefault();
        findRecipes(event.target.search.value);
    };

    return (
        <StyledForm onSubmit={onSubmit}>
            <Input
                label="Search recipes by name, anime name or ingredients"
                forInput="search"
                name="search"
            />
            <Button styled="principal" submit name="Search" />
        </StyledForm>
    );
};

const StyledForm = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export default Form;
