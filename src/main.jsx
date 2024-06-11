import React from 'react';
import { createRoot } from "react-dom/client"

// === Components === //
import App from './app'

const root = createRoot(document.querySelector('#app'))
root.render(<App />)