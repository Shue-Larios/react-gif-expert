import { GifItem } from './GifItem'; // importamos
import { useFetchGifs } from '../hooks/useFetchGifs';


export const GifGrid = ({ category }) => {
    // useFetchGifs esto es un hook personalizado
    // dentro de las llaves es todo lo que vamos a recibir
    const { images, isLoading } = useFetchGifs(category);

    return (
        <>

            <h3>{category}</h3>
            {
                // mostramos un Loading con una condicion corta y concatenamos lo q queremos q diga
                isLoading && (<h2>Cargando...</h2>)
            }

            {/* hacemos un div con su nombre para ser modificado x css */}
            {/* aca no podemos usar la palabra reservada class xkes un archivo jsx y eso significa crear una clase */}
            <div className="card-grid">
                {
                    images.map((image) => (
                        // est es un componente que tenemos en gifItem
                        <GifItem
                            key={image.id}
                            // todas las propiedades q vengasn en el image con esta linea las estamos exparciendo 
                            {...image}
                        />
                    ))
                }
            </div>

        </>
    )
}
