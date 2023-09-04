const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */

      const images = [
        'images/peter.jpg',
        'images/louise.jpg',
        'images/meg.jpg',
        'images/brian.png'
      ];

      const container = document.getElementById('image-container');

      for (let i = 0; i < images.length; i++) {
        const img = document.createElement('img');
        img.src = images[i];
        container.appendChild(img);
      }

/* Declaring the alternative text for each image file */

/* Looping through images */

const newImage = document.createElement('img');
newImage.setAttribute('src', xxx);
newImage.setAttribute('alt', xxx);
thumbBar.appendChild(newImage);

/* Wiring up the Darken/Lighten button */
