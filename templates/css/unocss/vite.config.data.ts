// https://vitejs.dev/config/
export default function getData() {
  return {
    importers: [`import UnoCSS from 'unocss/vite'`],
    plugins: [`UnoCSS()`]
  }
}
