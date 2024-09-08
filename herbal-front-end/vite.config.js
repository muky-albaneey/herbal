// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'

// export default defineConfig({
//   plugins: [react()],
//   build: {
//     outDir: 'dist', // Ensure the build output is in the 'dist' directory
//   },
// })
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist', // Ensure the build output is in the 'dist' directory
  },
  optimizeDeps: {
    exclude: ['react-icons'], // Exclude react-icons from Vite's dependency optimizer
  },
});
