import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/hrnet/', // Remplacez 'nom-du-repo' par le nom de votre dépôt GitHub
  plugins: [react()],
  build: {
    outDir: 'dist'
  }
})
