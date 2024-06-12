import React from 'react';
import { createRoot } from "react-dom/client"

import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";

// === Components === //
import Header from '@/components/Header'

// === Routers === //
import routers from '@/routers'

const router = createBrowserRouter(routers);

const root = createRoot(document.querySelector('#app'))
root.render(<React.StrictMode>
    <Header />
    <RouterProvider router={router} fallbackElement={<p>Loading...</p>} >
    </RouterProvider>
</React.StrictMode >)