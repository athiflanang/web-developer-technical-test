export default function Carosel() {
  return (
    <>
      <div className="carousel w-full">
        <div id="item1" className="carousel-item w-full">
          <img
            src="https://www.bakmigm.com/cfind/source/thumb/images/banner/promo-hampers-2024/cover_w1440_h500_web-banner-1440-x-500-px_-1.png"
            className="w-full"
          />
        </div>
        <div id="item2" className="carousel-item w-full">
          <img
            src="https://www.bakmigm.com/cfind/source/thumb/images/banner/paket-salju-2024/cover_w1440_h500_web-banner_1440x500-100.jpg"
            className="w-full"
          />
        </div>
        <div id="item3" className="carousel-item w-full">
          <img
            src="https://www.bakmigm.com/cfind/source/thumb/images/banner/cover_w1440_h500_web-banner-1440-x-500-px-2.png"
            className="w-full"
          />
        </div>
      </div>
      <div className="flex w-full justify-center gap-2 py-2">
        <a href="#item1" className="btn btn-xs btn-circle btn-outline"></a>
        <a href="#item2" className="btn btn-xs btn-circle btn-outline"></a>
        <a href="#item3" className="btn btn-xs btn-circle btn-outline"></a>
      </div>
    </>
  );
}
