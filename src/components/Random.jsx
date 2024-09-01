import Spinner from "./Spinner";
import useGif from "../hooks/useGif";

const Random = () => {

    
    const {gif, loading, fetchData} = useGif();
    // console.log(gif+"  "+loading+"  "+fetchData());
  return (
    <div className="w-4/5 md:w-1/2  bg-green-400 rounded-lg border border-black flex flex-col items-center gap-y-4 md:gap-y-5 mt-[15px] p-2 shadow-lg shadow-slate-600">

        <h1 className="  mt-[15px] text-lg md:text-2xl underline uppercase font-bold">Random Gif</h1>


        {
          loading ? 
            (<Spinner/>) : 
            (<img src={gif} width='450' />)
        }

        
    
        
        <button 
            onClick={ () => fetchData() }
            className="font-semibold border-[1px] shadow-md shadow-green-300 hover:border-2 hover:border-slate-950 hover:shadow-md hover:shadow-green-600 bg-yellow-500 text-lg py-2 rounded-lg w-10/12 mb-[20px] transition-all duration-200">
            Generate
        </button>
    </div>
  )
}

export default Random;