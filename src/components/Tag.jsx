import { useState } from "react"
import Spinner from "./Spinner";
import useGif from "../hooks/useGif";

const Tag = () => {

    const [tag, setTag] = useState('bike');  
    const {gif, loading, fetchData} = useGif(tag);
    

  return (
    <div className="md:w-1/2 w-4/5   bg-blue-400 rounded-lg border border-black flex flex-col items-center gap-y-5 mt-[15px] p-2 mb-10 shadow-lg shadow-slate-600">

        <h1 className="  mt-[15px] text-lg md:text-2xl underline uppercase font-bold">Random {tag} Gif</h1>


        {
          loading ? 
            (<Spinner/>) : 
            (<img src={gif} width='450' />)
        }

        <input 
          type="text" 
          className="hover:shadow-md hover:shadow-blue-600   border-[1px] border-slate-900 hover:border-2 font-semibold bg-blue-200 text-lg py-1 rounded-lg w-10/12 mb-[3px] text-center transition-all duration-200"
          onChange={ (event) => {setTag(event.target.value)}} 
          value={tag}
        />
        
        <button 
            onClick={() => {
              fetchData(tag)
              }
            }
            className="border shadow-md shadow-blue-300 hover:shadow-md hover:shadow-blue-600 hover:border-2 font-semibold hover:border-slate-950 bg-yellow-500 hover:bg-yellow-600 text-lg py-2 rounded-lg w-10/12 mb-[20px] transition-all duration-200"> 
            Generate
        </button>
    </div>
  )
}

export default Tag;