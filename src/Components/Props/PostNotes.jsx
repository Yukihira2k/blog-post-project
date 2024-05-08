import {Link} from 'react-router-dom'

const Notes = ({path,emoji,title,date,genre,message}) => {
  return (
    <div className="mt-5 text-white">
        <h1 className=" text-2xl cursor-pointer hover:text-blue-400"><Link to={path}>{emoji} {title}</Link></h1>
        <p className=" mt-2">{date} • {genre}</p>
        <p className="mt-3 text-lg text-justify">{message}</p>
    </div>
  )
}

export default Notes