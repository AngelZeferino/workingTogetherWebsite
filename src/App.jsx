import './index.css';
import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './components/pages/Home.jsx'
import Navbar from './components/Navbar.jsx';


function App() {

    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/Navbar" element={<Navbar />} />
                </Routes>
            </BrowserRouter>
        </>

    )
}

export default App
