import React from "react";

const FooterContact = () => {
  return (
    <div className="flex flex-wrap justify-between items-center py-6">
      <div className="mb-4 md:mb-0">
        <div className="text-2xl font-bold">Need help?</div>
        <p>You can reach our support team if you need any assistance.</p>
      </div>
      <div className="flex items-center mb-4 md:mb-0">
        <i
          className="fa-solid fa-envelope fa-2xl mr-2"
          style={{ color: "#008f3e" }}
        ></i>
        <span>help@jazeerapaints.com</span>
      </div>
      <div className="flex items-center">
        <i
          className="fa-solid fa-mobile fa-2xl mr-2"
          style={{ color: "#008f3e" }}
        ></i>
        <span>9200-000-85</span>
      </div>
    </div>
  );
};

export default FooterContact;
