import Header from '../sections/shared/Header';
import RecipesList from '../sections/principal/RecipesList';
import Form from '../common/Form';

const Home = () => {
    return (
        <>
            <Header title="Recipes challenge" variant="principal" />
            <Form />
            <RecipesList />
        </>
    );
};

export default Home;
