import React from "react";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../css/input.css"
function Registration() {
  const [registrationForm, setRegistrationForm] = useState({
    name: "",
    cno: "",
    age: "",
    educationalQualification: "", // Assuming you want to capture the selected radio button value
    org: "",
    occupation: "",
    designation: "",
    emailid: "",
    course: "",

    
    profileImage: null, // To store the selected file
    location: "", // Default location value
  });

  const navigate = useNavigate();

  const handleInput = (e) => {
    const { name, value} = e.target;
    setRegistrationForm((prev) => {
      return { ...prev, [name]: value };
    })
  };
  const handleSubmit = (e) => {
    e.preventDefault();
  

   // Append all form data to the formData object
   

    axios.post("http://localhost:5000/registration", registrationForm)
      .then((response) => {
        if (response.data) {
          
          navigate("/login");
        }
        console.log(response);
        // res.redirect("/home");

      })
      .catch((error) => {
        // eslint-disable-next-line no-undef
        console.log("Error in Axios request:",error);
      });
  };

  return (
    <div
      className="col-md-7 offset-md-3  mb-3 box-shadow pt-3"
      style={{ backgroundColor: " #e6ffff", borderRadius: "23px" }}
    >
      <h3 className="col-md-4 offset-md-5 mb-5">Registration</h3>
      <form
        className="p-2"
        action="POST"
        encType="multipart/form-data"
        onSubmit={handleSubmit}
      >
        {/* <h3>Name:</h3> */}
        <div className="row">
          <div className="col-md-3 text-left pt-2">
            <h4>
              <label className="" htmlFor="name">
                <span className="label ">Name :</span>
              </label>
            </h4>
          </div>
          <div className="col">
            <input
              type="text"
              className="form-control border-bottom border-dark  border-3 "
              name="name"
              style={{
                border: "0px",
                borderRadius: "0px",
                backgroundColor: "#e6ffff",
              }}
              placeholder=""
              onChange={handleInput}
              // value={registrationForm.name}
            />
          </div>
        </div>
        {/* Nameclose */}
        {/* <h3>Contact No:</h3>
        <input type="tel" name="cno" onChange={handleInput} />
        <h3>Age:</h3> */}
        {/* Contact No  */}
        {/* start /*---------------------------------------------------------------- */}
        <div className="row">
          <div className="col-md-3 text-left pt-2">
            <h4>
              <label className="" htmlFor="cno">
                <span className="label ">Contact No :</span>
              </label>
            </h4>
          </div>
          <div className="col">
            <input
              type="text"
              className="form-control border-bottom border-dark  border-3 "
              name="cno"
              // value={registrationForm.ano}
              style={{
                border: "0px",
                borderRadius: "0px",
                backgroundColor: "#e6ffff",
              }}
              placeholder=""
              onChange={handleInput}
            />
          </div>
        </div>

        {/* end /*---------------------------------------------------------------- */}
        {/* /*---------------------------------------------------------------- */}
        <div className="row">
          <div className="col-md-3 text-left pt-2">
            <h4>
              <label className="" htmlFor="age"></label>
              <span className="label ">Age : </span>
            </h4>
          </div>
          <div className="col">
            <input
              type="text"
              className="form-control border-bottom border-dark  border-3 "
              name="age"
              style={{
                border: "0px",
                borderRadius: "0px",
                backgroundColor: "#e6ffff",
              }}
              placeholder=""
              onChange={handleInput}
              // value={registrationForm.age}
            />
          </div>
        </div>
        

        {/* /*---------------------------------------------------------------- */}
        <div className="row">
          <div className="col-3 text-left pt-2">
            <h4>
              <label htmlFor="educationalQualification">
                <span className="label ">
                  
                  Educational Qualification
                </span>
              </label>
            </h4>
          </div>
          <div className="col-9 pt-4">
            <input
              type="text"
              className="form-control border-bottom border-dark  border-3 "
              name="educationalQualification"
              id="educationalQualification"
              style={{
                border: "0px",
                borderRadius: "0px",
                backgroundColor: "#e6ffff",
              }}
              placeholder=""
              onChange={handleInput}
            />
          </div>
        </div>

        {/* /*---------------------------------------------------------------- */}
        {/* /*---------------------------------------------------------------- */}
        <div className="row">
          <div className="col-3 text-left pt-2">
            <h4>
              <label htmlFor="org">
                <span className="label ">
                  Organization/
                  <br />
                  Institute
                </span>
              </label>
            </h4>
          </div>
          <div className="col-9 pt-4">
            <input
              type="text"
              className="form-control border-bottom border-dark  border-3 "
              name="org"
              id="org"
              style={{
                border: "0px",
                borderRadius: "0px",
                backgroundColor: "#e6ffff",
              }}
              placeholder=""
              onChange={handleInput}
            />
          </div>
        </div>

        {/* /*---------------------------------------------------------------- */}

        {/* /*---------------------------------------------------------------- */}
        <div className="row">
          <div className="col-md-3 text-left pt-2 mx-auto">
            <h4>
              <label className="" htmlFor="occupation">
                <span className="label ">Occupation :</span>
              </label>
            </h4>
          </div>
          <div className="col">
            <input
              type="text"
              className="form-control border-bottom border-dark  border-3 "
              name="occupation"
              id="occupation"
              style={{
                border: "0px",
                borderRadius: "0px",
                backgroundColor: "#e6ffff",
              }}
              placeholder=""
              onChange={handleInput}
            />
          </div>
        </div>
        {/* /*---------------------------------------------------------------- */}
        {/* /*---------------------------------------------------------------- */}
        <div className="row">
          <div className="col-md-3 text-left pt-2 mx-auto">
            <h4>
              <label className="" htmlFor="designation">
                <span className="label ">Designation :</span>
              </label>
            </h4>
          </div>
          <div className="col">
            <input
              type="text"
              className="form-control border-bottom border-dark  border-3 "
              name="designation"
              style={{
                border: "0px",
                borderRadius: "0px",
                backgroundColor: "#e6ffff",
              }}
              placeholder=""
              onChange={handleInput}
            />
          </div>
        </div>
        {/* /*---------------------------------------------------------------- */}
        {/* /*---------------------------------------------------------------- */}
        <div className="row">
          <div className="col-md-3 text-left pt-2 mx-auto">
            <h4>
              <label className="" htmlFor="emailid">
                <span className="label ">Email Id :</span>
              </label>
            </h4>
          </div>
          <div className="col">
            <input
              type="text"
              className="form-control border-bottom border-dark  border-3 "
              name="emailid"
              style={{
                border: "0px",
                borderRadius: "0px",
                backgroundColor: "#e6ffff",
              }}
              placeholder=""
              onChange={handleInput}
            />
          </div>
        </div>
        {/* /*---------------------------------------------------------------- */}
        {/* /*---------------------------------------------------------------- */}
        <div className="row py-2">
          <div className="col-md-3 text-left pt-2">
            <h4>
              <label className="" htmlFor="course">
                <span className="label">Select Course</span>
              </label>
            </h4>
          </div>
          <select className="col form-select pt-2 mx-3" onChange={handleInput} name="course">
            <option value="notselected" selected>--Select--</option>
            <option value="lpnzc">
              Leadership Programme for Net Zero Carbon
            </option>
            <option value="mnzc">Management in Net Zero Carbon</option>
            <option value="epnzc">
              Executive Programme In Net Zero Carbon
            </option>
            <option value="inzc">Introduction to Net Zero Carbon</option>
          </select>
        </div>
        {/* /*---------------------------------------------------------------- */}

        {/* /*---------------------------------------------------------------- */}
        {/* <div className="row">
          <div className="col-md-3 text-left pt-2">
            <h4>
              <label className="" htmlFor="que1">
                <span className="label ">
                  Why do you want join this course ?
                </span>
              </label>
            </h4>
          </div>
          <div className="col ps-4">
            <textarea name="que1" id="que1" cols="83" rows="2"></textarea>
          </div>
        </div> */}
        {/* /*---------------------------------------------------------------- */}
        {/* /*---------------------------------------------------------------- */}
        {/* <div className="row">
          <div className="col-md-3 text-left pt-2 mx-auto">
            <h4>
              <label className="" htmlFor="que2">
                <span className="label ">
                  How did you know about this course ?
                </span>
              </label>
            </h4>
          </div>
          <div className="col">
            <input
              type="text"
              className="form-control border-bottom border-dark  border-3 pt-5 "
              name="que2"
              style={{
                border: "0px",
                borderRadius: "0px",
                backgroundColor: "#e6ffff",
              }}
              placeholder=""
              onChange={handleInput}
            />
          </div>
        </div> */}
        {/* /*---------------------------------------------------------------- */}
        {/* /*---------------------------------------------------------------- */}
        <div className="row">
          <div className="col-md-3 text-left pt-2 mx-auto">
            <h4>
              <label className="" htmlFor="profileImage">
                <span className="label ">Upload</span>
              </label>
            </h4>
          </div>
          <div className="col">
            <input
              name="profileImage"
              type="file"
              className="custom-file-input"
              id="inputGroupFile01"
            />
            <label className="custom-file-label" htmlFor="inputGroupFile01"></label>
          </div>
        </div>
        {/* /*---------------------------------------------------------------- */}
        {/* /*---------------------------------------------------------------- */}
        <div className="row ">
          <div className="col-md-3 text-left pt-2">
            <h4>
              <label className="" htmlFor="location">
                <span className="label ">Select Location</span>
              </label>
            </h4>
          </div>
          <select className="col form-select pt-2 mx-3" name="location" onChange={handleInput}>
            <option value="NotSelected" selected>--Select--</option>
            <option value="jaipur">Jaipur</option>
            <option value="delhi">Delhi</option>
            <option value="mumbai">Mumbai</option>
            <option value="gurgaon">Gurugaon</option>
            <option value="hyderabad">Hyderabad</option>
          </select>
        </div>
        {/* /*---------------------------------------------------------------- */}
        <div className="text-center mt-3">
          <button
            className=" bg-primary px-4 py-2 rounded-3 text-light"
            type="submit"
          >
            {" "}
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default Registration;
