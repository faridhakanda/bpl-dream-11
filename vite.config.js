import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
    extend: {
        backgroundImage: {
            'banner-bg': "url('./src/assets/bg-shadow.png')",
        }
    },
  plugins: [
    react(),
    tailwindcss(),
],
})
