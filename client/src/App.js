import Navbar from "./Navbar";
import Home from "./pages/Home";
import Registration from "./pages/Registration";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Faculties from "./pages/Faculties";
import Footer from "./Footer";
import CarbonNetZero from "./pages/CarbonNetZero";
import Button from "react-bootstrap/Button";
import ContactUs from "./components/ContactUs";
import Login from "./pages/Login";
import LightSwitch from "./LightSwitch";



function App() {
  return (
    <>
      <BrowserRouter>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            minHeight: "100vh",
          }}
        >
          <Navbar />
          <div style={{ flex: 1, paddingTop: "20px" }}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/home" element={<Home />} />
              <Route path="/carbonNetZero" element={<CarbonNetZero />} />

              <Route path="/registration" element={<Registration />} />
              <Route path="/activities" element={<Faculties />} />
              <Route path="/contactus" element={<ContactUs />} />
              <Route path="/login" element={<Login />} />
            </Routes>
            {/* <LightSwitch /> */}
            {/* <Button
              variant="dark"
              href="./contactus"
              style={{ position: "fixed", bottom: "100px", right: "20px" }}
            >
             Contact Us 
            </Button> */}
          </div>
          
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
