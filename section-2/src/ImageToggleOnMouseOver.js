import React, { useRef } from 'react'

const ImageToggleOnMouseOver = ({ primaryImg, secondaryImg }) => {

    const imageRef = useRef(null)
    // console.log('imageRef is: ', imageRef)

    return (
        <img onMouseOver={() => {
            imageRef.current.src = secondaryImg
        }} onMouseOut={() => {
            imageRef.current.src = primaryImg
        }} 
        src={primaryImg}
        alt=''
        ref={imageRef}
        />
    )
}

export default ImageToggleOnMouseOver