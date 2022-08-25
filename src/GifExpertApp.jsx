import { useState } from 'react'; // importamos el useState
import { AddCategory, GifGrid } from './components'; // apuntamos a la carpeta y por defecto va a buscar las importaciones en el index.js


export const GifExpertApp = () => {
    //  para mantener el estado yt el useState inicializa como arreglo
    const [categories, setCategories] = useState(['Todas las Categorias']);

    const onAddCategory = (newCategory) => {
        // aca condicionamos diciendo si categories incluye newCategory
        // si lo incluye se sale y esto nos sirve para no duplicar datos
        if (categories.includes(newCategory)) return;
        // ...categories indica que hacemos una copia de las categorias q tenemos
        // y la colocacion solo es el orden en q se mostraran ya en pantalla
        setCategories([newCategory, ...categories]);
    }
    return (
        <>
            {/* titulo de la aplicacion */}
            <h1>Aca ponemos el titulo</h1>

            {/* estamos importando desde addCategory.jsx  */}
            <AddCategory
                // aca estamos mandando una funcion llamada onAddCategory
                // onNewCategory esto esta emitiendo algo
                onNewCategory={(value) => onAddCategory(value)}
            />

            {/* listado de gif */}
            {
                // .map me permite barrer cada uno de los elementos del arreglo y regresar a algo nuevo
                categories.map((category) => (
                    // aca regresamos el componenete que se creo en GifGrid
                    <GifGrid
                        key={category}
                        category={category}
                    />
                ))
            }




        </>
    )
}
