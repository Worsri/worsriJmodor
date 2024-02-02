import React from 'react'
import img1 from "../images/CS Dubey.jpg";
import img2 from "../images/Dr Ajay garg.jpg";
import img3 from "../images/Nandani ji.jpg";
import img4 from "../images/Shrikant Kumar pati.jpg";
import img5 from "../images/Ajay deshpande.jpg";
import img6 from "../images/Prashant kokil.jpg";
import "../css/faculties.css"


function Faculties() {
  return (
    <>
      <div className="container">
        <div className="row">
          <h1 className="text-center ">Our Jewels</h1>
          <div className="col-md-6   text-center">
            {/* card start */}
            <div className=" card mx-auto border-0 " style={{ width: "18rem" }}>
              <img src={img1} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">
                  <a href="http://linkedin.com/in/csdubey">Dr. C. S. Dubey</a>
                </h5>
                <p className="card-text designationFonts">
                  Former Vice Chancellor ,K.R. Mangalam University
                </p>
              </div>
            </div>
            {/* cardEnd */}
          </div>
          <div className="col-md-6   text-center">
            {/* card start */}
            <div className=" card mx-auto border-0" style={{ width: "18rem" }}>
              <img src={img2} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">
                  <a href="http://linkedin.com/in/ajay-garg-5a3357186">
                    Mr. Ajay Garg
                  </a>
                </h5>
                <p className="card-text designationFonts">
                  Honorary Secretary General ,NORMI
                </p>
              </div>
            </div>
            {/* cardEnd */}
          </div>
        </div>
        <div className="row">
          <div className="col-md-6   text-center">
            {/* card start */}
            <div className=" card mx-auto border-0" style={{ width: "18rem" }}>
              <img src={img3} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">
                  <a href="http://linkedin.com/in/csdubey">Dr. Nandini N.</a>
                </h5>
                <p className="card-text designationFonts">
                  Former member EAC,Industry-2,MoEF&CC,Former MBMC, BBMP,
                  GOK,Ex-Chair, BOS, Env. Science, Bangalore Univ.
                </p>
              </div>
            </div>
            {/* cardEnd */}
          </div>
          <div className="col-md-6   text-center">
            {/* card start */}
            <div className=" card mx-auto border-0" style={{ width: "18rem" }}>
              <img src={img4} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">
                  <a href="http://linkedin.com/in/srikant-kumar-pati-a8b83b103">
                    Mr. S. K. Pati
                  </a>
                </h5>
                <p className="card-text designationFonts">
                  Consulting Environmentalist and Advisor- Energy
                  Transition,Decarbonisation and Sustainability
                </p>
              </div>
            </div>
            {/* cardEnd */}
          </div>
        </div>
        <div className="row">
          <div className="col-md-6   text-center">
            {/* card start */}
            <div className=" card mx-auto border-0" style={{ width: "18rem" }}>
              <img src={img5} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">
                  <a href="http://linkedin.com/in/ajayadeshpande">
                    Dr. Ajay Deshpande
                  </a>
                </h5>
                <p className="card-text designationFonts">
                  Adjunct Professor, IIT Bombay Former expert Member (NGT)
                </p>
              </div>
            </div>
            {/* cardEnd */}
          </div>
          <div className="col-md-6   text-center">
            {/* card start */}
            <div className=" card mx-auto border-0" style={{ width: "18rem" }}>
              <img src={img6} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">
                  <a href="http://linkedin.com/in/prashant-kokil-101b1511">
                    Mr. Prashant Kokil
                  </a>
                </h5>
                <p className="card-text designationFonts">
                  Head Corporate Environment and Climate Change, The Tata Power
                  Co Ltd.
                </p>
              </div>
            </div>
            {/* cardEnd */}
          </div>
        </div>
      </div>
    </>
  );
}

export default Faculties