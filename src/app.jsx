import React from 'react';
import { createRoot } from "react-dom/client"

// import {
//     createBrowserRouter,
//     RouterProvider,
// } from "react-router-dom";

// === Components === //
import Header from '@/components/Header'

// === Routers === //
// import routers from '@/routers'
import { Routes } from '@generouted/react-router'

// const router = createBrowserRouter(routers);

createRoot(document.getElementById('app')).render(<React.StrictMode>
    <Header />
    <Routes />
</React.StrictMode >)