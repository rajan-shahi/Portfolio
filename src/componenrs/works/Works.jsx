import "./works.scss"

export default function Works() {
  return (
    <div className="work" id="works">

      <div className="slider">

        <div className="container">
          <div className="item">

            <div className="left">

              <div className="leftcontainer">
                <div className="imgcontainer">
                  <img src="assets/image/mbl.jpg" alt="" />
                </div>
                <h2>Title</h2>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                <span>Projects</span>


                



              </div>

            </div>

            <div className="right">
              <img src="assets/image/img5.png" alt="" />

            </div>

          </div>
        </div>
      </div>
      <img src="assets/image/arrow.png" className="arrow left" alt="" />
      <img src="assets/image/arrow.png" className="arrow right" alt="" />
    </div>
  )
}
