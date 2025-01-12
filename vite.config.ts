import react from '@vitejs/plugin-react-swc'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/bmbp-api': {
        target: 'http://127.0.0.1:36001', // Replace with your target URL
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/bmbp-api/, ''),
      },
    },
  },
})
