import React, { useState } from "react"
import PropTypes from "prop-types"
import { BsSpotify, BsYoutube } from 'react-icons/bs'
import i18n from "../../../i18n"
import { useTranslation } from 'react-i18next'
import IframeEmbeed from "../IframeEmbeed/IframeEmbeed"

const PodcastPreview = ({ name, urlSpotify, urlYoutube, embeed }) => {
    const { t } = useTranslation()
    const [isHovered, setIsHovered] = useState(false);

    const handleSpotifyClick = () => {
        window.open(urlSpotify, '_blank', 'noopener,noreferrer');
    };

    const handleYouTubeClick = () => {
        window.open(urlYoutube, '_blank', 'noopener,noreferrer');
    };

    return (
      <div className="p-4 bg-je-black p-2 lg:p-8 rounded-lg shadow-lg text-center">
        <IframeEmbeed src={embeed} />
        <h3 className="text-xl font-bold m-2">{name}</h3>
        <div 
            onMouseDown={() => setIsHovered(true)}
            className="relative inline-block"
        >
            <a className="text-blue-500 hover:none cursor-pointer" style={{ fontFamily: 'Syne' }}>{t('podcast.listen')}</a>
            {isHovered && (
                <div className="absolute flex gap-4 left-1/2 transform -translate-x-1/2 mt-2 p-2 bg-white rounded shadow-lg">
                    <BsSpotify className="text-green-600 cursor-pointer" size={24} onClick={handleSpotifyClick} />
                    <BsYoutube className="text-red-600 cursor-pointer" size={24} onClick={handleYouTubeClick} />
                </div>
            )}
        </div>
      </div>
    );
}

PodcastPreview.propTypes = {
    name: PropTypes.string,
    urlSpotify: PropTypes.string,
    urlYoutube: PropTypes.string,
};

export default PodcastPreview;
