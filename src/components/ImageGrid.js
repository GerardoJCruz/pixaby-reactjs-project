import React from 'react'
import Card from './Card'

function ImageGrid({ images }) {
    return (
        <div className='cards__container mt-5' id='cards__container'>
            {images.map((image => (
                <Card key={image.id} image={image} />
            )))
            }
        </div>
    )
}

export default ImageGrid
