import react from '@vitejs/plugin-react-swc'
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
  },
  preview: {
    port: 3000,
  },
  resolve: {
    alias: {
      '@': '/src',
      '@components': '/src/components',
    },
  },
  build: {
    rollupOptions: {
      onwarn: (warning, warn) => {
        if (
          warning.code === 'MODULE_LEVEL_DIRECTIVE' &&
          warning.message.includes(`"use client"`)
        ) {
          return
        }
        warn(warning)
      },
    },
  },
})
