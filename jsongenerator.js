const fs = require('fs');
const path = require('path');

const imageDir = path.join(__dirname, 'images');
fs.readdir(imageDir, (err, files) => {
  if (err) {
    console.error('Error reading images directory:', err);
    return;
  }
  const images = files.filter(file => /\.(jpg|jpeg|png|gif)$/i.test(file));
  fs.writeFileSync('./scripts/images.json', JSON.stringify(images.map(file => `images/${file}`), null, 2));
  console.log('images.json has been generated!');
});
