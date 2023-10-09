import React from 'react'
import PropTypes from 'prop-types'

const Title = ({ text, color = 'text-white', textAlign = 'text-right' }) => {
    return (
        <h1 className={`font-extrabold text-4xl md:text-5xl ${color} uppercase my-6 ${textAlign}`} style={{ fontFamily: 'Space Grotesk' }}>
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
