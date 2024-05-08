import NavBar from "../NavBar"
import Footer from "../Footer"
import Blogs from "../Props/Blogs"
import Notes from "../Notes"


const Blog = () => {
  return (
    <>
    <NavBar/>
    <section className="flex justify-center my-24 h-[60vh]">
    <div className="text-white w-full mx-10  md:mx-0 md:w-[60%] lg:[70%] xl:w-1/3">
    <h1 className="text-xl mb-10 text-[#A8ADB2]">This is where I write. Subscribe to my newsletter to get future posts straight to your inbox.</h1>
      <h1 className="text-3xl text-left">{Notes.map((createNote,index)=>{
        return  <Blogs key={index} index={index} path={createNote.path} emoji={createNote.emoji} title={createNote.title} date={createNote.date} genre={createNote.genre}/>
      })}</h1>
      
      </div>
      </section>

      <Footer/>
    </>
  )
}

export default Blog