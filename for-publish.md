Install: Node.js
npm install -g yo generator-code
npm install -g typescript
npm install -g @vscode/vsce
npm install --save-dev @types/node

npm run build
vsce package
vsce publish --version <número>
tsc --clean