import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      external: ["@mui/icons-material/Github","@mui/icons-material/Twitter","@mui/icons-material/LinkedIn","@mui/icons-material/Instagram",]
    }
  }
})

