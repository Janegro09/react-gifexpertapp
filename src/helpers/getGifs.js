
export const getGifs = async(category) => {
        const url =`https://api.giphy.com/v1/gifs/search?limit=5&api_key=Z6fB0VEF0OJ8eHfzvtx4zk8tRzsLq2m2&q=${encodeURI(category)}`
        const resp = await fetch(url);
        const {data} = await resp.json();
        
        const gifs = data.map(img => {
            return {
                id: img.id,
                title: img.title,
                url: img.images?.downsized_medium.url
            }
        })

        return gifs;        
    }
