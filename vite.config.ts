import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react-swc'
import tailwindcss from '@tailwindcss/vite';
import path from 'path';
import { viteStaticCopy } from 'vite-plugin-static-copy'


export default defineConfig(({ mode })=> {
  //@ts-ignore
  const env = loadEnv(mode, process.cwd());
  return {
    build:{
      outDir: 'dist',
      emptyOutDir: true,
      rollupOptions: {
        input: {
          main: path.resolve(__dirname, 'index.html'),  // Your main entry file
        },
      },
    },
    server: {
      port: Number(env.VITE_PORT) || 5173,
      watch: {
        usePolling: true,  // Use polling to watch for changes, useful on certain OS (e.g., WSL)
      },
    },
    preview: {
      port: Number(env.PORT) || 3000,
      watch: {
        usePolling: true,  // Use polling to watch for changes, useful on certain OS (e.g., WSL)
      },
    },
    plugins: [
      react(),
      tailwindcss(),
      viteStaticCopy({
        targets: [
          {
            src: 'public/*', // Example: Copy assets from the 'src/assets' directory
            dest: '.', // Copy them to 'public/assets'
          },
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
    resolve: {
      alias: {
        '@components': path.resolve(__dirname, 'src/components'),
        '@partials': path.resolve(__dirname, 'src/components/partials'),
        '@state': path.resolve(__dirname, 'src/redux'),
        '@utils': path.resolve(__dirname, 'src/utils'),
        '@/assets': path.resolve(__dirname, 'src/assets'),
        '@/types': path.resolve(__dirname, 'src/types'),
        '@/config': path.resolve(__dirname, 'src/configs'),
        '@middleware': path.resolve(__dirname, 'src/middleware'),
        '@screens': path.resolve(__dirname, 'src/views/screens'),
      },
    },
  }
})
