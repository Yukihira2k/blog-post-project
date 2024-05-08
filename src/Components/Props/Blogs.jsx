import {Link} from "react-router-dom"

const blogNotes = ({title,date,genre,emoji,path}) => {
  return (
    <>
    <div className="w-full my-5">

       <h1 className="text-xl text-white cursor-pointer hover:text-blue-400"><Link to={path}>{emoji} {title}</Link>  </h1>
        <p className="text-base mt-1 text-[#A8ADB2]">{date} • {genre}</p>
        </div>
    </>
  )
}

export default blogNotes