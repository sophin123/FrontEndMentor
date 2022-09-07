import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="main-box">
      <div className="outer-box">
        <img alt="QRCode" src={require("./assets/image-qr-code.png")} />
        <div className="textField">
          <h5>Improve your front-end skills by building projects</h5>
          <p>
            Scan the QR Code to visit Frontend Mentor and take your coding
            skills to the next level
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
