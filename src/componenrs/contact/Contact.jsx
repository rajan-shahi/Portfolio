import "./contact.scss"
  import { useState } from "react";

export default function Contact() {


  const [message, setMessage] = useState(false)

 const handleSubmit = (e)=> {
  e.preventDefault();
  setMessage(true)
 }

  return (
    <div className="contact" id="contact">

      <div className="left">
        <img src="assets/image/laptop.jpg" alt="" />
      </div>

      <div className="right">
        <h2>Contact.</h2>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Email"></input>
          <textarea placeholder="Message"></textarea>
          <button type="Submit">Send</button>
          {message && <span>Thank's, I'll reply ASAP: </span>}
        </form>
      </div>

    </div>
  )
}
