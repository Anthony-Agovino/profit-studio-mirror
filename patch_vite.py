with open('vite.config.js', 'r') as f:
    content = f.read()

new_content = content.replace(
"""export default defineConfig({
  plugins: [react()],
})""",
"""export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
        },
      },
    },
  },
})"""
)

with open('vite.config.js', 'w') as f:
    f.write(new_content)
