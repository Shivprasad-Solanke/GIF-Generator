import axios from "axios";
import { useEffect, useState } from "react";


const useGif = (tag) => {

    const API_KEY = import.meta.env.VITE_GIPHY_API_KEY;

      const  randomUrl =`https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;
      // const  url =`https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${tag}`;



    const [gif, setGif] = useState("");
    const [loading, setLoading] = useState(false);
    
      async function fetchData() {
        setLoading(true);
        console.log(tag);

        const {data} = await axios.get(tag ? `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${tag}` : randomUrl );
        const imageSource =  data.data.images.downsized_large.url;
        setGif(imageSource);
        setLoading(false);
        
      }

    useEffect( () => {
      fetchData();      
    },[])
    

    return {
      gif,loading,fetchData
  };

}

export default useGif