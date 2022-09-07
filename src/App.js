import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <main className="main-box">
      <article className="outer-box">
        <img alt="QRCode" src={require("./assets/image-qr-code.png")} />
        <article className="textField">
          <h5>Improve your front-end skills by building projects</h5>
          <p>
            Scan the QR Code to visit Frontend Mentor and take your coding
            skills to the next level
          </p>
        </article>
      </article>
    </main>
  );
}

export default App;
