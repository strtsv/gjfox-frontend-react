import React from "react";

class Footer extends React.Component {
  render() {
    return (
      <footer className="section footer-classic bg-default">
        <div className="container">
          <div className="row row-15">
            <div className="col-sm-6">
              <p className="rights">
                <span>DJ Fox</span>
                <span> </span>
                <span>© </span>
                <span className="copyright-year" />
                <span> </span>
                <span>\ </span>All Rights Reserved \ Design by{" "}
                <a href="https://www.templatemonster.com/">TemplateMonster</a>
              </p>
            </div>
            <div className="col-sm-6">
              <div className="footer-contact">
                <a href="contacts.html">
                  <div className="icon novi-icon mdi mdi-email-outline" />
                  Contact Me
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
