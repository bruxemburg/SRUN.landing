import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path, { join } from 'path'
import Icons from 'unplugin-icons/vite'
import { FileSystemIconLoader } from 'unplugin-icons/loaders'
import WindiCSS from 'vite-plugin-windicss'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    Icons({
      customCollections: {
        srun: FileSystemIconLoader(
          './public/assets/icons',
          svg => svg.replace(/^<svg /, '<svg fill="currentColor" '),
        ),
      },
    }),
    WindiCSS({
      onOptionsResolved: (options) => {
        options.scanOptions.extraTransformTargets.css.push(join(__dirname, 'excluded', 'included.css'))
      },
    }),
  ],
  resolve: {
    alias: {
      '~/': `${path.resolve(__dirname, 'src')}/`,
    },
  },
})