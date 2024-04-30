import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "../pages/Home"
import Profile from "../pages/Profile"

const router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route index element={<Home />}></Route>
                <Route path="/profile/:id" element={<Profile />}></Route>
            </Routes>
        </BrowserRouter>
    )
}

export default router


