import bgvid from "../../assets/Cube spin.mp4";
{
  /*
  Add: 
  -GitHub/LinkedIn logos
  -Footer
  -Gif on Hover
  -Keep position on page
*/
}
import NavBar from "../NavBar";
import "../../App.css";

function App() {
  return (
    <div
      className="openAnim"
      style={{
        height: "100vh",
        backgroundColor: "#ebeff5",
      }}
    >
      <NavBar></NavBar>
      <video
        autoPlay
        muted
        loop
        id="myVideo"
        style={{
          paddingBottom: "20vh",
        }}
      >
        <source src={bgvid} type="video/mp4"></source>
      </video>
      <h1
        style={{
          paddingTop: "33vh",
        }}
        className="openText"
      >
        Welcome
      </h1>
      <h1 className="openText">to Lucas R's domain</h1>
      <br />
    </div>
  );
}

export default App;
