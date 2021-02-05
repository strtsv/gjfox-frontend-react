import React from "react";
import $ from "jquery";

import i from "../../assets/images/bg-footer-1920x1285.jpg";

class Map extends React.Component {
  componentDidMount() {
    $(".parallax-container").parallax({});
  }
  render() {
    return (
      <section
        className="parallax-container parallax-overlay-01"
        data-parallax-img={i}
        data-image-src={i}
      >
        <div className="parallax-content">
          <div className="section-sm prefooter-custom">
            <div className="container">
              <div className="row row-30">
                <div className="col-lg-6">
                  <div
                    className="google-map-container google-map-container-custom-1"
                    data-center="new york, USA"
                    data-zoom={5}
                    data-styles="[]"
                  >
                    <div className="google-map" />
                    <ul className="google-map-markers">
                      <li
                        data-location="Bayfront Park, Miami, USA"
                        data-description="ULTRA MUSIC FESTIVAL"
                        data-icon="images/gmap_marker-1.png"
                        data-icon-active="images/gmap_marker-1.png"
                      />
                      <li
                        data-location="Brooklyn, New York, United States"
                        data-description="CLUB CULTURAL"
                        data-icon="images/gmap_marker-2.png"
                        data-icon-active="images/gmap_marker-2.png"
                      />
                      <li
                        data-location="Hamilton Township Pennsylvania, United States"
                        data-description="A summer story"
                        data-icon="images/gmap_marker-3.png"
                        data-icon-active="images/gmap_marker-3.png"
                      />
                      <li
                        data-location="Montgomery Veterans Park / Arboretum, Harlingen Road, United States"
                        data-description="EXPO CENTER TRENciN"
                        data-icon="images/gmap_marker-4.png"
                        data-icon-active="images/gmap_marker-4.png"
                      />
                      <li
                        data-location="West Milford New Jersey, USA"
                        data-description="WKND FESTIVAL BALTICS"
                        data-icon="images/gmap_marker-5.png"
                        data-icon-active="images/gmap_marker-5.png"
                      />
                    </ul>
                  </div>
                </div>
                <div className="col-lg-6">
                  <h3>tour dates</h3>
                  <div className="box-event-wrap scroll-wrap">
                    <div className="box-event novi-bg">
                      <div className="box-event-date-wrap">
                        <h3 className="box-event-date-day">25</h3>
                        <p className="box-event-date-month">feb</p>
                      </div>
                      <div className="box-event-text-wrap">
                        <h5 className="box-event-text-title">
                          <a href="#">ULTRA MUSIC FESTIVAL</a>
                        </h5>
                        <ul className="box-event-text-location">
                          <li>Miami</li>
                          <li>USA</li>
                        </ul>
                      </div>
                      <div className="box-event-button-wrap">
                        <a className="button button-outline button-sm" href="#">
                          buy tickets
                        </a>
                      </div>
                    </div>
                    <div className="box-event novi-bg">
                      <div className="box-event-date-wrap">
                        <h3 className="box-event-date-day">12</h3>
                        <p className="box-event-date-month">mar</p>
                      </div>
                      <div className="box-event-text-wrap">
                        <h5 className="box-event-text-title">
                          <a href="#">edc orlando</a>
                        </h5>
                        <ul className="box-event-text-location">
                          <li>Tinkler Field</li>
                          <li>Orlando</li>
                          <li>USA</li>
                        </ul>
                      </div>
                      <div className="box-event-button-wrap">
                        <a className="button button-outline button-sm" href="#">
                          buy tickets
                        </a>
                      </div>
                    </div>
                    <div className="box-event novi-bg">
                      <div className="box-event-date-wrap">
                        <h3 className="box-event-date-day">24</h3>
                        <p className="box-event-date-month">apr</p>
                      </div>
                      <div className="box-event-text-wrap">
                        <h5 className="box-event-text-title">
                          <a href="#">Electric zoo</a>
                        </h5>
                        <ul className="box-event-text-location">
                          <li>Randall’s Island Park</li>
                          <li>New York</li>
                          <li>USA</li>
                        </ul>
                      </div>
                      <div className="box-event-button-wrap">
                        <a className="button button-outline button-sm" href="#">
                          buy tickets
                        </a>
                      </div>
                    </div>
                    <div className="box-event novi-bg">
                      <div className="box-event-date-wrap">
                        <h3 className="box-event-date-day">17</h3>
                        <p className="box-event-date-month">jul</p>
                      </div>
                      <div className="box-event-text-wrap">
                        <h5 className="box-event-text-title">
                          <a href="#">Nocturnal Wonderland</a>
                        </h5>
                        <ul className="box-event-text-location">
                          <li>Glen Helen National Park</li>
                          <li>USA</li>
                        </ul>
                      </div>
                      <div className="box-event-button-wrap">
                        <a className="button button-outline button-sm" href="#">
                          buy tickets
                        </a>
                      </div>
                    </div>
                    <div className="box-event novi-bg">
                      <div className="box-event-date-wrap">
                        <h3 className="box-event-date-day">18</h3>
                        <p className="box-event-date-month">aug</p>
                      </div>
                      <div className="box-event-text-wrap">
                        <h5 className="box-event-text-title">
                          <a href="#">Coachella</a>
                        </h5>
                        <ul className="box-event-text-location">
                          <li>Empire Polo Club</li>
                          <li>Indio</li>
                          <li>USA</li>
                        </ul>
                      </div>
                      <div className="box-event-button-wrap">
                        <a className="button button-outline button-sm" href="#">
                          buy tickets
                        </a>
                      </div>
                    </div>
                    <div className="box-event novi-bg">
                      <div className="box-event-date-wrap">
                        <h3 className="box-event-date-day">12</h3>
                        <p className="box-event-date-month">OCT</p>
                      </div>
                      <div className="box-event-text-wrap">
                        <h5 className="box-event-text-title">
                          <a href="#">Let It Roll</a>
                        </h5>
                        <ul className="box-event-text-location">
                          <li>Milovice</li>
                          <li>Czech Republic</li>
                        </ul>
                      </div>
                      <div className="box-event-button-wrap">
                        <a className="button button-outline button-sm" href="#">
                          buy tickets
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Map;
