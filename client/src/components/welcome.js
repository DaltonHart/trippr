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
      <section>
        <h2>Trippr is...</h2>
        </section>
      <section className="row topics">
          <article className="col">
          <h4>Topic</h4>
          <p>viral butcher beard Vice literally Cosby sweater gastropub Wes Anderson lomo mumblecore 8-bit biodiesel flexitarian street art sartorial keffiyeh vinyl single-origin coffee selfies VHS PBR&B art party deep v banjo banh mi +1 small batch mixtape hella cray twee fap post-ironic normcore squid mlkshk sriracha tofu slow-carb ugh.</p>
            </article>
          <article className="col">
          <h4>Topic</h4>
          <p>viral butcher beard Vice literally Cosby sweater gastropub Wes Anderson lomo mumblecore 8-bit biodiesel flexitarian street art sartorial keffiyeh vinyl single-origin coffee selfies VHS PBR&B art party deep v banjo banh mi +1 small batch mixtape hella cray twee fap post-ironic normcore squid mlkshk sriracha tofu slow-carb ugh wolf ethical shabby chic you probably haven't heard of them Kickstarter locavore Thundercats photo booth stumptown umami Carles Shoreditch DIY meggings retro pickled cred chambray Williamsburg ennui pork belly Echo Park try-hard organic bicycle rights put a bird on it paleo McSweeney's whatever kitsch pop-up 3 wolf moon distillery occupy disrupt salvia lo-fi American Apparel.</p>

            </article>
          <article className="col">
          <h4>Topic</h4>
          <p>viral butcher beard Vice literally Cosby sweater gastropub Wes Anderson lomo mumblecore 8-bit biodiesel flexitarian street art sartorial keffiyeh vinyl single-origin coffee selfies VHS PBR&B art party deep v banjo banh mi +1 small batch mixtape hella cray twee fap post-ironic normcore squid mlkshk sriracha tofu slow-carb ugh. wolf ethical shabby chic you probably haven't heard of them Kickstarter locavore Thundercats photo booth stumptown umami Carles Shoreditch DIY. </p>
            </article>
        </section>
      </div>
    </div>
  )
}

