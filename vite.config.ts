import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

const repoName = 'Elder.ly_web'

export default defineConfig({
  plugins: [react()],
  base: `/${repoName}/`,
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
})