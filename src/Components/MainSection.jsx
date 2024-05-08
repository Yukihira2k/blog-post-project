import PostNotes from "./Props/PostNotes.jsx"
import Notes from "./Notes.js"
import TrendingFlatIcon from '@mui/icons-material/TrendingFlat';




const MainSection = () => {
  return (
    <div className="flex justify-center my-16 ">
      <div className="text-white w-full mx-10  md:mx-0 md:w-[60%] lg:[70%] xl:w-1/3 ">
        <h1 className="text-white text-start text-lg ">RECENT POSTS</h1>

        <div className="mt-5">
            {Notes.map((createNotes,index)=>{
              if(index < 3){
                return <PostNotes key={index} path={createNotes.path} emoji={createNotes.emoji} title={createNotes.title}
                date={createNotes.date} genre={createNotes.genre} message={createNotes.message}/>
              }
            })}

            <h1 className="text-white my-10 cursor-pointer hover:text-blue-400"><a href="/blog">Read more post <TrendingFlatIcon color="white"/></a></h1>
        </div>

       
      </div>

   
      </div>
  )
}

export default MainSection