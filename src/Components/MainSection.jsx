import PostNotes from "./PostNotes.jsx"
import Notes from "./Notes.js"
import TrendingFlatIcon from '@mui/icons-material/TrendingFlat';
import Footer from "./Footer.jsx";



const MainSection = () => {
  return (
    <div className="relative container w-auto  h-auto  mx-10 md:m-auto flex items-center justify-center md:w-1/2 lg:w-1/2 xl:w-1/3">
      <div className="flex-col absolute left-0 top-10 ">
        <h1 className="text-white text-start text-lg ">RECENT POSTS</h1>

        <div className="mt-5">
            {Notes.map((createNotes,index)=>{
              return  <PostNotes key={index} emoji={createNotes.emoji} title={createNotes.title}
               date={createNotes.date} genre={createNotes.genre} message={createNotes.message}/>
            })}

            <h1 className="text-white my-10 cursor-pointer hover:text-blue-400"><a href="blog">Read more post <TrendingFlatIcon color="white"/></a></h1>
        </div>

        <Footer/>
        
      </div>

   
      </div>
  )
}

export default MainSection