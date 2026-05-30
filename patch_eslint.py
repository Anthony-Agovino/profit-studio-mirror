with open('src/components/PromptBuilder.jsx', 'r') as f:
    content = f.read()

# Replace useEffect with simple variable assignment for derived state
# This is a common React anti-pattern fix where derived state is better than useEffect
new_content = content.replace(
"""  const [colorSuggestions, setColorSuggestions] = useState([]);

  useEffect(() => {
    setColorSuggestions(getColorSuggestions(formData.businessType));
  }, [formData.businessType]);""",
"""  const colorSuggestions = getColorSuggestions(formData.businessType);"""
)

# And remove useEffect import if it's the only one
new_content = new_content.replace(
    "import { useState, useEffect } from 'react';",
    "import { useState } from 'react';"
)

with open('src/components/PromptBuilder.jsx', 'w') as f:
    f.write(new_content)
