
import React from 'react'
import propTypes from 'prop-types'

const GifGridItem = ({ image }) => {

    const { title, url} = image;

    return (
        <div className="card animate__animated animate__bounce">
            <img src={url} alt={title}></img>
            <p>{title}</p>
        </div>
    )
}

GifGridItem.propTypes = {
    image: propTypes.object.isRequired
}

export default GifGridItem