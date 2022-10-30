import { Route, Routes } from "react-router-dom";
import AddTech from "../pages/AddTech";
import Dashboard from "../pages/Dashboard";

export function AuthRoutes() {
    return( 
        <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/addtech" element={<AddTech />} />
        </Routes>
    )
}