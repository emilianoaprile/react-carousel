import Slide from "./slide/Slide.jsx";
import {useState} from 'react';

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
    }
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const nextSlide = () => {
    const nextIndex = activeIndex === slides.length - 1 ? 0 : activeIndex + 1
    setActiveIndex(nextIndex)
  }

  const prevSlide = () => {
    const prevIndex = activeIndex === 0 ? slides.length - 1 : activeIndex - 1
    setActiveIndex(prevIndex)
  } 

  const goToSlide = (index) => {
    setActiveIndex(index)
  }


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
          />
        ))}
      </div>
    </>
  );
}

export default App;
