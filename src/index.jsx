import React from 'react';
import { createRoot } from "react-dom/client"

// === Components === //
import App from './app'

// === Styles === //
import 'tailwindcss/tailwind.css'

createRoot(document.getElementById('app')).render(<React.StrictMode>
    <App />
</React.StrictMode >)