import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import { qrcode } from 'vite-plugin-qrcode';

export default defineConfig({
    plugins: [react(), qrcode()],
});