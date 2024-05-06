const Header = (props) => {
  return (
    <>
    <h1 className="text-3xl">{props.header}</h1>
    <h2 className="text-xl mt-5">{props.header2}</h2>
    </>
  )
}

export default Header
