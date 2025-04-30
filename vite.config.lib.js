// vite.config.lib.js
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { fileURLToPath, URL } from 'node:url';


export default defineConfig({
    plugins: [vue()],
    resolve: {
        alias: {
            '@': fileURLToPath(new URL('./src/lib', import.meta.url)),
        },
    },
    css: {
        preprocessorOptions: {
            scss: {
                additionalData: `
          @import "@/assets/textField/defaultTextFieldStyle.scss";
          @import "@/assets/textField/formUtils.scss";
          @import "@/assets/textField/customColor.scss";
        `
            }
        }
    },
    build: {
        lib: {
            entry: fileURLToPath(new URL('./src/lib/index.js', import.meta.url)),
            name: 'VueDynamicFormBuilder',
            fileName: (format) => `vue-dynamic-form-builder.${format}.js`,
        },
        rollupOptions: {
            external: ['vue'],
            output: {
                globals: {
                    vue: 'Vue',
                },
            },
        },
    },
});
