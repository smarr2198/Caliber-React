import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // If you deploy to a subfolder (e.g. example.com/caliber/), set base: '/caliber/'
  // base: '/',
})
