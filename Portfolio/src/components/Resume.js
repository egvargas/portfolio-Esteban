import React, { Fragment } from "react";
import { SiLinkedin } from "react-icons/si";

function Resume() {
  return (
    <Fragment>
      <div className="col p-4">
        <div className="p-4 bg-dark slide-in-top">
          <div className="row">
            <div className="col-6">
              <h2 className="font-big text-red  slide-in-bottom-technology">
                Esteban Vargas
              </h2>
            </div>
          </div>
          <hr></hr>
          <div className="row">
            <div className="col-md-6">
              <h4 className="ff-jose ls-2">Experiencia Laboral</h4>
              <ul>
                <li>
                  <h4 className="ff-jose my-1 text-red">
                    Especialista en Redes y Telefonía IP
                  </h4>
                  <h6 className="blue-label px-2 py-1">
                    Jun 2019 - Actualidad
                  </h6>
                  <p className="m-0">Banco Credicoop · Full-time</p>
                </li>
                <li>
                  <h4 className="ff-jose my-1 text-red">Tecnico en VOIP</h4>
                  <h6 className="blue-label px-2 py-1">Nov 2013 - Jun 2019</h6>
                  <p className="m-0">Banco Credicoop · Full-time</p>
                </li>
              </ul>
            </div>

            <div className="col-md-6">
              <h4 className="ff-jose ls-2">Educacion</h4>
              <ul>
                <li>
                  <h4 className="ff-jose my-1 text-red">Curso Angular</h4>
                  <h6 className="blue-label px-2 py-1">Oct 2022 - Actual</h6>
                  <p className="m-0">CoderHouse</p>
                </li>
                <li>
                  <h4 className="ff-jose my-1 text-red">Curso JavaScript</h4>
                  <h6 className="blue-label px-2 py-1">Ago 2022 - Oct 2022</h6>
                  <p className="m-0">CoderHouse</p>
                </li>
                <li>
                  <h4 className="ff-jose my-1 text-red">
                    Diplomatura en programación web full stack con React JS
                  </h4>
                  <h6 className="blue-label px-2 py-1">Sept 2021 - Feb 2022</h6>
                  <p className="m-0">UTN</p>
                </li>
                <li>
                  <h4 className="ff-jose my-1 text-red">
                    Configuring Cisco NX-OS Switches and Fabrics in the Data
                    Center
                  </h4>
                  <h6 className="blue-label px-2 py-1">May 2020</h6>
                  <p className="m-0">Cisco Networking Academy</p>
                </li>
                <li>
                  <h4 className="ff-jose my-1 text-red">Carrera Linux</h4>
                  <h6 className="blue-label px-2 py-1">Mar 2017 - Feb 2018</h6>
                  <p className="m-0">Education IT</p>
                </li>
                <li>
                  <h4 className="ff-jose my-1 text-red">Cisco CCNA</h4>
                  <h6 className="blue-label px-2 py-1">2010 - 2012</h6>
                  <p className="m-0">Cisco Networking Academy</p>
                </li>
              </ul>
            </div>
          </div>

          <hr></hr>

          <div className="row">
            <div className="col-md-6">
              <h4 className="ff-jose ls-2">Perfil linkedin</h4>
              <h1>
                <a
                  href="https://www.linkedin.com/in/estebangvargas/"
                  target="/blank"
                  className="text-white text-decoration-none mx-2"
                >
                  <SiLinkedin className="zoom-on-hover" />
                </a>
              </h1>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default Resume;
