class MarvelServices{
    _apiBase='https://gateway.marvel.com:443/v1/public/';
    _apiKey='apikey=a63b19fcbf07a1e7570d674a3be4f618';
    _baseOffset=210;

    getResource=async (url)=>{
        let res= await fetch(url);
        if(!res.ok){
            throw new Error(`Error fetch respond ${url}, status ${res.status}`);
        }
        return await res.json();

    }

    getAllCharacters=async (offset=this._baseOffset)=>{
        const res= await this.getResource(`${this._apiBase}characters?limit=9&offset=${offset}&${this._apiKey}`);
        return res.data.results.map(item=>this._tranformData(item))
    }
    getCharacter=async (id)=>{
        const res= await this.getResource(`${this._apiBase}characters/${id}?${this._apiKey}`);
        return this._tranformData(res.data.results[0]);
    }
    _tranformData=(res)=>{
        return {
            id:res.id,
            name: res.name,
            thumbnail: res.thumbnail.path +'.'+ res.thumbnail.extension,
            description: res.description,
            homepage: res.urls[0].url,
            wiki:res.urls[1].url,
            comics:res.comics.items
        }
    }
}

export default MarvelServices;