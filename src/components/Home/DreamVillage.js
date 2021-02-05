import React from "react";

import i1 from "../../assets/images/home1-05-480x350.jpg";
import i2 from "../../assets/images/home1-06-480x350.jpg";
import i3 from "../../assets/images/home1-07-480x350.jpg";
import i4 from "../../assets/images/home1-08-480x350.jpg";

class DreamVillage extends React.Component {
  render() {
    return (
      <section className="section" data-lightgallery="group">
        <div className="row no-gutters">
          <div className="col-lg-3 col-sm-6">
            <div className="thumbnail-classic">
              <a
                className="thumbnail-classic-figure"
                data-lightgallery="item"
                href="images/image-original-01-1200x800.jpg"
              >
                <img src={i1} alt width={480} height={175} />
              </a>
              <div className="thumbnail-classic-caption">
                <h5 className="thumbnail-classic-title">Dream Village</h5>
                <time className="thumbnail-classic-time" dateTime="2019-09-19">
                  Sep 19, 2019
                </time>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-sm-6">
            <div className="thumbnail-classic">
              <a
                className="thumbnail-classic-figure"
                data-lightgallery="item"
                href="images/image-original-02-1200x800.jpg"
              >
                <img src={i2} alt width={480} height={175} />
              </a>
              <div className="thumbnail-classic-caption">
                <h5 className="thumbnail-classic-title">
                  ULTRA MUSIC FESTIVAL
                </h5>
                <time className="thumbnail-classic-time" dateTime="2019-09-19">
                  Sep 19, 2019
                </time>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-sm-6">
            <div className="thumbnail-classic">
              <a
                className="thumbnail-classic-figure"
                data-lightgallery="item"
                href="images/image-original-03-1200x800.jpg"
              >
                <img src={i3} alt width={480} height={175} />
              </a>
              <div className="thumbnail-classic-caption">
                <h5 className="thumbnail-classic-title">electric Zoo</h5>
                <time className="thumbnail-classic-time" dateTime="2019-09-19">
                  Sep 19, 2019
                </time>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-sm-6">
            <div className="thumbnail-classic">
              <a
                className="thumbnail-classic-figure"
                data-lightgallery="item"
                href="images/image-original-04-1200x800.jpg"
              >
                <img src={i4} alt width={480} height={175} />
              </a>
              <div className="thumbnail-classic-caption">
                <h5 className="thumbnail-classic-title">
                  life in color festival
                </h5>
                <time className="thumbnail-classic-time" dateTime="2019-09-19">
                  Sep 19, 2019
                </time>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default DreamVillage;
