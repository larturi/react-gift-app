import React from 'react';

export const GifGridItem = ( { id, title, url, type, descarga } ) => {
    return (
        <div className='card mr-5 mb-5'>
            <img src={url} alt={title} className='w-full' />
            <div className="px-6 py-4 flex justify-center">
                <a 
                    href={descarga} 
                    target="_blank"
                    rel="noreferrer" 
                    className="bg-gray-100 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center w-full"
                >
                    <svg className="btn-descarga-icon mr-5 fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z"/></svg>
                    <span className="text-center btn-descarga-text">
                        Download
                    </span>
                </a>
            </div>
        </div>
    )
}


