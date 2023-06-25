import "./testimonials.scss"

export default function Testimonials() {
  return (
    <div className="testimonials" >
      <h1>Testimonials</h1>

      <div className="container" style={{ display: "flex" }}>
        <div className="container">
          <div className="card">
            <div className="top">
              <img src="assets/image/arrow.png" alt="" />
              <img className="user" src="assets/image/git.jpg" alt="" />
              <img className="right" src="assets/image/you.png" alt="" />
            </div>
            <div className="center">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae enim excepturi.
            </div>
            <div className="bottom">
              <h3>Alex</h3>
              <h4>CEO of LAVA</h4>
            </div>
          </div>
        </div>



        <div className="container">
          <div className="card">
            <div className="top">
              <img src="assets/image/arrow.png" alt="" />
              <img className="user" src="assets/image/cute.jpg" alt="" />
              <img className="right" src="assets/image/twiter.png" alt="" />
            </div>
            <div className="center">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae enim excepturi.
            </div>
            <div className="bottom">
              <h3>Alex</h3>
              <h4>CEO of LAVA</h4>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}
