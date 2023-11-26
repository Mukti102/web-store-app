import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Hero1 from "../../assets/hero2.jpg";
import Hero3 from "../../assets/hero3.jpg";
import hero2 from "../../assets/hero1.jpg";
// import Products from "../Products/Products";
function Hero() {
  var settings = {
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <>
      <div className="w-screen sm:py-6 bg-white -translate-y-2 shadow-sm py-3 flex ">
        <div className="sm:w-screen sm:h-96 flex justify-center -translate-x-2 h-max w-screen ">
          <Slider
            {...settings}
            style={{
              width: "80%",
              height: "100%",
              overflow: "hidden",
              // background: "red",
            }}
          >
            <div className="w-1/2 bg-primary h-full border-2">
              <img src={Hero1} alt="habar" className="w-full h-full " />
            </div>
            <div className="w-1/2 bg-primary h-full overflow-hidden ">
              <img src={Hero3} alt="habar" className="w-full h-full" />
            </div>
            <div className="w-1/2 bg-primary h-full overflow-hidden ">
              <img src={hero2} alt="habar" className="w-full h-full" />
            </div>
          </Slider>
        </div>
      </div>
      {/* <Products /> */}
    </>
  );
}

export default Hero;
