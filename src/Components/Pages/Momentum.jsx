import NavBar from "../NavBar"


const Momentum = () => {
  return (
    <> <NavBar/>
    <section className="flex justify-center my-24 h-[60vh]">
    <div className="text-white w-full mx-10  sm:mx-0 sm:w-[60%] lg:[70%] xl:w-1/3 text-justify">
     <h1 className="text-white text-3xl">🙏 Making Things Happen</h1>
     <p className="mt-2 text-lg text-customGray">May 06, 2024 • Life</p>

    <div className="py-5 gap-5">
      <p className="pb-5">Sample note</p>


   </div>

     <div>
      <ol className="list-decimal list-inside my-5">
        <li></li>
       
      </ol>
     </div>
    </div>
    </section>

    </>
  )
}

export default Momentum