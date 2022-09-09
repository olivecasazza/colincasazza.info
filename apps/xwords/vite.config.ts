import path from 'path';
import { defineConfig } from 'vite';
import Vue from '@vitejs/plugin-vue';
import Components from 'unplugin-vue-components/vite';
import wasmPack from "vite-plugin-wasm-pack";
import { viteCommonjs } from "@originjs/vite-plugin-commonjs";

export default defineConfig({
  // assetsInclude: /\.(pdf|jpg|png|svg|css|html)$/,
  resolve: {
    alias: {
      '@assets/': `${path.resolve(__dirname, './src/assets')}/`,
      '@app/': `${path.resolve(__dirname, './src/app')}/`,
      '@public/': `${path.resolve(__dirname, './src/public')}/`,
      '@theme/': `${path.resolve(__dirname, '../../libs/theme')}/`,
      '@wasm-lib/': `${path.resolve(__dirname, '../../libs/wasm-lib/pkg')}/`,
    },
  },
  publicDir: path.resolve(__dirname, './src/public'),
  plugins: [
    Vue(),
    Components({
      dirs: ['src/app/components'],
    }),
    wasmPack([`${path.resolve(__dirname, '../../libs/wasm-lib/')}/`,]), 
    viteCommonjs()
  ],
});
