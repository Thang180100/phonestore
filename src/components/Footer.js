import React from 'react';

function Footer() {
  return (
    <footer className="page-footer center-on-small-only">
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-12">
            <div className="social-section text-md-left">
              <ul className="text-center">
                <li>
                  <a className="btn-floating  btn-fb waves-effect waves-light">
                    <i className="fa fa-facebook"></i>
                  </a>
                </li>
                <li>
                  <a className="btn-floating  btn-ins waves-effect waves-light">
                    <i className="fa fa-instagram"></i>
                  </a>
                </li>
                <li>
                  <a className="btn-floating  btn-tw waves-effect waves-light">
                    <i className="fa fa-twitter"></i>
                  </a>
                </li>
                <li>
                  <a className="btn-floating  btn-yt waves-effect waves-light">
                    <i className="fa fa-youtube"></i>
                  </a>
                </li>
                <li>
                  <a className="btn-floating  btn-li waves-effect waves-light">
                    <i className="fa fa-linkedin"></i>
                  </a>
                </li>
                <li>
                  <a className="btn-floating  btn-dribbble waves-effect waves-light">
                    <i className="fa fa-dribbble left"></i>
                  </a>
                </li>
                <li>
                  <a className="btn-floating  btn-pin waves-effect waves-light">
                    <i className="fa fa-pinterest"></i>
                  </a>
                </li>
                <li>
                  <a className="btn-floating  btn-gplus waves-effect waves-light">
                    <i className="fa fa-google-plus"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
