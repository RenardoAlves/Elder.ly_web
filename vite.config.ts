import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Troque "Elder.ly_web" pelo nome EXATO do seu repositório no GitHub
const repoName = 'Elder.ly_web'

export default defineConfig({
  plugins: [react()],
  base: `/${repoName}/`,
  server: {
    open: true,
  },
  build: {
    outDir: 'dist',
  },
})