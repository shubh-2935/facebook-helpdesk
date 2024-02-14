import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

import { createServer } from 'vite';


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    https: {
      key: 'path/to/key.pem',
      cert: 'path/to/cert.pem',
      passphrase: 'shubh'
    },
  },
})
