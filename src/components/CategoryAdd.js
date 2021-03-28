
import React, { useState } from 'react';
import PropTypes from 'prop-types';

export const CategoryAdd = ( { setCategories } ) => {

    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (inputValue.trim().length > 2) {
            setCategories(cats => [ inputValue, ...cats ]);
            setInputValue('');
        }

    }

    return (
        <form onSubmit={handleSubmit}>
            <input 
                type="text"
                className="input border rounded border-green-500 mb-3 text-2xl appearance-none w-full px-3 py-2 text-green-600 focus focus:border-green-800 focus:outline-none active:outline-none active:border-green-600"
                value={inputValue}
                onChange={handleInputChange}
                placeholder="Buscar..."
                name="buscador"
            />
        </form>
    )
}

CategoryAdd.propTypes = {
    setCategories: PropTypes.func.isRequired
}