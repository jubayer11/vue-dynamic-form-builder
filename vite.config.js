import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { fileURLToPath, URL } from 'node:url'

export default defineConfig({
  base: '/vue-dynamic-form-builder/',
  plugins: [vue()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src/lib', import.meta.url)),
      '@demo': fileURLToPath(new URL('./src/demo', import.meta.url))
    },
  },
  build: {
    lib: {
      entry: fileURLToPath(new URL('./src/lib/index.js', import.meta.url)),
      name: 'VueDynamicFormBuilder',
      fileName: (format) => `vue-dynamic-form-builder.${format}.js`
    },
    rollupOptions: {
      external: ['vue'],
      output: {
        globals: {
          vue: 'Vue'
        }
      }
    }
  }
})
