const baseurl = '{{ site.baseurl }}'; 
fetch(`${baseurl}/images.json`)
    .then(response => response.json())
    .then(images => {
        const randomIndex = Math.floor(Math.random() * images.length);
        const randomImage = images[randomIndex];

        document.getElementById('background').style.backgroundImage = `url(${randomImage})`;
        document.getElementById('caption').textContent = 'github.com/midnightdoggo19/gallery';
    })
    .catch(err => console.error('Error fetching images:', err));
