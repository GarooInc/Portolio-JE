import React, { useState, useEffect } from 'react';
import PodcastPreview from '../PodcastPreview/PodcastPreview';
import PropTypes from "prop-types";

const Slider = ({ podcasts }) => {
  const [startIndex, setStartIndex] = useState(0);
  const [itemsToShow, setItemsToShow] = useState(4);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setItemsToShow(1);
      } else {
        setItemsToShow(4);
      }
    };
    
    window.addEventListener('resize', handleResize);
    handleResize();  
    
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleNext = () => {
    setStartIndex(prevIndex => Math.min(prevIndex + itemsToShow, podcasts.length - itemsToShow));
  };

  const handlePrev = () => {
    setStartIndex(prevIndex => Math.max(prevIndex - itemsToShow, 0));
  };

  return (
    <div className="slider flex pt-4 items-center md:pt-8">
      <button 
        onClick={handlePrev} 
        disabled={startIndex === 0} 
        className="p-2 bg-je-black hover:bg-je-red disabled:bg-je-black rounded-full mr-4"
      >
        ←
      </button>
      <div className="podcasts-row flex space-x-8">
        {podcasts.slice(startIndex, startIndex + itemsToShow).map((podcast, index) => (
            <PodcastPreview 
              key={index} 
              name={podcast.name} 
              url={podcast.url} 
              className="flex-shrink-0"
            />
        ))}
      </div>
      <button 
        onClick={handleNext} 
        disabled={startIndex >= podcasts.length - itemsToShow} 
        className="p-2  bg-je-black hover:bg-je-red disabled:bg-gray-200 rounded-full ml-4"
      >
        →
      </button>
    </div>
  );
}

Slider.propTypes = {
    podcasts: PropTypes.array,
};

export default Slider;
