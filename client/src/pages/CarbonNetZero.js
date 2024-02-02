import React from 'react';
import Cards from '../components/Cards';
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

import imgc1 from "../images/utilities/secondCourse.png";

function CarbonNetZero() {

    const brochure =
      "https://drive.google.com/file/d/1Mfa8f0qBJn9kIbRVOLPC7EIgPoysR7xL/view?usp=drive_link";
  return (
    <>
      <div className="container">
        <div className="row justify-content-around">
          {/* <div className="col-md-6 "> */}
          {/* <Cards 
            text="Scheduled date : 14/02/2024"
            title="Management in Net Zero Carbon"
                      buttonText="Download Brochure ..."
                     
          /> */}
          {/* Cardstart */}
          {/* /////////////////////////////////////////////////////////////////////////////////////////////////// */}
          <Card style={{ width: "18rem", border: "none" }}>
            {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
            <Card.Body>
              <Card.Title>Leadership Programme for Net Zero Carbon</Card.Title>
              <Card.Text>Schduled date : 14/02/2024</Card.Text>
              <Button variant="primary" href={brochure}>
                Download Brochure ...
              </Button>
            </Card.Body>
          </Card>
          {/* CardEnd */}
          <Card style={{ width: "18rem", border: "none" }}>
            {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
            <Card.Body>
              <Card.Title> Management in Net Zero Carbon</Card.Title>
              <Card.Text>Schduled date : 14/02/2024</Card.Text>
              <Button variant="primary" href={brochure}>
                Download Brochure ...
              </Button>
            </Card.Body>
          </Card>
        </div>
        <div className="row justify-content-around">
          {/* <div className="col-md-6 "> */}
          <Card style={{ width: "18rem", border: "none" }}>
            {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
            <Card.Body>
              <Card.Title>Executive Programme In Net Zero Carbon</Card.Title>
              <Card.Text>Schduled date : 14/02/2024</Card.Text>
              <Button variant="primary" href={brochure}>
                Download Brochure ...
              </Button>
            </Card.Body>
          </Card>
          {/* </div> */}
          {/* <div className="col-md-6"> */}
          <Card style={{ width: "18rem", border: "none" }}>
            {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
            <Card.Body>
              <Card.Title> Introduction to Net Zero Carbon</Card.Title>
              <Card.Text>Scheduled date : 14/02/2024</Card.Text>
              <Button href={brochure} variant="primary">
                Download Brochure ...
              </Button>
            </Card.Body>
          </Card>
          {/* </div> */}
        </div>
      </div>
      <div className="row offset-5">
        <Button
          href="./registration"
          className="w-25 mt-5 "
          size="md"
          variant="primary"
        >
          Apply Now
        </Button>
      </div>
    </>
  );
}

export default CarbonNetZero