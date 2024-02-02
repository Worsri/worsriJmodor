var express = require("express");
const multer = require("multer");
// const con = require("./config/connection")

var bodyParser = require("body-parser");
var cors = require("cors");
const con = require("./config/connection");
// var session = require("express-session");
// var cookieParser = require("cookie-parser");
var app = express();

const storage = multer.memoryStorage(); // Use memory storage for simplicity
const upload = multer({ storage: storage });

/* `app.use(express.urlencoded({ extended: true }))` is a middleware function in Express.js that parses
incoming requests with URL-encoded payloads. */
app.use(express.urlencoded({ extended: true }));
app.use(express.json());// middleware for parsing JSON in the request body
app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
    
);
app.post("/registration", (req, res) => {
  const userData = req.body;
  
  const name = req.body.name;
  const age = req.body.age;
  const cno = req.body.cno;
  const whatDoYouDo = req.body.flexRadioDefault1;
  const org = req.body.org;
  const occupation = req.body.occupation;
  const designation = req.body.designation;;
  const emailid = req.body.emailid;
  const course = req.body.course;
  const profileImage = req.body.profileImage;
  const location = req.body.location;


  
  console.log(userData);
   var sql = `insert into registrationdetails(name,contactno,age,whatDoYouDo,organizationorinstitute,occupation,designation,emailid,course,location) values('${name}',${
     cno || "NULL"
   },${
     age || "NULL"
   },'${whatDoYouDo}','${org}','${occupation}','${designation}','${emailid}','${course}','${
     location || "NULL"
    }')`;
  if (req.body.course) {
    console.log("course is present");
  } else {
    console.log("course is empty");
  }
  con.query(sql, function (error, result) {
    if (error) {
      console.log(error);
    } else {
      res.send(result);
    }
  })

  

 
});



app.listen(5000, () => {
  console.log("listening on 5000");
});