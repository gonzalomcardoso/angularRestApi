import { SearchResultForm } from './search-result-form';

export const SEARCHRESULTFORMS: SearchResultForm[] = [
    {
            id : 10,
            urlSearch : 'https://gateway.marvel.com:443/v1/public/characters/'
    },
    {
        id : 11,
        urlSearch : 'https://gateway.marvel.com:443/v1/public/characters/${characterId}/series?'
    }
]