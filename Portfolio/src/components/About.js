import React, { Fragment } from "react";

function About() {
  return (
    <Fragment>
      <div className="col py-3 d-flex align-items-center about-image">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-12 col-sm-12 d-flex align-items-center">
              <div>
                <h1 className="font-big text-red slide-in-top">Sobre Mi</h1>
                <hr></hr>
                <p className="slide-in-bottom">
                  Desde hace mas de 10 años con experencia en el area IT,
                  <br></br>
                  siempre buscando nuevas tecnologias para aprender a futuro.
                </p>
                <p className="slide-in-bottom">
                  Hace algunos años me desempeño realizando cursos orientados a
                  programación FrontEnd.<br></br>
                </p>
                <p className="slide-in-bottom">
                  Trabajo actualmente como SysAdmin con software de código
                  abierto <br></br>
                  como :{" "}
                  <span className="text-red ls-2">
                    Linux OS, Asterisk, VOIP{" "}
                  </span>
                  <br></br>
                  Tambien tecnologias como:{" "}
                  <span className="text-red ls-2">
                    Cisco Network, Alcatel Lucent, BD's{" "}
                  </span>
                </p>
                <p className="slide-in-bottom">
                  Sin dejar de seguir aprendiendo lenguajes:{" "}
                  <span className="text-red ls-2">
                    JavaScript, React, Angular{" "}
                  </span>
                </p>
              </div>
            </div>
            <div className="col-lg-6 col-md-12 col-sm-12">
              <img
                className="img-fluid"
                src="../images/nomad-amico.png"
                alt="..."
              ></img>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default About;
