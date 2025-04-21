import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  optimizeDeps:{
     include: ["@react-pdf/renderer"]
  },
  plugins: [react()],
  base:'/portfolio_live'
})
