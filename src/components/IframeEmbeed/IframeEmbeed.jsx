import React from 'react'

const IframeEmbeed = ({ src }) => {
  return (
    <iframe className='shadow-lg rounded-xl' title='Spotify embeed player' 
    src={src}
    width="100%" height="352" frameBorder="0" allowfullscreen="" 
    allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
  )
}

export default IframeEmbeed