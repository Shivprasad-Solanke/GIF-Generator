import './App.css'
import Random from './components/Random';
import Tag from './components/Tag';



function App() {

  
  return (
    <>
      <div className='w-full min-h-screen md:h-full flex flex-col background items-center'>
        <h1 className='text-center font-bold text-xl md:text-3xl  lg:text-4xl py-2 px-10 rounded-xl bg-blue-400 w-11/12 mt-[30px]  md:mt-[40px] rounded-lg'>RANDOM GIFS</h1>

        <div className='flex flex-col w-full items-center gap-y-3 md:gap-y-10 mt-[20px] md:mt-[30px]'>
          <Random/>
          <Tag/>
        </div>
      </div>
    </>
  )
}

export default App;


//32 