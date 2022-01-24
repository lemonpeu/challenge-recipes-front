import styled from 'styled-components';
import Article from '../../common/Article';
import Button from '../../common/Button';
import Box from '../../common/styled/Box';

const RecipesList = ({ recipes, recipesByOrder }) => {
    return (
        <StyledRecipesList>
            <h3 className="title">Recipes list</h3>
            <Box display justifyContent>
                <Button
                    onClick={() => recipesByOrder('asc')}
                    btnName="The best!"
                    styled="principal"
                    m={0.5}
                />
                <Button
                    onClick={() => recipesByOrder('des')}
                    btnName="Worst :("
                    styled="secondary"
                    m={0.5}
                />
            </Box>

            <div className="article-container">
                {recipes && recipes.map((recipe) => <Article mb={2} {...recipe} key={recipe.id} />)}
            </div>
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

    @media (min-width: 500px) {
        .article-container {
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;
            padding: 2rem;
        }
    }
`;

export default RecipesList;
