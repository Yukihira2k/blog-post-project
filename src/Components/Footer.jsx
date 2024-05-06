import { FaInstagram, FaTwitter,FaLinkedin,FaGithub } from "react-icons/fa";


const Footer = () => {
  return (
    <>
  
    <div className="w-full absolute  container  h-[100px]  md:m-auto flex items-center justify-center  ">
        <div className="flex">
            <p className="text-white absolute left-0  cursor-pointer hover:text-blue-400"><a href="/">© Glen Mirandilla</a></p>

            <div className="">
            <ul className="flex text-white absolute  gap-2 right-0 cursor-pointer">
                <li className="hover:text-[#1DA1F2] mb-1 flex items-center gap-1"><FaTwitter /></li>
                <li className="hover:text-red-300 mb-1 flex items-center gap-1"><FaInstagram/></li>
                <li className="hover:text-[#0762C8] mb-1 flex items-center gap-1"><FaLinkedin /></li>
                <li className="hover:text-slate-500 mb-1 flex items-center gap-1"><FaGithub/></li>
            </ul>
            </div>
        </div>
    </div>
   
    </>
  )
}

export default Footer