function Slide({ title, image, text, active, nextSlide, prevSlide }) {
  return (
    <>
      {active && (
        <div className="carousel slide">
          <div className="carouselWrapper">
            <div className="carouselItem">
              <img src={image} alt="" />
              <div className="carouselCaption">
                <div className="carouselTitle">
                  <h1>{title}</h1>
                  <p>{text}</p>
                </div>
              </div>
            </div>
            <button onClick={prevSlide} className="btn btnLeft">
              prev
            </button>
            <button onClick={nextSlide} className="btn btnRight">
              next
            </button>
          </div>
          <div className="slideBullets">
            <button
              aria-label="Slide 1"
              data-bs-target="true"
              type="button"
              className=""
            ></button>
            <button
              aria-label="Slide 2"
              data-bs-target="true"
              type="button"
              className=""
            ></button>
            <button
              aria-label="Slide 3"
              data-bs-target="true"
              type="button"
              className=""
            ></button>
          </div>
        </div>
      )}
    </>
  );
}

export default Slide;
