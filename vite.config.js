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
        'pertemuan-3': 'pertemuan-3.html',
        'pertemuan-4': 'pertemuan-4.html',
        'pertemuan-5': 'pertemuan-5.html',
        'tugas-biodata': 'tugas-biodata.html',
        'tugas-p3': 'tugas-p3.html',
      },
    },
  },
})
