
import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs';
import GifGridItem from './GifGridItem';

export const GifGrid = ({ categoria }) => {

    const {loading,data} = useFetchGifs(categoria);


    return (
        <>
            <h1>{categoria}</h1>
            {loading && <p>Cargando</p>}
            <div className="card-grid animate__fadeInUp">
                {
                    data.map((img) => {
                        return <GifGridItem key={img.id}
                            image={img}
                        />
                    })
                }
            </div>

        </>
    )
}
