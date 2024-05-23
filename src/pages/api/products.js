export default function handler(req, res) {
  const products = [
    {
      id: 1,
      name: "Product 1",
      price: 11.5,
      imageUrl1: "/images/bgimg1.png",
      imageUrl2: "/images/img1.png",
      description:
        "A 30ml paint can that comes in a range of colors, designed to test the color at home before purchasing.",
      specialOfferPercentage: "10",
      exclusive: false,
      size: "1L",
    },
    {
      id: 2,
      name: "Product 2",
      price: 20.5,
      imageUrl1: "/images/bgimg2.png",
      imageUrl2: "/images/img2.png",
      description:
        "A 30ml paint can that comes in a range of colors, designed to test the color at home before purchasing.",
      specialOfferPercentage: "20",
      exclusive: true,
      size: "2L",
    },
    {
      id: 3,
      name: "Product 3",
      price: "50",
      imageUrl1: "/images/bgimg3.png",
      imageUrl2: "/images/img1.png",
      description:
        "A 30ml paint can that comes in a range of colors, designed to test the color at home before purchasing.",
      specialOfferPercentage: "special offer on checkout",
      exclusive: false,
      size: "0.5L",
    },
    {
      id: 4,
      name: "Product 4",
      price: 40.5,
      imageUrl1: "/images/bgimg4.png",
      imageUrl2: "/images/img1.png",
      description:
        "A 30ml paint can that comes in a range of colors, designed to test the color at home before purchasing.",
      specialOfferPercentage: "10",
      exclusive: true,
      size: "1.5L",
    },
    {
      id: 5,
      name: "Product 5",
      price: 25,
      imageUrl1: "/images/bgimg5.png",
      imageUrl2: "/images/img5.png",
      description:
        "A 30ml paint can that comes in a range of colors, designed to test the color at home before purchasing.",
      specialOfferPercentage: 10,
      exclusive: false,
      size: "3L",
    },
    {
      id: 6,
      name: "Product 6",
      price: 35,
      imageUrl1: "/images/bgimg6.png",
      imageUrl2: "/images/img6.png",
      description:
        "A 30ml paint can that comes in a range of colors, designed to test the color at home before purchasing.",
      specialOfferPercentage: 10,
      exclusive: true,
      size: "2.5L",
    },
  ];

  res.status(200).json(products);
}
