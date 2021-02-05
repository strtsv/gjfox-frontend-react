import React from "react";
import Swiper from "swiper";

import i1 from "../../assets/images/home1-01-1920x950.jpg";
import i2 from "../../assets/images/home1-02-1920x950.jpg";
import i3 from "../../assets/images/home1-03-1920x950.jpg";

class Slider extends React.Component {
  componentDidMount() {
    new Swiper(".swiper-container", {
      centeredSlides: true,
      autoplay: {
        delay: 5000,
        disableOnInteraction: false,
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });
  }
  render() {
    return (
      <section
        className="section swiper-container swiper-slider swiper-slider-1"
        data-loop="true"
        data-autoplay={3892}
        data-simulate-touch="false"
      >
        <div className="swiper-wrapper text-center">
          <div
            className="swiper-slide context-dark"
            data-slide-bg={i1}
            style={{
              backgroundImage: "url(" + i1 + ")",
            }}
          >
            <div className="swiper-slide-caption section-md">
              <div className="container">
                <div className="row justify-content-lg-center">
                  <div className="col-lg-8">
                    <h5
                      data-caption-animate="fadeInUp"
                      data-caption-delay={100}
                    >
                      It’s not just love for music
                    </h5>
                    <h1
                      data-caption-animate="fadeInUp"
                      data-caption-delay={200}
                    >
                      It’s My Passion
                    </h1>
                    <div
                      className="button-wrap"
                      data-caption-animate="fadeInUp"
                      data-caption-delay={300}
                    >
                      <a
                        className="button button-modern button-custom-size-1"
                        href="#"
                      >
                        see all events
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="swiper-slide context-dark"
            data-slide-bg={i2}
            style={{
              backgroundImage: "url(" + i2 + ")",
            }}
          >
            <div className="swiper-slide-caption section-md">
              <div className="container">
                <div className="row justify-content-lg-center">
                  <div className="col-lg-8">
                    <h5
                      data-caption-animate="fadeInUp"
                      data-caption-delay={100}
                    >
                      I make music to feel & enjoy
                    </h5>
                    <h1
                      data-caption-animate="fadeInUp"
                      data-caption-delay={200}
                    >
                      Your #1 DJ
                    </h1>
                    <div
                      className="button-wrap"
                      data-caption-animate="fadeInUp"
                      data-caption-delay={300}
                    >
                      <a
                        className="button button-modern button-custom-size-1"
                        href="#"
                      >
                        see all events
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="swiper-slide context-dark"
            data-slide-bg={i3}
            style={{
              backgroundImage: "url(" + i3 + ")",
            }}
          >
            <div className="swiper-slide-caption section-md">
              <div className="container">
                <div className="row justify-content-lg-center">
                  <div className="col-lg-8">
                    <h5
                      data-caption-animate="fadeInUp"
                      data-caption-delay={100}
                    >
                      I introduce new style of djing
                    </h5>
                    <h1
                      data-caption-animate="fadeInUp"
                      data-caption-delay={200}
                    >
                      Top DJing Skills
                    </h1>
                    <div
                      className="button-wrap"
                      data-caption-animate="fadeInUp"
                      data-caption-delay={300}
                    >
                      <a
                        className="button button-modern button-custom-size-1"
                        href="#"
                      >
                        see all events
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {}
        <div className="swiper-pagination" />
      </section>
    );
  }
}

export default Slider;
