import React, { useEffect } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import Home from './landing/home';
import Product from './landing/pr';
import Buy from './landing/buy';

export default function CostaPanel(){
    const location = useLocation();

    useEffect(() => {
        document.documentElement.scrollTo(0,0);
    }, [location.pathname])
    return (
        <div className='panelLanding'>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/e/*" element={<Product />} />
                <Route path="/buy/product/*" element={<Buy />} />
            </Routes>
        </div>
    )
}