import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tailwindcss from '@tailwindcss/vite';
import path from 'path';
import { viteStaticCopy } from 'vite-plugin-static-copy'

export default defineConfig({
  build:{
    outDir: 'public',
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, 'index.html'),  // Your main entry file
      },
    },
  },
  server: {
    port: 3000,
    hmr: {
      host: 'localhost',
    },
    watch: {
      usePolling: true,  // Use polling to watch for changes, useful on certain OS (e.g., WSL)
    },
  },
  preview: {
    port: 8080
  },
  plugins: [
    react(),
    tailwindcss(),
    viteStaticCopy({
      targets: [
        {
          src: 'src/assets/*', // Example: Copy assets from the 'src/assets' directory
          dest: 'public/assets', // Copy them to 'public/assets'
        },
      ],
    }),
  ],
  define: {
    'process.env.VITE_API_URL': JSON.stringify(process.env.VITE_API_URL),
  },
  css: {
    preprocessorOptions: {
      scss: {
        api: 'modern-compiler', // or "modern", "legacy"
        importers: [
        ],
      },
      less: {
        modifyVars: {
          'primary-color': '#3498db', // Example customization for Less
        },
        javascriptEnabled: true,
      },
    },
  },
  //@ts-ignore
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: './src/__test__/setup.ts',
  },
})
