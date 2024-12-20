import { useState, useEffect, useCallback } from "react";

const CustomSlider = ({ slides, autoPlay = true, interval = 10000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Memoize handleNext to prevent unnecessary re-renders
  const handleNext = useCallback(() => {
    setCurrentIndex((prevIndex) =>
      prevIndex === slides.length - 1 ? 0 : prevIndex + 1
    );
  }, [slides.length]);

  useEffect(() => {
    if (!autoPlay) return;
    const timer = setInterval(() => {
      handleNext();
    }, interval);
    return () => clearInterval(timer); // Cleanup on unmount
  }, [handleNext, interval, autoPlay]); // Include handleNext and interval as dependencies

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="relative w-full max-w-6xl mx-auto h-[500px] overflow-hidden rounded-lg">
      {/* Slider */}
      <div
        className="flex transition-transform duration-500 h-full"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div
            key={index}
            className="w-full h-full flex-shrink-0 relative bg-cover bg-center"
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            {/* Text Content */}
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/50 text-white p-6 text-center">
              <h2 className="text-3xl font-bold mb-4">{slide.heading}</h2>
              <p className="text-lg max-w-xl">{slide.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={handlePrev}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-gray-800 text-white rounded-full p-2 hover:bg-gray-700"
      >
        ❮
      </button>
      <button
        onClick={handleNext}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-800 text-white rounded-full p-2 hover:bg-gray-700"
      >
        ❯
      </button>

      {/* Dots */}
      <div className="flex justify-center mt-4 space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full ${currentIndex === index
              ? "bg-gray-800"
              : "bg-gray-400"
              }`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default CustomSlider;
