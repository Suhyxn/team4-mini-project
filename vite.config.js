import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

const __dirname = 'src'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    // 절대 경로 설정
    alias: [{ find: '~', replacement: resolve(__dirname) }],
  },
  server: {
    proxy: {
      '/api': {
        target: 'http://3.34.229.74/',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
        secure: false,
        ws: true,
      },
    },
  },
})
