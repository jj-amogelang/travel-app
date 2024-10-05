import React from 'react';
import './ImageButtons.css'; // Import the CSS file

const ImageButtons = () => {
  const handleClick = (buttonId) => {
    alert(`You clicked ${buttonId}`);
  };

  const buttons = [
    { id: 'button1', text: 'DBN', image: 'DBN.jpg' },
    { id: 'button2', text: 'Text 2', image: 'image2.jpg' },
    { id: 'button3', text: 'Text 3', image: 'image3.jpg' },
    { id: 'button4', text: 'Text 4', image: 'image4.jpg' },
    { id: 'button5', text: 'Text 5', image: 'image5.jpg' },
    { id: 'button6', text: 'Text 6', image: 'image6.jpg' },
  ];

  return (
    <div className="button-container">
      {buttons.map((button) => (
        <div
          key={button.id}
          className="image-button"
          onClick={() => handleClick(button.id)}
        >
          <img src={button.image} alt={button.text} />
          <div className="overlay-text">{button.text}</div>
        </div>
      ))}
    </div>
  );
};

export default ImageButtons;
