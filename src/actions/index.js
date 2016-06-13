import axios from 'axios';


const ROOT_URL = 'http://localhost:3000/';

export const FETCH_DATA = 'FETCH_DATA';

export function fetchData (data) {
    const url = `${ROOT_URL}`;
    const request = axios.get(url);
    
    return {
        type: FETCH_DATA,
        payload: request
    };
}