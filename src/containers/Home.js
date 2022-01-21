import Header from '../sections/shared/Header';
import RecipesSearch from '../sections/principal/RecipesSearch';

const Home = () => {
    return (
        <>
            <Header title="Recipes challenge" variant="principal" />
            <RecipesSearch />
        </>
    );
};

export default Home;
