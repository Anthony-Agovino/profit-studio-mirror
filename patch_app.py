with open('src/App.jsx', 'r') as f:
    content = f.read()

# Replace static imports with lazy loading
new_content = content.replace(
    "import Sidebar from './components/Sidebar';",
    "import { Suspense, lazy } from 'react';\nconst Sidebar = lazy(() => import('./components/Sidebar'));"
)
new_content = new_content.replace(
    "import RoadmapAccordion from './components/RoadmapAccordion';",
    "const RoadmapAccordion = lazy(() => import('./components/RoadmapAccordion'));"
)

# Add Suspense boundaries
new_content = new_content.replace(
    "<Sidebar",
    "<Suspense fallback={<div>Loading Sidebar...</div>}>\n          <Sidebar"
)
new_content = new_content.replace(
    'onClose={() => setSidebarOpen(false)}\n        />',
    'onClose={() => setSidebarOpen(false)}\n          />\n        </Suspense>'
)

new_content = new_content.replace(
    "<RoadmapAccordion",
    "<Suspense fallback={<div>Loading content...</div>}>\n              <RoadmapAccordion"
)
new_content = new_content.replace(
    'onFormChange={handleFormChange}\n            />',
    'onFormChange={handleFormChange}\n              />\n            </Suspense>'
)


with open('src/App.jsx', 'w') as f:
    f.write(new_content)
