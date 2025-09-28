import NavigationBar from "../NavBar";
import "../../App.css";
import Turntable from "../../assets/Turntable.png";

function TurntablePage() {
  return (
    <div className="cardAnim">
      <NavigationBar />
      <h1 style={{ textAlign: "center", paddingTop: "100px" }}>Turntable</h1>
      <br />
      <div
        style={{
          textAlign: "center",
        }}
      >
        <img
          src={Turntable}
          style={{
            width: "66vh",
            display: "block",
            margin: "0 auto",
          }}
        />
      </div>
      <br />
      <p
        className="toppy projectText"
        style={{
          width: "66%",
          justifySelf: "center",
          paddingBottom: "50px",
        }}
      >
        I value music very highly in my life, so much so that I decorate my room
        with the vinyls from my favorite artists/albums. The problem? I didn't
        have anything to play them on. Using Altium Designer and Solidworks, I'm
        designing and building a vinyl turntable from scratch, with the end goal
        of open-sourcing the project and having a cheap alternative to the
        over-priced options currently on the market.
      </p>
    </div>
  );
}

export default TurntablePage;
