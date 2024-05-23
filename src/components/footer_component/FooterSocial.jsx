import React from "react";

const FooterSocial = () => {
  return (
    <div className="py-4">
      <div className="flex flex-wrap justify-between items-center ">
        <div className="font-bold text-xl">&copy; Jazeera Paints, 2024</div>
        <div className="flex flex-wrap justify-between items-center">
          <div>
            <ul className="flex font-bold text-2xl mx-6">
              <li>Terms</li>
              <li className="mx-6">Policy</li>
              <li>FAQ</li>
            </ul>
          </div>
          <div>
            <ul className="flex flex-wrap social">
              <li>
                <i class="fa-brands fa-facebook-f fa-lg"></i>
              </li>
              <li>
                <i class="fa-brands fa-twitter fa-lg"></i>
              </li>
              <li>
                <i class="fa-brands fa-linkedin-in fa-lg"></i>
              </li>
              <li>
                <i class="fa-brands fa-instagram fa-lg"></i>
              </li>
              <li>
                <i class="fa-brands fa-youtube fa-lg"></i>
              </li>
              <li>
                <i class="fa-brands fa-tiktok fa-lg"></i>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <p className="text-sm">
        Note: The color that appears on the screen may not be the exact color of
        the paint due to the variance in monitor calibration.
      </p>
    </div>
  );
};

export default FooterSocial;
