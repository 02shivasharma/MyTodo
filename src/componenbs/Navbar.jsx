const Navbar = ()=>{
    return(
      <nav className="flex bg-slate-700 justify-between text-white py-2">
       <div className="logo">
         <span className="font-bold text-xl mx-4">iTask</span>
       </div>
       <div>
         <ul className="flex gap-6 mx-9">
           <li className="cursor-pointer hover:font-bold">home</li>
           <li className="cursor-pointer hover:font-bold">your tasks</li>
         </ul>
       </div>
      </nav>

    )
}
export default Navbar;