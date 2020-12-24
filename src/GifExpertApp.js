import React, {useState} from 'react'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

// const categories = ['Maradona', 'Peron', 'Nestor'];

export const GifExpertApp = () => {
    const [categories, setCategories] = useState(['Maradona']);

    // const handleAdd = () => {
    //     setCategories(categories => [...categories,'Cristina']);
    // }

    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories={setCategories}/>
            <hr/>

            <ol>
                { 
                    categories.map(cat => (
                        <GifGrid 
                            key={cat}
                            category= {cat}/>
                    ))
                }
            </ol>
        </>
    )
}
