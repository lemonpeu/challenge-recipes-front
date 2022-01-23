import styled from 'styled-components';
import Article from '../../common/Article';
import Button from '../../common/Button';

const RecipesList = ({ recipes, recipesByOrder }) => {
    return (
        <StyledRecipesList>
            <h3 className="title">Recipes list</h3>
            <Button onClick={() => recipesByOrder('asc')} btnName="The best!" styled="principal" />
            <Button onClick={() => recipesByOrder('des')} btnName="Worst :(" styled="secondary" />
            <section className="article-container">
                {recipes && recipes.map((recipe) => <Article mb={2} {...recipe} key={recipe.id} />)}
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
