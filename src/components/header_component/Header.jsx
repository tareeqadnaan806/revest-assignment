import React from "react";

const Header = () => {
  return (
    <div className="container">
      <header className="header">
        <div className="heading flex justify-center items-center">
          <div className="title mr-10 flex items-center justify-center">
            <img src="/images/arabialogo.png" alt="Arabia Logo" />
            <span className="text-2xl ml-2">العربية</span>
          </div>
          <div className="cart flex items-center">
            <i className="fa-solid fa-cart-shopping text-2xl"></i>
            <span className="ml-1 text-xl">Cart</span>
          </div>
        </div>
        <div className="logo flex justify-center items-center">
          <img src="/images/logo.png" alt="Logo" className="image" />
        </div>
      </header>
      <hr />
    </div>
  );
};

export default Header;
