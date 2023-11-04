import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

const { env } = loadEnv();

// https://vitejs.dev/config/
export default defineConfig({
    base: '/palomazos/',
    define: {
        'import.meta.env.VITE_API_MOVIES_DB': env.VITE_API_MOVIES_DB,
        'import.meta.env.VITE_API_MOVIES_DB_POPULAR': env.VITE_API_MOVIES_DB_POPULAR,
        'import.meta.env.VITE_API_MOVIES_DB_TOKEN': env.VITE_API_MOVIES_DB_TOKEN,
    },
    plugins: [react(
      {
        jsxImportSource: "@emotion/react",
        babel: {
          plugins: ["@emotion/babel-plugin"],
        },
      }
  )],
})
