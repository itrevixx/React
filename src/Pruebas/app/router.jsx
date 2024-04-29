import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import Create from '../pages/Create';
import Read from '../pages/Read';
import Profile from '../pages/Profile';


const Router = () => (
    <BrowserRouter>
        <Routes>
            <Route index element={<Home />} />
            <Route path="/create" element={<Create />} />
            <Route path="/read" element={<Read />} />
            <Route path="/profile/:id" element={<Profile />} />
        </Routes>
    </BrowserRouter>
);

export default Router;