import Header from "../Props/Header"
import NavBar from "../NavBar"
import {Link} from 'react-router-dom'



const style = "mt-2 text-slate-200 text-lg text-justify"
const spanTag = "text-[#1DA1F2] cursor-pointer"



const About = () => {

  
const handleClick = () => {

  const email = 'glen.mirandilla02@gmail.com';


  const mailtoLink = `mailto:${email}`;


  window.location.href = mailtoLink;
}; 



  return (
    <>
    <NavBar/>
    <section className="flex justify-center my-24">
    <div className="text-white w-full mx-10  md:mx-0 md:w-[60%] lg:[70%] xl:w-1/3 ">
      <Header header="Hey, I&apos;m Glen 👋🏼"/>

      <p className={style}>I love reading, coding and I&apos;m into personal development. 
      I study a lot when it comes to web development and I have lots of different interests.
      Right now, I&apos;m focused on improving and finding a job related to my field of study</p>
      <p className={style}>

      Every day, I immerse myself in the exciting world of web development, constantly honing my skills 
      and pushing the boundaries of what&apos;s possible in digital creation. Building web projects isn&apos;t just 
      a career path for me; it&apos;s a passion and a journey of perpetual growth.
      </p>

      <p className={style}>
        If you want to ge in touch, I&apos;m most responsive over <span className={spanTag} onClick={handleClick} >email</span> and I tend to be pretty active 
        on <span className={spanTag} onClick={()=>{window.open(("https://twitter.com/glen_mirandilla"))}}>Twitter</span> as well.
      </p>

      <Header header2="PREVIOUSLY" />
      <p className={style}>
    I recently graduated from Cavite State University Main-campus,
     where I delved into the world of programming languages and 
     discovered my keen interest in web development. This led me 
     to pursue additional learning opportunities, so I enrolled myself
     in some web development crash courses on Udemy. 
      During this period, I soaked up a ton of valuable knowledge that&apos;s 
      essential for creating web apps and diving into frameworks on a deeper 
      level. You can visit my <span className={spanTag}>personal portfolio</span> or <span className={spanTag}>Github</span> to see my projects.</p>

      <Header header2="USE MANUAL" />
      <p className={style}>I created a playbook on <span className={spanTag}><Link to="/manual">how to work with me</Link></span>. 
      It captures some of my strengths, weaknesses, and principles that 
      I aim to follow.</p>

      <p className="mt-10 text-slate-200 text-lg text-justify"><span className={spanTag}><Link to="/manual">More about me →</Link></span></p>
    </div>


  
    </section>
 
    </>
  )
}

export default About