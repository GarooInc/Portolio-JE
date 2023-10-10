import React from "react";
import PropTypes from "prop-types";

const PodcastPreview = ({ name, url }) => {
    return (
      <div className="podcast bg-je-black p-8 rounded-lg shadow-lg text-center">
        <img src="/images/podcasticon.svg" alt={name} className="mx-auto mb-4 w-32 h-32 object-cover rounded-full"/>
        <h3 className="text-xl font-bold mb-2">{name}</h3>
        <a href={url} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">Escuchar</a>
      </div>
    );
}

PodcastPreview.propTypes = {
    name: PropTypes.string,
    url: PropTypes.string,
};

export default PodcastPreview;
