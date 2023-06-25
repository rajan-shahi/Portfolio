import "./topbar.scss";
import {BsFillPersonFill} from 'react-icons/bs';
import {AiFillMail} from 'react-icons/ai';

export default function Topbar({ menuOpen,setMenuOpen }) {
  return <div className={"topbar " +(menuOpen && "active" )}>

    <div className="wrapper">
      <div className="left">
        <a href="#intro" className="logo">Rajan Bahadur Shahi.</a>

        <div className="itemContainer">
          <BsFillPersonFill className="iccon"/>
          <span>+ 98 66 44 81 06</span>
        </div>

        <div className="itemContainer">
          <AiFillMail className="icon"/>
          <span>rajanshahi1267@gmail.com</span>
        </div>

      </div>

      <div className="right">
        <div className="hamburger" onClick={()=>setMenuOpen(!menuOpen)}>
          <span className="line1"></span>
          <span className="line2"></span>
          <span className="line3"></span>
        </div>

      </div>
    </div>
  </div>;
}
