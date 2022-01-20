import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './containers/Home';
import { Layout } from './sections/shared/Layout';

const App = () => {
    return (
        <Router>
            <Layout>
                <Routes>
                    <Route exact path="/" element={<Home />} />
                </Routes>
            </Layout>
        </Router>
    );
};

export default App;
