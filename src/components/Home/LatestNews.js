import React from "react";

import i1 from "../../assets/images/post-classic-01-346x260.jpg";
import i2 from "../../assets/images/post-classic-02-346x260.jpg";
import i3 from "../../assets/images/post-classic-03-346x260.jpg";

class LatestNews extends React.Component {
  render() {
    return (
      <section className="section section-xl bg-default text-center">
        <div className="container">
          <h6 className="text-gray-600">from my blog</h6>
          <h2>latest news</h2>
          <div className="row row-125">
            <div className="col-md-6 col-lg-4">
              <article className="post-classic">
                <figure className="post-classic-figure">
                  <a href="#">
                    <img src={i1} alt width={346} height={130} />
                  </a>
                </figure>
                <div className="post-classic-content">
                  <time className="post-classic-time" dateTime="2019-09-19">
                    Sep 19, 2019
                  </time>
                  <h5 className="post-classic-title">
                    <a href="#">
                      teasing the demo of my new track ‘I need you’
                    </a>
                  </h5>
                  <a className="post-classic-link" href="#">
                    read more
                  </a>
                </div>
              </article>
            </div>
            <div className="col-md-6 col-lg-4">
              <article className="post-classic">
                <figure className="post-classic-figure">
                  <a href="#">
                    <img src={i2} alt width={346} height={130} />
                  </a>
                </figure>
                <div className="post-classic-content">
                  <time className="post-classic-time" dateTime="2019-09-19">
                    Sep 19, 2019
                  </time>
                  <h5 className="post-classic-title">
                    <a href="#">Bring your favorite artist to your city!</a>
                  </h5>
                  <a className="post-classic-link" href="#">
                    read more
                  </a>
                </div>
              </article>
            </div>
            <div className="col-md-6 col-lg-4">
              <article className="post-classic">
                <figure className="post-classic-figure">
                  <a href="#">
                    <img src={i3} alt width={346} height={130} />
                  </a>
                </figure>
                <div className="post-classic-content">
                  <time className="post-classic-time" dateTime="2019-09-19">
                    Sep 19, 2019
                  </time>
                  <h5 className="post-classic-title">
                    <a href="#">New single: ‘rave on’ (raverz 2019 anthem)</a>
                  </h5>
                  <a className="post-classic-link" href="#">
                    read more
                  </a>
                </div>
              </article>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default LatestNews;
