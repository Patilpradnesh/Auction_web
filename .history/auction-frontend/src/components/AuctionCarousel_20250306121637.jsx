import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const AuctionCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

const auctionItems = [
    {
        id: 1,
        url: "src/assets/auctioncar.jpg",
        title: "Luxury Car Auction",
        description: "Bid on high-end luxury cars!",
    },
    {
        id: 2,
        url: "src/assets/Antique.jpg",
        title: "Rare Antique Collection",
        description: "Exclusive antique items up for auction.",
    },
    {
        id: 3,
        url: "src/assets/realestat.jpeg",
        title: "Real Estate Deals",
        description: "Premium real estate properties available.",
    },
];

  return (
    <div className="max-w-4xl mx-auto p-4">
      {/* <Slider {...settings}>
        {auctionItems.map((item) => (
          <div key={item.id} className="relative">
            <img src={item.image} alt={item.title} className="w-full rounded-lg" />
            <div className="absolute bottom-4 left-4 bg-black bg-opacity-50 text-white p-2 rounded-lg">
              <h2 className="text-lg font-bold">{item.title}</h2>
              <p className="text-sm">{item.description}</p>
            </div>
          </div>
        ))}
      </Slider> */}

<div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
  <ol class="carousel-indicators">
    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
  </ol>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img class="d-block w-100" src="../assets/" alt="First slide"/>
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src="..." alt="Second slide"/>
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src="..." alt="Third slide"/>
    </div>
  </div>
  <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div>


    </div>
  );
};

export default AuctionCarousel;
