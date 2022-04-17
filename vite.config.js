import { defineConfig } from 'vite'
import vuePlugin from '@vitejs/plugin-vue'


import {resolve} from 'path';

const srcPath = resolve(process.cwd(), 'src');
const dev = process.env.NODE_ENV !== 'production'
export default defineConfig({
    plugins:[
        vuePlugin(),
    ],
    build:{
        assetsDir: 'assets',
        outDir: 'dist',
        minify: !dev,
    },
    resolve: {
        alias: {
          '@': srcPath,
        },
    },
    server: {
      proxy: {
        "/api": {
          target: "http://localhost:8000/api/v2",
          changeOrigin: true,
          secure: false,
          rewrite: (path) => path.replace(/^\/api/, ""),
        },
      },
    }
})