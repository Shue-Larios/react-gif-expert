export const getGifs = async (category) => {

    const url = `https://api.giphy.com/v1/gifs/search?api_key=PAAuDmiiVWZjMT40rtap6ZsSB0MJXhki&q=${category}&limit=10`;

    // await provoca que la ejecución de una función async sea pausada hasta que una Promise sea terminada o rechazada, y regresa a la ejecución de la función async después del término.
    // Fetch proporciona una interfaz JavaScript para acceder y manipular partes del canal HTTP, tales como peticiones y respuestas. 
    const resp = await fetch(url);
    //    hacemos el resp a json 
    const { data } = await resp.json();
    //   en la data ya tengo todo lo que necesito de cada imagen
console.log(data);

    const gifs = data.map(img => ({
        // estas son las propiedades que necesito de los gif retornamos un objeto
        // aca le digo q son los campos q quiero y el img es el q stoy mapeando y ahi le concateno el campo q quiero
        id: img.id,
        title: img.title,
        // esta es la direccion exacta d la url
        url: img.images.downsized_medium.url
    }));

    return gifs;
}