import styled from 'styled-components';
import Input from './Input';
import Button from './Button';

const Form = ({ elements, setFilteredRecipes }) => {
    const onSubmit = (event) => {
        event.preventDefault();
        if (elements) {
            let arr = [];
            for (const recipe of elements) {
                if (recipe.name.includes(event.target.search.value)) {
                    arr.push(recipe);
                }
                for (const ingredient of recipe.Ingredients) {
                    if (ingredient.name.includes(event.target.search.value)) {
                        arr.push(recipe);
                    }
                }
                setFilteredRecipes(arr);
            }
        }
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
