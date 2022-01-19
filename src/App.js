import Header from './sections/shared/Header';
import RecipesList from './sections/principal/RecipesList';
import Form from './common/Form';

const App = () => {
    return (
        <>
            <nav></nav>
            <main role="main">
                <Header title="Recetas a un solo click" description="Anime and more" />
                <Form />
                <RecipesList />
            </main>
            <footer></footer>
        </>
    );
};

export default App;
