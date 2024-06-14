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

  return (
    <>
      <div className="container">
        {slides.map((slide, index) => (
          <Slide 
            key={slide.id}
            title={slide.title}
            image={slide.image}
            text={slide.text}
          />
        ))}
      </div>
    </>
  );
}

export default App;
