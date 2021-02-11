import React from "react";

import i1 from "../../assets/images/video-01-140x81.jpg";
import i2 from "../../assets/images/video-02-140x81.jpg";
import i3 from "../../assets/images/video-03-140x81.jpg";
import i4 from "../../assets/images/video-04-140x81.jpg";
import i5 from "../../assets/images/video-05-140x81.jpg";

class RecentVideos extends React.Component {
  render() {
    return (
      <section className="section section-lg bg-default text-center">
        <div className="container">
          <h6 className="text-gray-600">
            latest videos from me and my colleagues
          </h6>
          <h2>recent videos</h2>
          {}
          <div className="tabs-custom tabs-vertical tabs-video" id="tabs-2">
            {}
            <div className="tab-content">
              <div className="tab-pane fade show active" id="tabs-2-1">
                <div className="entry-video embed-responsive embed-responsive-16by9">
                  <iframe
                    width={886}
                    height={668}
                    src="//www.youtube.com/embed/4gRjnaitguQ"
                    allowFullScreen
                  />
                </div>
              </div>
              <div className="tab-pane fade" id="tabs-2-2">
                <div className="entry-video embed-responsive embed-responsive-16by9">
                  <iframe
                    width={886}
                    height={668}
                    src="//www.youtube.com/embed/mfMR-URQl80"
                    allowFullScreen
                  />
                </div>
              </div>
              <div className="tab-pane fade" id="tabs-2-3">
                <div className="entry-video embed-responsive embed-responsive-16by9">
                  <iframe
                    width={886}
                    height={668}
                    src="//www.youtube.com/embed/xweHsBLcqp4"
                    allowFullScreen
                  />
                </div>
              </div>
              <div className="tab-pane fade" id="tabs-2-4">
                <div className="entry-video embed-responsive embed-responsive-16by9">
                  <iframe
                    width={886}
                    height={668}
                    src="//www.youtube.com/embed/V3pPMUmIxAc"
                    allowFullScreen
                  />
                </div>
              </div>
              <div className="tab-pane fade" id="tabs-2-5">
                <div className="entry-video embed-responsive embed-responsive-16by9">
                  <iframe
                    width={886}
                    height={668}
                    src="//www.youtube.com/embed/N1DEOCUujUg"
                    allowFullScreen
                  />
                </div>
              </div>
            </div>
            <div className="scroll-wrap">
              {}
              <ul className="nav nav-tabs">
                <li className="nav-item" role="presentation">
                  <a
                    className="nav-link active"
                    href="#tabs-2-1"
                    data-toggle="tab"
                  >
                    <div className="nav-video">
                      <figure className="nav-video-figure">
                        <img src={i1} alt width={140} height={40} />
                      </figure>
                      <h6 className="nav-video-title">
                        Armin van Buuren Live at Tomorrowland 2015
                      </h6>
                    </div>
                  </a>
                </li>
                <li className="nav-item" role="presentation">
                  <a className="nav-link" href="#tabs-2-2" data-toggle="tab">
                    <div className="nav-video">
                      <figure className="nav-video-figure">
                        <img src={i2} alt width={140} height={40} />
                      </figure>
                      <h6 className="nav-video-title">
                        Juicy M - Live at MEO Sudoeste Festival
                      </h6>
                    </div>
                  </a>
                </li>
                <li className="nav-item" role="presentation">
                  <a className="nav-link" href="#tabs-2-3" data-toggle="tab">
                    <div className="nav-video">
                      <figure className="nav-video-figure">
                        <img src={i3} alt width={140} height={40} />
                      </figure>
                      <h6 className="nav-video-title">
                        Armin van Buuren feat. Angel Taylor - Make It Right
                      </h6>
                    </div>
                  </a>
                </li>
                <li className="nav-item" role="presentation">
                  <a className="nav-link" href="#tabs-2-4" data-toggle="tab">
                    <div className="nav-video">
                      <figure className="nav-video-figure">
                        <img src={i4} alt width={140} height={40} />
                      </figure>
                      <h6 className="nav-video-title">
                        Armin Only crew taking over Sydney! Armin Only VLOG
                      </h6>
                    </div>
                  </a>
                </li>
                <li className="nav-item" role="presentation">
                  <a className="nav-link" href="#tabs-2-5" data-toggle="tab">
                    <div className="nav-video">
                      <figure className="nav-video-figure">
                        <img src={i5} alt width={140} height={40} />
                      </figure>
                      <h6 className="nav-video-title">
                        Armin Only crew taking over San Francisco!
                      </h6>
                    </div>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default RecentVideos;
