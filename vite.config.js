import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import dotenv from "dotenv"

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base:"/firstReachApp/",

})

