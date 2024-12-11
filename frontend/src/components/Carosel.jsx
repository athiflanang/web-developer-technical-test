import { Carousel } from "@material-tailwind/react";

export default function Carosel() {
  return (
    <>
      <Carousel transition={{ duration: 2 }} className="overflow-hidden">
        <img
          src="https://www.bakmigm.com/cfind/source/thumb/images/banner/promo-hampers-2024/cover_w1440_h500_web-banner-1440-x-500-px_-1.png"
          alt="image 1"
          className="h-42 sm:h-96 w-full object-cover"
        />
        <img
          src="https://www.bakmigm.com/cfind/source/thumb/images/banner/paket-salju-2024/cover_w1440_h500_web-banner_1440x500-100.jpg"
          alt="image 2"
          className="h-42 sm:h-96 w-full object-cover"
        />
        <img
          src="https://www.bakmigm.com/cfind/source/thumb/images/banner/cover_w1440_h500_web-banner-1440-x-500-px-2.png"
          alt="image 3"
          className="h-42 sm:h-96 w-full object-cover"
        />
      </Carousel>
    </>
  );
}
