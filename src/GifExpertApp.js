import React from 'react'
import { useState } from 'react'
import { AddCategory } from './components/AddCategory'
import { GifGrid } from './components/GifGrid';
import './GiffExpertApp.css'

export const GifExpertApp = () => {
    
    
    const [categories, setCategories] = useState(['One Punch']);


  return (
    <div className="app">
        <h1>Giff Expert App 😊</h1>
        <AddCategory setCategories = {setCategories}/>
        <hr/>
        
    
        <ul>
            { 
            categories.map((category) =>
                <GifGrid 
                key={category}
                category={category}/>
            ) 
            }
        </ul>
    </div>
  )
}
