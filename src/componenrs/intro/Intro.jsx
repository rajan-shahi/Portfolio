import "./intro.scss";
import { init } from 'ityped'
import  { useEffect,useRef } from "react"



export default function Intro()
 {

  const textRef = useRef();

  useEffect(() => {
    init(textRef.current, { 
      showCursor: true,
      backDelay: 1500,
      backSpeed: 60,

      strings: ["Developer", "Designer","Content Creator" ],});

  },[]);
  return <div className="intro">
    
    <div className="left">
    <div className="imageContainer">
      <img src="assets/image/man.jpg" alt=" "></img>
    </div>
    </div>

    <div className="right">
      <div className="wrapper">
        <h2>Hi There, I'm </h2>
        <h1>Rajan Bahadur Shahi</h1>
        <h3>Freelance <span ref={textRef}></span> </h3>

        <a href="Portfolio" >
        < img src="assets/image/down.png" alt=" "></img>
      </a>
      </div>

    </div>

  </div>;
}
