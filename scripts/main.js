// Fetch the list of images from the JSON file
fetch('images.json')
    .then(response => response.json())
    .then(images => {
        // Pick a random image from the array
        const randomIndex = Math.floor(Math.random() * images.length);
        const randomImage = images[randomIndex];

        // Set the background image and caption
        document.getElementById('background').style.backgroundImage = `url(images/${randomImage})`;
        document.getElementById('caption').textContent = 'A day in the life of my dog!';
    })
    .catch(err => console.error('Error fetching images:', err));
