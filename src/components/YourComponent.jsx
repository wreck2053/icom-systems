import React from "react";

// Create a context for all .png files in the 'images' folder
const imagesContext = require.context("../assets/images", false, /\.jpg$/);

// Get an array of all matching filenames
const imageFilenames = imagesContext.keys();

console.log(imageFilenames);

for (let imagename of imageFilenames) {
  console.log(imagename);
}

const YourComponent = () => {
  return (
    <div>
      <h1>Your Image Gallery</h1>
      <div>
        {imageFilenames.map((filename, index) => (
          // Use the 'filename' to require the image and set it as the src attribute
          <img
            key={index}
            src={imagesContext(filename)}
            alt={`Image ${index}`}
          />
        ))}
      </div>
    </div>
  );
};

export default YourComponent;
