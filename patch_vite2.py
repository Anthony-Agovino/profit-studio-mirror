with open('vite.config.js', 'r') as f:
    content = f.read()

# Vite 8 / Rolldown requires manualChunks to be a function if used, but often Vite 8 handles vendor splitting automatically or requires a different format.
# Let's remove the manualChunks for now, since Vite already handles chunk splitting pretty well by default,
# or we can use the function format. Let's provide the function format for manualChunks.
new_content = content.replace(
"""          vendor: ['react', 'react-dom'],""",
"""          vendor(id) {
            if (id.includes('node_modules')) {
              return 'vendor';
            }
          }"""
)

with open('vite.config.js', 'w') as f:
    f.write(new_content)
