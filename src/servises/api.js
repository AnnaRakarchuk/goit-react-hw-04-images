import axios from "axios";

const URL = 'https://pixabay.com/api/';
const KEY = '30528443-0adebe35fd9faed8f9ad16b0f';

export const fetchImages = (searchQuery, page) =>{
    return axios.get(
        `${URL}?q=${searchQuery}&page=${page}&key=${KEY}&image_type=photo&orientation=horizontal&per_page=12`
    );
}

