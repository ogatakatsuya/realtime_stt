import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0', // 外部からアクセス可能にする
    port: 5173,      // 使用するポートを指定
  },
})
