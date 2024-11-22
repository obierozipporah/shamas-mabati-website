import React, { useEffect, useRef } from 'react';

const Work = () => {
  // Create a ref to the container element where you want to append the child elements
  const containerRef = useRef(null);

  // Function to load images (this should be adjusted according to your logic for loading images)
  const loadImages = () => {
    if (containerRef.current) {
      const imageContainer = containerRef.current;

      // Clear any existing content in the container before appending new images (optional)
      imageContainer.innerHTML = '';

      // Example of dynamically loading images (adjust this logic based on your needs)
      const images = [
        '/img/gallery/1.jpg', // Replace with your actual image URLs or paths
        '/img/gallery/2.jpg',
        '/img/gallery/3.jpg',
        '/img/gallery/4.jpg',
        '/img/gallery/5.jpg',
        '/img/gallery/6.jpg',
      ];

      images.forEach((imageUrl) => {
        const img = document.createElement('img');
        img.src = imageUrl;
        img.alt = 'Image';
        img.className = 'image-class'; // Optional: apply a CSS class to your images
        imageContainer.appendChild(img);
      });
    } else {
      console.error('Image container not found');
    }
  };

  // Use useEffect to ensure that DOM manipulation happens after component mounts
  useEffect(() => {
    loadImages(); // Call the loadImages function after the component has mounted
  }, []); // Empty dependency array ensures this runs only once when the component is first mounted

  return (
    <div>
      <h1>Sample Work</h1>
      {/* Container for dynamically loaded images */}
      <div id="image-container" ref={containerRef}></div>
    </div>
  );
};

export default Work;

