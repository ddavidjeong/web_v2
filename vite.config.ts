import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'


// const productionBase = process.env.NODE_ENV === 'production' ? '/web_v2/' : '/';

export default defineConfig({
  base: './', // 
  plugins: [react()],
  build: {
    outDir: 'dist', 
  }
});
