import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: "/Portfolio/",
  plugins: [react()],
  build: {
    chunkSizeWarningLimit: 2000, // Adjust the limit as needed
  },
})