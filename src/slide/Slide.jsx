function Slide() {

    return (
      <>
        <div className="carousel slide">
        <div className="carouselWrapper">
          <div className="carouselItem">
            <img src="https://picsum.photos/200/300" alt="" />
            <div className="carouselCaption">
              <div className="carouselTitle">
                <h1>Slide 1</h1>
                <p>slide uno</p>
              </div>
            </div>
          </div>
          <button className="btn btnLeft">prev</button>
          <button className="btn btnRight">next</button>
        </div>
        <div className="slideBullets">
          <button aria-label="Slide 1" data-bs-target="true" type="button" className=""></button>
          <button aria-label="Slide 2" data-bs-target="true" type="button" className=""></button>
          <button aria-label="Slide 3" data-bs-target="true" type="button" className=""></button>
        </div>
      </div>
      </>
    )
  }
  
  export default Slide
  