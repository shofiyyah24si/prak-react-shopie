import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        main: 'index.html',
        'pertemuan-2': 'pertemuan-2.html',
        'tugas-biodata': 'tugas-biodata.html',
      },
    },
  },
})
