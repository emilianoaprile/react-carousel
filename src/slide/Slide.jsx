function Slide({
  title,
  image,
  text,
  activeIndex,
  nextSlide,
  prevSlide,
  goToSlide,
  totalSlides,
  onMouseEnter,
  onMouseLeave
}) {
  return (
    <>
      {activeIndex && (
        <div className="carousel slide" onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
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
            {totalSlides.map((slide, index) => (
              <button
                onClick={() => goToSlide(index)}
                key={slide.id}
                type="button"
                className=""
              ></button>
            ))}
          </div>
        </div>
      )}
    </>
  );
}

export default Slide;
