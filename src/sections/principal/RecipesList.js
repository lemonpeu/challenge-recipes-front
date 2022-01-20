import styled from 'styled-components';
import { useQuery } from '../../utils/hooks/useQuery';
import Article from '../../common/Article';

const RecipesList = () => {
    const { elements, loading } = useQuery({
        method: 'get',
        endpoint: '/api/recipes',
        defaultValue: [],
    });

    return (
        <StyledRecipesList>
            <h3 className="title">Recipes list</h3>
            <section className="article-container">
                {loading ? (
                    <p>Cargando</p>
                ) : (
                    elements.map((recipe) => <Article mb={2} {...recipe} key={recipe.id} />)
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
