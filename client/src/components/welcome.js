import React from 'react';
import Carousel from 'nuka-carousel';

export default () => {
  return (
    <div className="landing">
      <div className="carousel-container">
      <Carousel>
        <img src="./Golden-Gate-(San-Francisco).jpg" />
        <img src="./new-york-10.jpg" />
        <img src="./tokyo-4k-wallpaper-103.jpg" />
        <img src="./paris.jpg" />
      </Carousel>
      </div>
    </div>
  )
}

