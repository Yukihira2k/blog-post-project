import { FaInstagram, FaTwitter,FaLinkedin,FaGithub } from "react-icons/fa";


const Footer = () => {
  return (
    <>
  
    <div className="flex justify-center my-16  ">
        <div className="flex items-center justify-between mx-10 text-white w-full  md:mx-0 md:w-[60%] lg:[70%] xl:w-1/3">
            <p className="text-white   cursor-pointer hover:text-blue-400"><a href="/">© Glen Mirandilla</a></p>

            <div className="">
            <ul className="flex text-white   gap-2  cursor-pointer">
                <li className="hover:text-[#1DA1F2]  flex items-center gap-1"><FaTwitter /></li>
                <li className="hover:text-red-300  flex items-center gap-1"><FaInstagram/></li>
                <li className="hover:text-[#0762C8]  flex items-center gap-1"><FaLinkedin /></li>
                <li className="hover:text-slate-500  flex items-center gap-1"><FaGithub/></li>
            </ul>
            </div>
        </div>
    </div>
   
    </>
  )
}

export default Footer