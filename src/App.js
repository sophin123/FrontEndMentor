import "./App.css";
import Navbar from "./component/Navbar";
import image1 from "./assets/images/image-web-3-desktop.jpg";
import image2 from "./assets/images/image-retro-pcs.jpg";
import image3 from "./assets/images/image-top-laptops.jpg";
import image4 from "./assets/images/image-gaming-growth.jpg";
import { useState } from "react";

function App() {
  return (
    <div className="maincontainer">
      <Navbar />

      <main className="contentcontainer">
        <div className="contentleft">
          <div className="contenttop">
            <img
              src={image1}
              width={"100%"}
              height={"250%"}
              alt="dashboardImg"
            />
          </div>
          <div className="contentbottom">
            <div className="contentbottomleft">
              <h1>The Bright Future of Web 3.0?</h1>
            </div>

            <div className="contentbottomright">
              <p>
                We dive into the next evolution of the web that claims to put
                the power of the platforms back into the hands of the people.
                But is it really fulfilling its promise?
              </p>
              <input type={"button"} value="READ MORE" />
            </div>
          </div>
        </div>
        <div className="contentright">
          <div className="title">
            <h1>New</h1>
          </div>
          <div className="newscard">
            <h2> Hydrogen VS Electric Cars</h2>
            <p>Will hydrogen-fueled cars ever catch up to EVs?</p>
          </div>
          <div className="newscard">
            <h2> The Downsides of Al Artistry</h2>
            <p>
              What are the possible adverse effects of on-demand Al image
              generation?
            </p>
          </div>
          <div className="newscard" style={{ borderBottom: "none" }}>
            <h2> Is VC Funding Drying Up? </h2>
            <p>
              Private funding by VC firms is down 50% YOY. We take a look at
              what that means.
            </p>
          </div>
        </div>
      </main>
      <footer className="bottomcontent">
        <div className="bottomcard">
          <div className="leftbottomcard">
            <img src={image2} width={80} height={100} alt="img" />
          </div>
          <div className="rightbottomcard">
            <h1>01</h1>
            <h4>Reviving Retro PCs</h4>
            <p>What happens when old PCs are given modern upgrades?</p>
          </div>
        </div>
        <div className="bottomcard">
          <div className="leftbottomcard">
            <img src={image3} width={80} height={100} alt="img" />
          </div>
          <div className="rightbottomcard">
            <h1>02</h1>
            <h4> Top 10 Laptops of 2022</h4>
            <p> Our best picks for various needs and budgets.</p>
          </div>
        </div>
        <div className="bottomcard">
          <div className="leftbottomcard">
            <img src={image4} width={80} height={100} alt="img" />
          </div>
          <div className="rightbottomcard">
            <h1>03</h1>
            <h4> The Growth of Gaming</h4>
            <p> How the pandemic has sparked fresh opportunities.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
