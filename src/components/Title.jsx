import React from 'react'
import PropTypes from 'prop-types'

const Title = ({ text, color = 'text-white', textAlign = 'text-right' }) => {
    return (
        <h1 className={`text-4xl md:text-5xl ${color} uppercase mb-4 font-extrabold ${textAlign}`} style={{ fontFamily: 'Space Grotesk' }}>
            {text}
        </h1>
    )
}

Title.propTypes = {
    text: PropTypes.string.isRequired,
    color: PropTypes.string,
    textAlign: PropTypes.string
}

export default Title
