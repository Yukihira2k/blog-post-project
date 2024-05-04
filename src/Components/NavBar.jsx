const NavBar = () => {
  return (
    <div className=" flex h-auto w-auto items-center justify-center ">
        <div className="flex m-12  gap-[290px] ">
            <div>
                <h1 className="text-xl cursor-pointer text-[#A8ADB2]" >GLEN MIRANDILLA</h1>
            </div>
            
            <div>
                <ul className="flex gap-5 text-xl cursor-pointer text-[#A8ADB2]">
                    <li>About</li>
                    <li>Blog</li>
                    <li>Newsletter</li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default NavBar