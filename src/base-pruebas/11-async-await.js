export const getImagen = async() => {
    try {
        const apiKey = 'LuZK2W4jrwBRSALJmMAch9MlUeSaUs16';
        const resp   = await fetch(`http://api.giphy.com/v1/gifs/random?api_key=${ apiKey }`);
        const { data } = await resp.json(); 

        const { url } = data.images.original;
        return url;
    } catch (error) {
        // console.error(error)
        return 'Image not found!';
    }
}

getImagen();