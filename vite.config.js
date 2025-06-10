import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// // https://vite.dev/config/
// export default defineConfig({
//   plugins: [react()],
// })
export default defineConfig({
  base: './', // ← add this line if it's missing
  plugins: [react()],
})

