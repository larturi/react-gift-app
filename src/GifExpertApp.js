import React, { Fragment, useState } from 'react';
import { CategoryAdd } from './components/CategoryAdd';
import { GifGrid } from './components/GifGrid';
import { Navbar } from './components/Navbar';

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['Los Simpson']);

    return (
       <Fragment>
           <Navbar/>
           <CategoryAdd setCategories={ setCategories }/>

           <ol> 
               { 
                    categories.map( category => (
                       <GifGrid 
                          key={category}
                          category={category}
                       />
                    ))
               }
           </ol>
       </Fragment>
    );
};

