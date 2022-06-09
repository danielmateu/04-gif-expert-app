export const getGifs = async (category) => {
    const url =
        `https://api.giphy.com/v1/gifs/search?q=${ encodeURI(category)}&limit=16&lang=en&api_key=mWfciPfOHbKkyHQBRmGrBPMXJeULNHyH`;
    const resp = await fetch(url);
    const { data } = await resp.json();

    const gifs = data.map((data) => {
        return {
            id: data.id,
            title: data.title,
            img: data.images?.downsized_medium.url,
        };
    });
    return gifs;
    
};