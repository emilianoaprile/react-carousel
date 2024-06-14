import Slide from "./slide/Slide.jsx";
import { useEffect, useState } from "react";

function App() {
  const slides = [
    {
      id: 1,
      title: "Slide 1",
      image: "/slide-1.jpg",
      text: "Slide uno",
    },
    {
      id: 2,
      title: "Slide 2",
      image: "/slide-2.jpg",
      text: "Slide due",
    },
    {
      id: 3,
      title: "Slide 3",
      image: "/slide-3.jpg",
      text: "Slide tre",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(true);

  // autoloop
  useEffect(() => {
    const interval = setInterval(() => {
      if (animating) {
        nextSlide();
      }
    }, 3000);
    return () => {
      if(interval) {
        clearInterval(interval);
      }
    }
  }, [animating, activeIndex]);

  // next slide fn
  const nextSlide = () => {
    const nextIndex = activeIndex === slides.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  // prev slide fn
  const prevSlide = () => {
    const prevIndex = activeIndex === 0 ? slides.length - 1 : activeIndex - 1;
    setActiveIndex(prevIndex);
  };

  // bullets animation
  const goToSlide = (index) => {
    setActiveIndex(index);
  };

  return (
    <>
      <div className="container">
        {slides.map((slide, index) => (
          <Slide
            key={slide.id}
            title={slide.title}
            image={slide.image}
            text={slide.text}
            activeIndex={index === activeIndex}
            nextSlide={nextSlide}
            prevSlide={prevSlide}
            goToSlide={goToSlide}
            totalSlides={slides}
            stopLoop={() => setAnimating(false)}
            startLoop={() => setAnimating(true)}
          />
        ))}
      </div>
    </>
  );
}

export default App;
