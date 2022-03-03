


import React, { useState } from 'react'

import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

const GifExpertApp = () => {

    //const categories = ['One Punch','Samurai X','Dragon Ball'];
    const [categories, setcategories] = useState(['Goku']);

    /*const handleAdd = () => {
        //setcategories( [...categories,'Jesus']);
        setcategories( cats => [...cats,'Jesus']);
    }*/

    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setcategories={setcategories} />
            <hr />
            <ol>
                {
                    categories.map(cat => {
                        return <GifGrid key={cat} categoria={cat}/>;
                    })
                }
            </ol>
        </>
    )
}


export default GifExpertApp