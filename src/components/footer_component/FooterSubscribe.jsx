import React from "react";

const FooterSubscribe = () => {
  return (
    <div className="flex flex-wrap justify-between py-8">
      <div>
        <h1 className="text-2xl font-bold ">Subscribe Newsletter</h1>
        <p>
          Be the first to know about our special offers and the latesst home
          design ideas.
        </p>
        <div>
          <form className="subscription-form">
            <i class="fa-regular fa-envelope text-2xl ml-3"></i>
            <input
              type="text"
              className="subscription-input"
              placeholder="Email or mobile number"
            />
            <button type="submit" className="subscription-button">
              Subscribe
            </button>
          </form>
        </div>
      </div>
      <div>
        <h3>Jazeera Paints</h3>
        <ul>
          <li>News</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Academy</li>
          <li>Site Map</li>
        </ul>
      </div>
      <div>
        <h3>Discover</h3>
        <ul>
          <li>Products</li>
          <li>Colors</li>
          <li>Catalogues</li>
          <li>ForYou Programme</li>
          <li>Shop Products</li>
          <li>Out Stores</li>
        </ul>
      </div>
      <div>
        <h3>Download App from</h3>
        <div>
          <img src="/images/appstore.png" alt="App Store" className="image" />
        </div>
        <div>
          <img src="/images/playstore.png" alt="Play Store" className="image" />
        </div>
      </div>
    </div>
  );
};

export default FooterSubscribe;
