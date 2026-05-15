import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Site is served at https://silkyrich.github.io/Lourinha/
export default defineConfig({
  base: '/Lourinha/',
  plugins: [react()],
  build: {
    target: 'es2020',
    sourcemap: false,
  },
})
