import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'


const productionBase = process.env.NODE_ENV === 'production' ? '/web_v2/' : '/';

export default defineConfig({
  base: productionBase, // Adjust "repo-name" to match your GitHub repository name
  plugins: [react()],
  build: {
    outDir: 'dist', // Confirm output directory
    // other build options
  }
});
