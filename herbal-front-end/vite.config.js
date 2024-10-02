// import { defineConfig } from 'vite';
// import react from '@vitejs/plugin-react';
// import path from 'path';

// export default defineConfig({
//   plugins: [react()],
//   resolve: {
//     alias: {
//       '@': path.resolve(__dirname, 'src'),
//     },
//   },
//   build: {
//     outDir: 'dist', // Output in the 'dist' folder
//     rollupOptions: {
//       output: {
//         manualChunks(id) {
//           // Create separate chunks for node_modules
//           if (id.includes('node_modules')) {
//             return id.split('node_modules/')[1].split('/')[0].toString();
//           }
//         },
//         chunkSizeWarningLimit: 500, // Set custom chunk size limit for warnings
//       },
//     },
//   },
//   optimizeDeps: {
//     exclude: ['react-icons'],
//   },
// });
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  build: {
    outDir: 'dist', // Output in the 'dist' folder
    rollupOptions: {
      external: ['react-chartjs-2', 'chart.js'], // Externalize these libraries
      output: {
        manualChunks(id) {
          // Create separate chunks for node_modules
          if (id.includes('node_modules')) {
            return id.split('node_modules/')[1].split('/')[0].toString();
          }
        },
        chunkSizeWarningLimit: 500, // Set custom chunk size limit for warnings
      },
    },
  },
  optimizeDeps: {
    exclude: ['react-icons'],
  },
});
