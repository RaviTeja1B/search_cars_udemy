import axios from 'axios';
const url = 'https://api.unsplash.com/photos';

let options={
    headers: {
        Authorization: 'Client-ID c0MFmoPh04Z7kH0gSQEPMNHOVzcNDiMm_Ru2OQugfs4'
    },
    params: {
        query: 'cars'
    }
}

const searchImage= async ()=>{
const response_url= await axios.get(url, options);
console.log(response_url)
return response_url;
}

export default searchImage;