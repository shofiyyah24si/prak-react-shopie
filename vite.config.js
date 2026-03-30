import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/ 
export default defineConfig({
  plugins: [react(),
    tailwindcss()
  ],
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
