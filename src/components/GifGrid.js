import React, { useState, useEffect } from 'react';
import { getGifs } from '../helpers/getGifts';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({ category }) => {

    const [images, setImages] = useState([]);

    useEffect(() => {
        getGifs(category).then(imgs => setImages(imgs));
    }, [category]);

    ;

    return (
        <>
            <h3 className="mt-1 mb-5 bg-green-50 p-3 text-green-700 text-lg text-center">{ category.toUpperCase() }</h3>

            <div className="card-grid flex justify-center">
                {
                    images.map( img => (
                        <GifGridItem
                            key={ img.id }
                            { ...img } 
                        />
                    ))
                }
            </div>
        </>
    )
}
