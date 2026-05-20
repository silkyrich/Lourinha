import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Site is served at https://lourinha.richmorgan.co.uk/
export default defineConfig({
  base: '/',
  plugins: [react()],
  build: {
    target: 'es2020',
    sourcemap: false,
  },
})
