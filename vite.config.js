import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // build folder to docs
  base: './',
  build: {
    outDir: 'docs'
  },
})
