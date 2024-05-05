import profile from "../assets/profile.jpg"
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GithubIcon from '@mui/icons-material/Github';

import { RoughNotation} from "react-rough-notation";



const Hero = () => {
  return (
    <div className=" mt-4 w-auto h-auto flex  items-center justify-center m-auto md:ml-[10%]  lg:mt-[5%] ">
        <div className="flex flex-wrap items-center justify-center gap-10 m-10">
        <div>
        <img src={profile} className="h-[150px] w-full  bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 rounded-full p-[2px] bg-white"/>
        </div>

        <div className=" flex-col">
        <p className="text-[#A8ADB2] text-left text-4xl  w-auto md:text-center lg:text-3xl md:text-2xl lg:w-1/2">
       
            <RoughNotation type="underline" color="red" order="1" show={true}>
            <span className="text-white ">
            Hey, I&apos;m Glen.</span> </RoughNotation> I&apos;m a  React developer and a Gym rat.
            
         
            </p>
        

        <div className="mt-5 ">
            <ul className="flex flex-wrap items-center   text-[#A8ADB2] gap-5 cursor-pointer ">
                <li className="hover:text-[#1DA1F2] mb-1"><TwitterIcon className="text-[#1DA1F2] mb-1"/> Twitter</li>
                <li className="hover:text-[#1DA1F2] mb-1"><InstagramIcon className="text-red-300 mb-1"/> Instagram</li>
                <li className="hover:text-[#1DA1F2] mb-1"><LinkedInIcon className="text-[#0762C8] mb-1"/> LinkedIn</li>
                <li className="hover:text-[#1DA1F2] mb-1"><GithubIcon className="text-slate-50 mb-1"/> Github</li>
            </ul>
            
        </div>
        </div>
        </div>
    </div>
  )
}

export default Hero