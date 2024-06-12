import { defineConfig } from "vite";
import * as path from 'path'

// === Plugins === //
import react from "@vitejs/plugin-react-swc";
import { qrcode } from 'vite-plugin-qrcode';
import generouted from '@generouted/react-router/plugin'

export default defineConfig({
    plugins: [react(), qrcode(), generouted()],
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './src'),
        },
    }
});