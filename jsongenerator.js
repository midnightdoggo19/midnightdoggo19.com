const fs = require('fs');
const path = require('path');

// Directory containing the images
const imagesDir = path.join(__dirname, 'assets/images');

// Output JSON file
const outputJsonPath = path.join(__dirname, 'assets/images.json');

// Supported image file extensions
const supportedExtensions = ['.jpg', '.jpeg', '.png', '.gif'];

fs.readdir(imagesDir, (err, files) => {
    if (err) {
        console.error('Error reading images directory:', err);
        return;
    }

    // Filter files to include only supported image types
    const imageFiles = files.filter(file => 
        supportedExtensions.includes(path.extname(file).toLowerCase())
    );

    // Generate relative paths for the JSON file
    const imagePaths = imageFiles.map(file => `/assets/images/${file}`);

    // Write the JSON file
    fs.writeFile(outputJsonPath, JSON.stringify(imagePaths, null, 2), err => {
        if (err) {
            console.error('Error writing images.json:', err);
        } else {
            console.log(`Successfully generated ${outputJsonPath}`);
        }
    });
});
