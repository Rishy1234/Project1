const HeroSection = () => {
  return (
    <>
      <main className="hero container">
        <div className="hero-cotent">
          <h1> YOUR FEET DESERVE THE BEST</h1>
          <p>
            YOUR FEET DESERVE THE BEST AND WE ARE HERE TO HELP YOU WITH OUR
            SHOES.YOUR FEET DESERVE THE BEST AND WE ARE HERE TO HELP YOU WITH
            OUR SHOES.
          </p>
          <div className="hero-button">
            <button>SHOP NOW </button>
            <button className="secondary-button">CATEGORY</button>
          </div>
          <div className="SHOPPING">  
            <p> ALSO AVAILABLE ON</p>
            <div className="brand-images">
              <img src="/images/amazon.png" alt="Amazon-Logo" />
              <img src="/images/flipkart.png" alt="Flipkart-Logo" />
            </div>
          </div>
        </div>
        <div className="hero-image">
          <img src="/images/nike_image.png" alt="Nike-Logo" />
        </div>
      </main>
    </>
  );
};
export default HeroSection;
