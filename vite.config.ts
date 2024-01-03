import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  define: {
    // those two env vars are used by this lib
    // ref: https://github.com/thlorenz/parse-link-header/
    "process.env.PARSE_LINK_HEADER_MAXLEN": "2000",
    "process.env.PARSE_LINK_HEADER_THROW_ON_MAXLEN_EXCEEDED": "null",
  },
});
