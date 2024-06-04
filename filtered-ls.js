// filtered-ls.js

// Import the 'fs' and 'path' modules
const fs = require('fs');
const path = require('path');

// Get the directory path and file extension from command line arguments
const directoryPath = process.argv[2];
const fileExtension = process.argv[3];

// Read the directory asynchronously
fs.readdir(directoryPath, (err, files) => {
    // Handle any errors
    if (err) {
        console.error('Error reading directory:', err);
        return;
    }

    // Filter files by extension
    const filteredFiles = files.filter(file => path.extname(file) === `.${fileExtension}`);

    // Print the filtered files to the console, one file per line
    filteredFiles.forEach(file => console.log(file));
});