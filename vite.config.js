import { defineConfig } from "vite";
import * as path from 'path'

// === Plugins === //
import react from "@vitejs/plugin-react-swc";
import { qrcode } from 'vite-plugin-qrcode';

export default defineConfig({
    plugins: [react(), qrcode()],
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './src'),
        },
    }
});