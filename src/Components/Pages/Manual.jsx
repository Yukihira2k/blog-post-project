import NavBar from "../NavBar"
import Header from "../Props/Header"
import Footer from "../Footer"

const style = "mt-2 text-slate-200 text-lg text-justify"
const spanTag = "text-[#1DA1F2] cursor-pointer"

const handleClick = () =>{
    window.open("https://www.16personalities.com/isfj-personality")
}

const Manual = () => {
  return (
    <>
    <NavBar/>
    <section className="flex justify-center my-16">
    <div className="text-white w-full mx-10  md:mx-0 md:w-[60%] lg:[70%] xl:w-1/3 ">
         <div className="mb-5">
        <Header header="USER MANUAL"/>
        <p className={style}>This is a playbook on everything Glen. It captures more about me and how I operate in a working environment. </p>
        </div>

    <Header header2="🏠 OVERVIEW"/>

    <div className="ml-8 mt-5">
       <ul className="list-disc">
       <li className="text-lg"><span className="text-xl">ISFJ-A THE DEFENDER: </span>Introverted, Sensing, Feeling, Judging. I think this <span className={spanTag} onClick={handleClick}>description</span> is a solid one.</li>
        <li className="text-lg"><span className="text-xl">Type 9 Enneagram: </span> &quot;an honest and peaceful person who wants to live free in a harmonious environment. Naturally good, you are a purely nice company, you know how to 
        connect with people. Bringing people together and sharing experiences is something you’re good at. You avoid everything that brings you trouble which sometimes turns into a passive attitude that can deeply hurt you. When 
        you understand that boundaries, communication and self-expression do not necessarily lead to conflict since they are just a display of self-love, you never lose yourself to conflict.&quot; <a onClick={()=> (window.open("https://enneagramuniverse.com/enneagram/test/complete-enneagram-test/complete-enneagram-test-result-type9/"))} className={spanTag}>Yikes</a>. </li>
       </ul>

    </div>


    <Header header2="👍🏼 STRENGTHS"/>
   
  
    <div className="ml-8 mt-5">
    <ul className="list-disc">
        <li><span className="text-xl">Empath and understanding:</span> I&apos;m a listener and I have the capacity to understand and manage one&apos;s emotion effectively, as well
        as to empathize with and relate to the emotions of others. </li>
        <li><span className="text-xl">Strong work ethic:</span> Dedicated and has a burning desire to provide best results when it comes to work. I&apos;m a workaholic at heart and consistently go above and beyond expectations to meet goals.</li>
        <li><span className="text-xl">Stress management: </span>Since I started my personal development journey, I found ways to cope with and manage stress effectively, employing strategies such as relaxation techniques, and self-care practices to maintain well-being.</li>
       </ul>
    </div>


    <Header header2="👎🏼 WEAKNESSES"/>

    <div className="ml-8 mt-5">
    <ul className="list-disc">
        <li><span className="text-xl">Workaholic at heart:</span> I have a tendency to become overly absorbed in my work resulting to extended working hours. While my dedication and commitment to my job are my strenghts, I recognize that
        maintaining a healthy work-life balance is essential for overall well-being and sustained productivity.</li>
        <li><span className="text-xl">Having a hard time saying NO:</span> I often find it challenging to say no to additional responsibilities, or requests, especially when I want to be helpful and accomodating to others.
        While this willingness to assist can be a strength in fostering teamwork and collaboration, I recognized that it can also lead to overcommitment and burnout if not managed effectively.</li>
        <li><span className="text-xl">Starting simple: </span>My brain will skip baseline approaches and try to do too much, too fast. Don&apos;t be afraid to rein me in.</li>
       </ul>
    </div>

  
    <Header header2="🛠 PRINCIPLES"/>

   

    <div className="ml-8 mt-5">
    <ul className="list-disc">
    <li><span className="text-xl">Avoidance of suffering is a form of suffering:</span> efforts to evade discomfort or pain can paradoxically lead to additional suffering.</li>
    <li><span className="text-xl">Embrace Reality and Deal with It:</span> Accept reality as it is, rather than how we wish it to be, and take proactive steps to address challenges and opportunities head-on. </li>
    <li><span className="text-xl">Values and Priorities:</span> Clarify your core values and prioritize what truly matters to you, focusing your time and energy on pursuits that align with your deepest desires and beliefs.
</li>
    <li><span className="text-xl">Dreams without goals are just dreams:</span> a quote attributed to Denzel Washington. Simply having dreams or aspirations is not enough to achieve success or fulfillment. Without clear goals and a plan of action to pursue them, dreams remain abstract and elusive. Goals provide direction, purpose, and motivation, transforming dreams into achievable objectives.</li>
    <li><span className="text-xl">Make your habits attractive:</span> Associate desired habits with positive emotions or rewards, making them more appealing and motivating to engage in consistently.</li>
    <li><span className="text-xl">Seek Excellence:</span>  Strive for excellence in everything you do, setting high standards and continuously pushing yourself and your team to achieve greatness.</li>
    <li><span className="text-xl">Constantly Evolve:</span> Embrace change and adaptability, recognizing that continuous learning and evolution are essential for long-term success and resilience.</li>

    </ul>
    </div>

    <Header header2="📚 FAVORITE BOOKS"/>
    <p className={style}>What I know and how I think is heavily influenced by the things I&apos;ve read. Here are a few of the big ones:</p>

    <div className="ml-8 mt-5">
    <ul className="list-disc">
    <li className="text-lg text-[#1DA1F2] cursor-pointer hover:text-blue-300" onClick={()=>{window.open("https://jamesclear.com/atomic-habits")}}>Atomic Habits: An Easy & Proven Way to Build Good Habits & Break Bad Ones</li>
    <li className="text-lg text-[#1DA1F2] cursor-pointer hover:text-blue-300" onClick={()=>{window.open("https://www.goodreads.com/en/book/show/53642699")}}>The Mountain Is You: Transforming self-sabotage into self mastery</li>
    <li className="text-lg text-[#1DA1F2] cursor-pointer hover:text-blue-300" onClick={()=>{window.open("https://www.goodreads.com/book/show/28257707-the-subtle-art-of-not-giving-a-f-ck")}}>Subtle Art of Not Giving a F*ck: A Counterintuitive Approach to Living a Good Life</li>
    <li className="text-lg text-[#1DA1F2] cursor-pointer hover:text-blue-300" onClick={()=>{window.open("https://www.principles.com/")}}>Principles by Ray Dalio: Life and work principles</li>
    <li className="text-lg text-[#1DA1F2] cursor-pointer hover:text-blue-300" onClick={()=>{window.open("https://www.charlesduhigg.com/the-power-of-habit")}}>The Power of Habit: Why we do what we do in life and business</li>
    </ul>
    </div>

    <Header header2="🙏🏼 FAVORITE QUOTE"/>

    <div className="ml-8 mt-5 border-slate-500 border-l-4 px-3 py-2 bg-zinc-900">
    <p className={style}>Dreams without goals are just dreams, and ultimately they fuel disappointment. On the road to achieving your dreams you must apply discipline but more importantly consistency. Because without commitment you&apos;ll never start but without consistency you&apos;ll never finish - <span className={spanTag}>Denzel Washington</span></p>
     </div>

     <Header header2="📲 GET IN TOUCH"/>

     <p className={style}>
        If you want to ge in touch, I&apos;m most responsive over <span className={spanTag} onClick={handleClick} >email</span> and I tend to be pretty active 
        on <span className={spanTag} onClick={()=>{window.open(("https://twitter.com/glen_mirandilla"))}}>Twitter</span> as well.
      </p>

    </div>
    </section>

    <Footer/>
    </>
  )
}

export default Manual