with open('index.html', 'r') as f:
    content = f.read()

new_content = content.replace(
    '<title>Local Business Website Builder</title>',
    '<meta name="description" content="Build your local business website quickly and easily with our professional website builder." />\n    <title>Local Business Website Builder</title>'
)

with open('index.html', 'w') as f:
    f.write(new_content)
