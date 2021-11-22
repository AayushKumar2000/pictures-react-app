import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  responseType: "json",
  headers:{
    Authorization:'Client-ID 531de0ef343fae00faf14ce2ff330eeecc5fa0ae75498ce5f79fc84782094f8d'
  },

});
