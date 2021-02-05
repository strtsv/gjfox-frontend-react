import React from "react";
import $ from "jquery";

import i1 from "../../assets/images/events-02-571x313.jpg";
import i2 from "../../assets/images/bg-home1-01-1920x1000.jpg";

class FeaturedEvent extends React.Component {
  componentDidMount() {
    $(".parallax-container").parallax({});
  }
  render() {
    return (
      <section
        className="parallax-container section-lg text-center"
        data-parallax-img={i1}
        data-image-src={i1}
      >
        <div className="parallax-content">
          <div className="container">
            <h6 className="text-gray-600">
              Trident Festival in Duchonka, slovakia - June 26, 2019
            </h6>
            <h2>featured event</h2>
            <div className="row justify-content-center">
              <div className="col-lg-11">
                <div className="post-event">
                  <div
                    className="countdown"
                    data-type="until"
                    data-time="17 Aug 2019 00:00"
                  />
                  <img src={i2} alt width={571} height={156} />
                  <a className="button button-primary button-lg" href="#">
                    buy tickets
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default FeaturedEvent;
