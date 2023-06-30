import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { splitVendorChunkPlugin } from "vite";
// import dotenv from "dotenv";

// dotenv.config();

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react(), splitVendorChunkPlugin()],
});
