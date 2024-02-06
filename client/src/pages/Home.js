import React from 'react'
import imgBg from "../images/utilities/leaveinhandnew.jpeg";
import Cards from "../components/Cards";
import img1 from "../images/utilities/goalsImage.jpeg";
import img2 from "../images/utilities/secondCourse.png";
import img3 from "../images/utilities/envirosuite.jpeg";
import img4 from "../images/utilities/smartFactoryImage.jpeg";
import Button from "react-bootstrap/Button";
import useGeolocation from './useGeolocation'; // Adjust the path based on your file structure
import MapComponent from './MapComponent'; // Adjust the path based on your file structure
 
import "../css/font.css";




function Home() {
  const { currentLatitude, currentLongitude } = useGeolocation();
  const backgd = {
    // border: "2px solid black",
  
  borderRadius:"50%",
  backgroundRepeat: "no-repeat",
    backgroundSize: "auto ",
    // width: "100%",
    height: "50vh"
    
  
  }
  
  return (
    <>
      {/* <div className="container-fluid ">
        <img src={imgBg} alt="" style={backgd} />
      </div> */}
      <div
        className="container my-3 py-3"
        style={{ backgroundColor: "	#B2FFFF" }}
      >
        <h4 className="text-center">About Carbon NORMI the Initiative</h4>
        <p className="text-center " style={{ fontSize: "23px" }}>
          The 'Net Zero Carbon' Course is a ground breaking effort that aims to
          equip participants with the information, skills, and practical tools
          they need to face one of our generation's most pressing challenges:
          constructing a sustainable, net-zero carbon future. The flexible
          program options will allow participants to select the educational
          opportunity that best meets their needs and timetable. This training
          is suited for both participants looking for a more in-depth experience
          and working professionals in top to middle management looking for a
          quick overview.
        </p>
      </div>
      <div className="container text-center">
        <h3>Glimpse of Courses</h3>
        <div className="row d-flex align-items-stretch ">
          <div className="col ">
            <Cards
              imageSrc={img1}
              text={
                "These programs give participants the abilities and information required to meet sustainability targets and achieve carbon neutrality of all disciplines."
              }
              title="LEADERSHIP PROGRAMME FOR NET ZERO CARBON
"
            />
          </div>
          <div className="col ">
            <Cards
              imageSrc={img2}
              text="This course will provide a concise description of net zero as a response to the climate issue and how it may be implemented in organizations. 
"
              title="MANAGEMENT IN NET ZERO CARBON
"
            />
          </div>
          <div className="col ">
            <Cards
              imageSrc={img3}
              text="It lays the groundwork for any organization to establish and implement a successful net zero carbon plan, including the benefits, obstacles, and best practices of lowering carbon footprint and reaching net zero targets.
"
              title="EXECUTIVE PROGRAMME IN NET ZERO CARBON
"
            />
          </div>
          <div className="col ">
            <Cards
              imageSrc={img4}
              text="A methodology for establishing science-based net zero targets. constructing a net zero carbon plan for various organizations and institutes figuring out carbon footprints, and  decarbonization initiatives.
"
              title="INTRODUCTION TO NET ZERO CARBON
"
            />
          </div>
        </div>
      </div>
      <hr className="" />

      <div>
        {/* Display or use currentLatitude and currentLongitude as needed */}
        {currentLatitude && currentLongitude && (
          <p>
            Latitude: {currentLatitude}, Longitude: {currentLongitude}
          </p>
        )}
        {/* Rest of your component code... */}
      </div>
      <Button
        variant="dark"
        href="./contactus"
        style={{ position: "fixed", bottom: "100px", right: "20px" }}
      >
        Contact Us
      </Button>
    </>
  );
}

export default Home