import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Project site is served from:
// https://<org>.github.io/ChoosePharmacy-Roadmap/
// so assets must be referenced from that absolute base path.
export default defineConfig({
  base: '/ChoosePharmacy-Roadmap/',
  plugins: [react()],
});
