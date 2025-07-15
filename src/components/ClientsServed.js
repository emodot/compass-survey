import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { ReactComponent as ActiveNext } from "assets/icons/carousel-next-arrow-active.svg";
// import { ReactComponent as ActivePrev } from "assets/icons/carousel-prev-arrow-active.svg";
// import { ReactComponent as DisabledNext } from "assets/icons/carousel-next-arrow-disabled.svg";
import { ReactComponent as DisabledPrev } from "assets/icons/carousel-prev-arrow-disabled2.svg";
import ExonMobile from "assets/images/clients/exon-mobile.png";
import GreenEnergy from "assets/images/clients/green-energy.png";
import MarinePlatform from "assets/images/clients/marine-platform.png";
import Mock from "assets/images/clients/mock-1.png";
import ShelfDrilling from "assets/images/clients/shelf-drilling.png";
import Total from "assets/images/clients/total.png";

const ClientsServed = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2,
    },
  };

  const clientList = [
    {
      title: "Exon",
      image: ExonMobile,
    },
    {
      title: "Green Energy",
      image: GreenEnergy,
    },
    {
      title: "Marine Platform",
      image: MarinePlatform,
    },
    {
      title: "Mock",
      image: Mock,
    },
    {
      title: "Shelf Drilling",
      image: ShelfDrilling,
    },
    {
      title: "Total",
      image: Total,
    },
  ];

  const CustomButtonGroupAsArrows = ({
    next,
    previous,
    goToSlide,
    ...rest
  }) => {
    const {
      carouselState: { currentSlide },
    } = rest;
    return (
      <div className="absolute top-[0rem] right-[1rem] flex space-x-1">
        <DisabledPrev
          className={currentSlide === 0 ? "opacity-25" : ""}
          onClick={() => previous()}
        />
        <ActiveNext
          className={currentSlide === 2 ? "opacity-25" : ""}
          onClick={() => next()}
        />
      </div>
    );
  };

  return (
    <div className="max-w-[1300px] m-auto px-[2rem] py-[110px]">
      <div className="relative">
        <h1 className="font-obviously_m text-[24px] text-center">
          Some Clients we’ve Served
        </h1>
        <div className="">
          <Carousel
            additionalTransfrom={0}
            arrows={false}
            autoPlay={true}
            autoPlaySpeed={3000}
            centerMode={false}
            className=""
            containerClass="container"
            customButtonGroup={<CustomButtonGroupAsArrows />}
            dotListClass=""
            draggable
            focusOnSelect={false}
            infinite
            itemClass=""
            keyBoardControl
            minimumTouchDrag={80}
            pauseOnHover
            renderArrowsWhenDisabled={false}
            renderButtonGroupOutside
            renderDotsOutside={false}
            responsive={responsive}
            rewind={false}
            rewindWithAnimation={false}
            rtl={false}
            shouldResetAutoplay
            showDots={false}
            sliderClass=""
            slidesToSlide={1}
            swipeable
          >
            {clientList.map((item, index) => (
              <div key={index} className="pt-[3rem] px-[1rem]">
                <img src={item.image} alt={item.title} className="h-[70px]" />
              </div>
            ))}
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default ClientsServed;
