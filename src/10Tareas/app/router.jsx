import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "../pages/Home"
import Tasks from "../pages/Tasks"
import Layout from "../components/Layout/Layout"

const router = () => (
    <BrowserRouter>
        <Layout>
            <Routes>
                <Route index element={<Home />}></Route>
                <Route path="/tasks" element={<Tasks />}></Route>
            </Routes>
        </Layout>
    </BrowserRouter>
)

export default router
