const fs = require('fs');
const path = require('path');

const wwwDir = path.join(__dirname, 'www');

// Ensure www exists
if (!fs.existsSync(wwwDir)) {
    fs.mkdirSync(wwwDir, { recursive: true });
}

// Files to copy
const filesToCopy = ['index.html', 'favicon.svg'];
for (const file of filesToCopy) {
    const src = path.join(__dirname, file);
    if (fs.existsSync(src)) {
        fs.copyFileSync(src, path.join(wwwDir, file));
    }
}

// Directories to copy
const dirsToCopy = ['css', 'js', 'assets'];
for (const dir of dirsToCopy) {
    const src = path.join(__dirname, dir);
    const dest = path.join(wwwDir, dir);
    if (fs.existsSync(src)) {
        fs.cpSync(src, dest, { recursive: true, force: true });
    }
}

console.log('✓ Web assets successfully synced to www/');
