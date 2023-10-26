import React, { useState, useEffect } from 'react';
import PodcastPreview from '../PodcastPreview/PodcastPreview';
import PropTypes from "prop-types";
import AnalysisPreview from '../AnalysisPreview/AnalysisPreview';

const Slider = ({ items, isAnalysis }) => {
  const [startIndex, setStartIndex] = useState(0);
  const [itemsToShow, setItemsToShow] = useState(4);

  console.log(items);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 760) {
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
    setStartIndex(prevIndex => Math.min(prevIndex + itemsToShow, items.length - itemsToShow));
  };

  const handlePrev = () => {
    setStartIndex(prevIndex => Math.max(prevIndex - itemsToShow, 0));
  };

  return (
    <div className="slider flex pt-4 items-center md:pt-8">
      <button 
        onClick={handlePrev} 
        disabled={startIndex === 0} 
        className="p-2 bg-je-black hover:bg-je-black disabled:bg-gray-200 rounded-full mr-4"
      >
        ←
      </button>
      <div className="row flex space-x-8">
        {items.slice(startIndex, startIndex + itemsToShow).map((item, index) => (
          isAnalysis ? (
            <AnalysisPreview 
              key={index} 
              name={item.name} 
              url={item.url} 
              description={item.description}
              date={item.date}
              className="flex-shrink-0"
            />
          ) : (
            <PodcastPreview 
              key={index} 
              name={item.name} 
              urlSpotify={item.urlSpotify}
              urlYoutube={item.urlYoutube}
              className="flex-shrink-0"
            />
          )
        ))}
      </div>
      <button 
        onClick={handleNext} 
        disabled={startIndex >= items.length - itemsToShow} 
        className="p-2 bg-je-black hover:bg-je-black disabled:bg-gray-200 rounded-full ml-4"
      >
        →
      </button>
    </div>
  );
}

Slider.propTypes = {
  items: PropTypes.array,
  isAnalysis: PropTypes.bool,
};

Slider.defaultProps = {
  items: [],
  isAnalysis: false,
};


export default Slider;
