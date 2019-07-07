import config from './config';

// Opcion 1
const apiKey = config.apiKey;
// Opcion 2
//const { apiKey } = config;

const URL = `http://ws.audioscrobbler.com/2.0/?method=geo.gettopartists&country=:country&api_key=${apiKey}&format=json`;

export default function getAllArtists(country) {
    const url = URL.replace(':country', country);
    return fetch(url)
        .then(res => res.json())
        .then(json => json.topartists.artist);
}