

const Notes = (props) => {
  return (
    <div className="mt-5 text-white">
        <h1 className=" text-2xl cursor-pointer hover:text-blue-400">{props.emoji} {props.title}</h1>
        <p className=" mt-2">{props.date} • {props.genre}</p>
        <p className="mt-3 text-lg text-justify">{props.message}</p>
    </div>
  )
}

export default Notes