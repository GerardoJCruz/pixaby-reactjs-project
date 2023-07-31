import React from 'react'

function Card({ image }) {

    // Extract card information
    const { largeImageURL, previewURL, likes, views } = image;

    return (
        <>
            <div className='card rounded-0'>
                <img src={previewURL} alt="Img" rel='noreferrer'/>
                    <div className="card__info">
                        <p className="card__likes"><span>{likes}</span> Likes</p>
                        <p className="card__views"><span>{views}</span> views </p>

                        <a className="btn card__button w-100 border-0 rounded p-1 fw-bold " href={largeImageURL} target="_blank" rel='noreferrer'>See the full image</a>
                    </div>
            </div>
        </>
    )
}

export default Card
