import React from "react";
import Image from "next/image";

const ProductCard = ({ product }) => {
  const {
    name,
    price,
    imageUrl1,
    imageUrl2,
    description,
    specialOfferPercentage,
    exclusive,
    size,
    id,
  } = product;

  return (
    <div className="m-4">
      <div key={id}>
        <div className="product-card">
          <div className="product-card-image relative">
            <Image src={imageUrl1} alt={name} width={350} height={500} />
            <Image
              src={imageUrl2}
              alt={name}
              width={125}
              height={175}
              className="absolute mini-image"
            />
            {exclusive && (
              <div className="absolute exclusive ">
                <span
                  className="bg-red-500 text-white p-2 rounded-tr-lg rounded-bl-lg

 "
                >
                  Exclusive
                </span>
              </div>
            )}
            {specialOfferPercentage && (
              <div className="absolute offer ">
                <span className="bg-yellow-300 p-2 rounded-tl-lg rounded-br-lg ">
                  {specialOfferPercentage === "special offer on checkout"
                    ? specialOfferPercentage
                    : `${specialOfferPercentage}% OFF`}
                </span>
              </div>
            )}
          </div>
          <div className="p-4">
            <h1 className="font-semibold text-xl">{name.toUpperCase()}</h1>
            <p className="py-6 text-sm">{description}</p>
            <div className="flex justify-between py-6">
              <div>
                <p className="text-2xl">
                  {price} SAR <span className="text-sm">(Incl. VAT)</span>
                </p>
                <p className="text-sm">Size {size}</p>
              </div>
              <div className="text-green-500">
                <p>
                  <a href="">Visualizer</a>
                </p>
                <p>
                  <a href="">View Product</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
