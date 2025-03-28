"use client";

const HeroBannerTwo = () => {
  return (
    <div className="it-slider-2-area it-slider-2-ovarlay it-slider-2-height p-relative">
      <div
        className="it-slider-2-bg"
        style={{
          backgroundImage: `url('/assets/img/home-2/slider/slider-bg.webp')`,
        }}
      ></div>
      <div className="container">
        <div className="row">
          <div className="col-xl-12">
            <div className="it-slider-2-content-wrap z-index-5 d-flex justify-content-center">
              <div className="it-slider-2-text" style={{ overflowX: "hidden" }}>
                <h3
                  className="it-slider-title mb-20 text-center"
                  // data-aos="fade-up"
                  // data-aos-duration="1000"
                >
                  One Agency, <br /> Endless Possibilities
                </h3>

                {/* Normal buttons for larger screens */}
                <div className="d-none d-md-flex justify-content-center flex-wrap gap-3">
                  {[
                    "Travel & Tour",
                    "Flight ticketing",
                    "Recruitment & HR solutions",
                    "General contractor",
                  ].map((text, index) => (
                    <button
                      key={index}
                      className="it-btn-primary d-flex align-items-center gap-2"
                    >
                      {text} <i className="fa-solid fa-arrow-right"></i>
                    </button>
                  ))}
                </div>

                {/* Horizontal scroll for mobile */}
                <div className="d-md-none horizontal-scroll-container">
                  {[
                    "Travel & Tour",
                    "Flight ticketing",
                    "Recruitment & HR solutions",
                    "General contractor",
                  ].map((text, index) => (
                    <button key={index} className="it-btn-primary scroll-item">
                      {text} <i className="fa-solid fa-arrow-right"></i>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroBannerTwo;
