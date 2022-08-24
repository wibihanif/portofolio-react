import "./style.css";
import { Routes, Route, Link } from "react-router-dom";
import Aboutme from "./page/Aboutme";
import Gallery from "./page/Gallery";

function App() {
  return (
    <>
      <div className="navbar">
        <div className="menu1">
          <a href="">
            <Link to="/Home">HOME</Link>
          </a>
        </div>
        <div className="menu2">
          <a href="">
            <Link to="/Aboutme">ABOUT ME</Link>
          </a>
        </div>
        <div className="menu3">
          <a href="">
            <Link to="/Gallery">GALLERY</Link>
          </a>
        </div>
      </div>
      <div className="header">
        <div className="profile-photo">
          <img
            src={require("./img/kucing1.png")}
            alt="catphoto"
            style={{ maxWidth: "70%" }}
          />
        </div>
        <div className="introducing">
          <div />
          <div className="greeting">
            <h1>HELLO!</h1>
          </div>
          <div className="name">
            <h2>
              I'm Wibi Hanif Wibowo,
              <br />a Web Developer Wanna Be
            </h2>
          </div>
          <div className="more-about">
            <button>Let's Get To Know Me!</button>
          </div>
          <div />
        </div>
      </div>
      <Routes>
        {/* <Route path="/Home" element={<App />} /> */}
        <Route path="/Aboutme" element={<Aboutme />} />
        <Route path="/Gallery" element={<Gallery />} />
      </Routes>
    </>
  );
}

export default App;
