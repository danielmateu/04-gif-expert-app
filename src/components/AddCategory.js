import React from 'react'
import { useState } from 'react'
import './AddCategory.css'
import PropTypes from 'prop-types'

export const AddCategory = ({setCategories}) => {

    const [inputValue, setInputValue] = useState('Add a new category');
    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        
        if(inputValue.trim().length > 2){
            setCategories(cats => [inputValue, ...cats]);
            setInputValue('');
        }

    }
    return (
    <div>
        <h2>Add Category</h2>
        <form onSubmit={handleSubmit}>
            <input 
                type='text'
                value={inputValue}
                onChange = {handleInputChange}
            />
            <input 
                type='submit'/>
        </form>
        
    </div>
    )
}

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired,
}