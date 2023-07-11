 import axios from "axios";
 const SearchImages=async(term) =>{
    const response=await axios.get('https://api.unsplash.com/search/photos',{
        headers: {
            Authorization: 'Client-ID 8g-4TfNZVmTWzULmgk2hMgQefcfCeTKMlyU3vx4LHTE'
        },
        params: {
            query: term
        }
    });
   // console.log(response);
    return response.data.results;
 };
 export default SearchImages;