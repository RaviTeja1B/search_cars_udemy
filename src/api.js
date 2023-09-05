import axios from 'axios';
const url = 'https://api.unsplash.com/search/photos';

const searchImage= async (term)=>{
const response_url= await axios.get(url, {headers: {
    Authorization: 'Client-ID c0MFmoPh04Z7kH0gSQEPMNHOVzcNDiMm_Ru2OQugfs4'
},
params: {
    query: term 
}
});
console.log(response_url.data)
return response_url.data.results;
}

export default searchImage;