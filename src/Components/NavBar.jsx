import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import {useState} from 'react'
import {Link} from 'react-router-dom'
const NavBar = () => {

    const[nav,setNav]=useState(false);

    const links =[
        {
            id:1,
            linkName:'About',
            link:'/About'
        },
        {
            id:2,
            linkName:'Blog',
            link:'/Blog'
        },
        {
            id:3,
            linkName:'Newsletter',
            link:'/Newsletter'
        },
     
    ]
  return (
    <div className="flex justify-center gap-[10%] items-center w-full px-4  text-white mt-10 ">
        <div>
            <h1 className="text-3xl ml-2 cursor-pointer"><Link to="/">DevelopedbyGlen</Link></h1>
        </div>

        <ul className="hidden md:flex">
            {links.map(({id,link,linkName}) =>(
                    <li key={id}className="px-4 cursor-pointer capitalize font-medium text-gray-500 hover:text-blue-500 duration-200"><Link to={link}> {linkName}</Link></li>
            ))}

    
        </ul>

        <div onClick={()=> setNav(!nav)}className="cursor-pointer pr-4 z-10 text-gray-500 md:hidden">
          {nav? <CloseIcon size={30} /> : <MenuIcon size={30}/> }
        </div>

        {nav&&(

        <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-[#0C0F11]">
        {links.map(({id,link}) =>(
        <li key={id}className="px-4 cursor-pointer capitalize py-6 text-4xl"><Link to={link} smooth duration={500} onClick={()=> setNav(!nav)}>{link}</Link></li>
        ))}

</ul>

        )}

    
            
       
    </div>
  )
}

export default NavBar