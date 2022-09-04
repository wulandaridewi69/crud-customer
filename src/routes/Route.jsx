import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect, useMemo } from "react";
import Create from '../pages/Create';
import Update from '../pages/Update';
import Homepage from "../pages/App";
import Login from '../pages/auth/Login';
import { TokenContext } from "../utils/Context";

const Router = () => {
    const [token, setToken] = useState(null);
    const jwtToken = useMemo(() => ({ token, setToken }), [token]);

    useEffect(() => {
        const getToken = localStorage.getItem("token") || "0";
        setToken(getToken);
    }, [token]);

    if (token) {
        return (
            <TokenContext.Provider value={jwtToken}>
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<Homepage />}></Route>
                        <Route path="/update/:id" element={<Update />}></Route>
                        <Route path="/create" element={<Create />}></Route>
                        <Route path="/login" element={<Login />}></Route>
                    </Routes>
                </BrowserRouter>
            </TokenContext.Provider>
        )
    }
}

export default Router;