import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import About from '../pages/About';
import Contact from '../pages/Contact';
import Layout from '../components/Layout/Layout';
import Pokemon from '../components/MyApiComponent/MyApiComponent'
import ChuckNorris from '../components/ChuckNorrisApi/ChuckNorrisApi';


const Router = () => (
    <BrowserRouter>
        <Layout>
            <Routes>
                <Route index element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path='/pokemon' element={<Pokemon />} />
                <Route path='/chucknorris' element={<ChuckNorris />} />
            </Routes>
        </Layout>
    </BrowserRouter>
);

export default Router;
