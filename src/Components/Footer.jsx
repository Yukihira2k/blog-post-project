import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GithubIcon from '@mui/icons-material/Github';


const Footer = () => {
  return (
    <>
  
    <div className="w-full absolute  container  h-[100px]  md:m-auto flex items-center justify-center  ">
        <div className="flex">
            <p className="text-white absolute left-0  cursor-pointer hover:text-blue-400"><a href="/">© Glen Mirandilla</a></p>

            <div className="">
            <ul className="flex text-white absolute  gap-2 right-0 cursor-pointer">
                <li><TwitterIcon className="hover:text-[#1DA1F2] mb-1"/> </li>
                <li><InstagramIcon className="hover:text-red-300 mb-1"/></li>
                <li><LinkedInIcon className="hover:text-[#0762C8] mb-1"/></li>
                <li><GithubIcon className="hover:text-slate-500 mb-1"/> </li>
            </ul>
            </div>
        </div>
    </div>
   
    </>
  )
}

export default Footer