//  el useEffect es un hook q sirve para disparar efectos secundarios
// un efecto secundario es un proceso q se quiera ejecutar cuando algo suceda 

import { useEffect, useState } from 'react';
import { getGifs } from '../helpers/getGifs'; // importacion



// // un hook no es mas que una funcion que regresa algo (esta retornando image y isLoading)
export const useFetchGifs = ( category ) => {
    // images son las imagenes q stoy mandando en el retunr
    const [images, setImages] = useState([]);
    const [isLoading, setIsLoading] = useState( true ); // creamos un cambio para lo de la carga

    const getImages = async() => {
        const newImages = await getGifs( category );
        setImages(newImages);
        setIsLoading(false); // cuando ya dejo de cargar lo pone falsa
    }
    // la primera parte es la funcion en el cual tenemos el codigo q queremos ejecutar 
    // y el segundo argumento dice que es opcional 
    useEffect( () => {
        // lo llamamos asi para que no e este disparando
        getImages();
        // despues de la coma va el segundo argumento
        // se se dja asi significa que solo se va a disparar la primera ves que se crea y se construye
    }, []);

    return {
        // si es una variable q apunta al mismo nombre podemos dejarla asi
        images,
        isLoading
    }

}
