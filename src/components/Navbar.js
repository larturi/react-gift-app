import React from 'react';

export const Navbar = () => {
    return (
            
        <>

            <header className="navbar bg-green-600 text-white my-3">
        
                <div className="flex items-center justify-between mb-4 md:mb-0">
                <h1 className="leading-none text-2xl text-grey-darkest">
                    Buscar Gits
                </h1>
                </div>
                
                
                <nav>
                <ul className="list-reset md:flex md:items-center">
                    <li className="md:ml-4">
                    <a className="border-t block no-underline hover:underline py-2 md:border-none md:p-0" 
                        href="https://developers.giphy.com/" target="_blank">
                        ApiGiphy.com
                    </a>
                    </li>
                    <li className="md:ml-4">
                    <a className="border-t block no-underline hover:underline py-2 md:border-none md:p-0" 
                        href="https://www.leandroarturi.com.ar/" target="_blank">
                        Contact
                    </a>
                    </li>
                </ul>
                </nav>
            
            </header>

        </>
    )
}

