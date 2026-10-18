import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // base './' — isse build hui site kisi bhi folder/path se chal jaati hai
  // (Firebase, GitHub Pages, ya seedha file kholne par bhi)
  base: './',
  server: {
    port: 5174,
    open: true
  }
})
