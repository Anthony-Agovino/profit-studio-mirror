with open('vite.config.js', 'r') as f:
    content = f.read()

# For Vite 8 / Rolldown, manualChunks should be a function directly, not an object containing a function.
new_content = content.replace(
"""        manualChunks: {
          vendor(id) {
            if (id.includes('node_modules')) {
              return 'vendor';
            }
          }
        },""",
"""        manualChunks(id) {
          if (id.includes('node_modules')) {
            return 'vendor';
          }
        },"""
)

with open('vite.config.js', 'w') as f:
    f.write(new_content)
