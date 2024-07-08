import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

/** @type {import 'vite'.UserConfig} */
export default defineConfig({
  plugins: [react()],
  server: {
    cors: true
  },
  base: './',
  esbuild: {
    target: 'esnext',
    platform: 'browser'
  }
})
