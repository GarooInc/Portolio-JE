import React from "react";
import PropTypes from "prop-types"
import { BsFillArrowRightCircleFill } from 'react-icons/bs'

const AnalysisPreview = ({ name, url, description, date }) => {
    return (
      <div className="podcast bg-je-white p-8 rounded-lg shadow-lg text-center">
        <img src="/images/analysis.jpeg" alt={name} className="mx-auto mb-4 w-40  object-cover rounded-sm"/>
        <div className="flex flex-col justify-center items-start">
          <h3 className="text-xl text-je-black font-bold mb-2" style={{ fontFamily: 'Syne' }}>{name}</h3>
          <span className="text-l md:text-xl text-je-black mb-4 text-left" style={{ fontFamily: 'Syne' }}>{description}</span>
          <span className="text-l md:text-xl text-je-black mb-4  text-left" style={{ fontFamily: 'Syne' }}>{date}</span>
        </div>
        <a href={url} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
        <BsFillArrowRightCircleFill className="text-je-red h-4 w-4 md:h-6 md:w-6 md:ml-auto" aria-hidden="true" />
        </a>
      </div>
    );
}

AnalysisPreview.propTypes = {
    name: PropTypes.string,
    url: PropTypes.string,
    description: PropTypes.string,
    date: PropTypes.string,
};

export default AnalysisPreview
