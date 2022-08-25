import { useState } from 'react'; // importamos el useState

// estamos exportando esta categoria
export const AddCategory = ({ onNewCategory }) => {

    // el valor inicial del inputvalue es vacio
    const [ inputValue, setInputValue ] = useState('');

    // aca destructuramos el target para poder acceder al evento de value
    const onInputChange = ({ target }) => {
        // accedemos al evento del value para poder escribir en el input
        setInputValue( target.value );
    }

    const onSubmit = ( event ) => {
        // esto nos ayuda para evitar el refresh del navegador
        event.preventDefault();
        // esta es una validacion eliminando espacios si es menos o igual a 1 se cumple y se ejecuta si esta vacio o cero no hace nada
        if( inputValue.trim().length <= 1) return;
        // setCategories( categories => [ inputValue, ...categories ]);
        // limpiamos 
        setInputValue('');
        // mandamos a llamar onNewCategory y le mandamos el input limpio
        onNewCategory( inputValue.trim() );
    }

    return (
        // este es un formulario con input
        //  Este evento onSubmit= se encarga de ejecutar un determinado código de javascript al realizarse el envío de un formulario automatico con enter
        <form onSubmit={ onSubmit }>
            <input 
    // esta es como normalmente solo que formateado el codigo
                type="text" 
                placeholder="Buscar gifs" 
                // aca le digo q el input tipo text tiene el mismo valor que el inputValue
                value={ inputValue }
                // aca le decimo al evento que funcion ejecutar
                onChange={ onInputChange }
            />
        </form>
    )
}
