import NavBar from "../NavBar"
import Footer from "../Footer"


const Momentum = () => {
  return (
    <> <NavBar/>
    <section className="flex justify-center my-24 ">
    <div className="text-white w-full mx-10  sm:mx-0 sm:w-[60%] lg:[70%] xl:w-1/3 text-justify">
     <h1 className="text-white text-3xl text-left">🙏 Overcoming the fear of making mistakes:
</h1>
     <p className="mt-5 text-lg text-customGray">May 09, 2024 • Life</p>

    <div className="py-5 gap-5 text-xl">
      <p className="pb-5">Here I am, seated before my computer, weary and restless, wondering what
       actions should I take for me to be good at expressing my thoughts through writing. I'm fully
        aware that my vocabularies are limited and this is also my first time writing about my thoughts
         and experience but what&apos;s more important for me is I&apos;m finally taking my first step in improving
          how to share my ideas.</p>

      <p>Before I dive into something new, there&apos;s this quote I always 
        remember: &quot;Take risks, make mistakes. That&apos;s how you grow. Pain nourishes your courage. You have
         to fail in order to practice being brave&quot; -Mary Tyler Moore. Many of
          us have experienced similar feelings at some stage, but it&apos;s through
           our mistakes that we truly learn and evolve. This gentle reminder
            gives me the power to overcome my fear of making mistakes. This is
             a short and worthwhile read. These were the quotes that made a 
             huge impact on me</p>
      </div>

      <h2 className="text-xl">QUOTES</h2>

     <div className="my-5 text-xl">
      <ul className="list-disc list-outside text-left w-auto ml-5">
        <li className="pb-2">People suffer more in imagination rather than reality - Seneca</li>
        <li className="pb-2">It is not death that a man should fear, but he should fear never beginning to live. - Marcus Aurelius </li>
        <li className="pb-2">Don&apos;t fear failure. Fear being in the exact same place next year as you are today.</li>
        <li className="pb-2">It is impossible to live without failing at something unless you live so cautiously that you might as well not have lived at all, in which case you have failed by default. - J.K. Rowling</li>
        <li className="pb-2">Fear regret more than failure. - Taryn Rose</li>
        <li className="pb-2">Failure is the opportunity to begin again more intelligently. - Henry Ford</li>
        <li className="pb-2">Every failure brings with it the seed of an equivalent success. - Napoleon Hill</li>
        <li className="pb-2">Failure is a part of the process of success. People who avoid failure also avoid success. - Robert T. Kiyosaki</li>
        <li className="pb-2">Failure is not fatal, but failure to change might be. - John Wooden</li>
        <li className="pb-2">The master has failed more times than the beginner has even tried. - Stephen McCranie</li>
       
      </ul>
     </div>



     <div className="border-t-2 border-white text-xl">
      <p className="mt-5">Thanks for reading my 7am random blog post project! I hope you enjoyed this post, stay tuned to read future posts like this one.  </p>

     </div>
    </div>
    
    </section>
    <Footer/>
    </>
  )
}

export default Momentum