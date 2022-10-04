import React, { Fragment } from "react";

function Skills() {
  return (
    <Fragment>
      <div className="col py-3 d-flex align-items-center">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-12 col-sm-12 d-flex align-items-center">
              <div>
                <h1 className="font-big text-red  slide-in-bottom-technology">
                  Tecnologias que utilizadas
                </h1>
                <hr></hr>

                <div className="row my-2">
                  <div className="col-lg-3 col-md-3 py-3 col-sm-4 col-6 d-flex justify-content-center">
                    <img
                      className="technology-image  slide-in-bottom-technology"
                      src="../images/React.png"
                      alt="React"
                    ></img>
                  </div>
                  <div className="col-lg-3 col-md-3 py-3 col-sm-4 col-6 d-flex justify-content-center">
                    <img
                      className="technology-image  slide-in-bottom-technology"
                      src="../images/js.png"
                      alt="Java Script"
                    ></img>
                  </div>
                  <div className="col-lg-3 col-md-3 py-3 col-sm-4 col-6 d-flex justify-content-center">
                    <img
                      className="technology-image  slide-in-bottom-technology"
                      src="../images/html.png"
                      alt="Html"
                    ></img>
                  </div>
                  <div className="col-lg-3 col-md-3 py-3 col-sm-4 col-6 d-flex justify-content-center">
                    <img
                      className="technology-image  slide-in-bottom-technology"
                      src="../images/css.png"
                      alt="Css"
                    ></img>
                  </div>
                  <div className="col-lg-3 col-md-3 py-3 col-sm-4 col-6 d-flex justify-content-center">
                    <img
                      className="technology-image  slide-in-bottom-technology"
                      src="../images/bootstrap.png"
                      alt="Bootstrap"
                    ></img>
                  </div>
                  <div className="col-lg-3 col-md-3 py-3 col-sm-4 col-6 d-flex justify-content-center">
                    <img
                      className="technology-image  slide-in-bottom-technology"
                      src="../images/angular.svg"
                      alt="Angular"
                    ></img>
                  </div>
                  <div className="col-lg-3 col-md-3 py-3 col-sm-4 col-6 d-flex justify-content-center">
                    <img
                      className="technology-image  slide-in-bottom-technology"
                      src="../images/linux.svg"
                      alt="Linux"
                    ></img>
                  </div>
                  <div className="col-lg-3 col-md-3 py-3 col-sm-4 col-6 d-flex justify-content-center">
                    <img
                      className="technology-image  slide-in-bottom-technology"
                      src="../images/asterisk.png"
                      alt="Asterisk"
                    ></img>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-12 col-sm-12 justify-content-right">
              <img
                className="img-fluid"
                src="../images/tec2.png"
                alt="..."
              ></img>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default Skills;
