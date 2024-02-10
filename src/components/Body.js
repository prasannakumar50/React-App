


const Header=()=>{
  return (<div className="Header  p-8 border bg-black text-white text-lg flex flex-wrap justify-end ">
    <div className="nav-items items-center ">
    <ul className="flex ">
        <li className="px-4">Home</li>
        <li className="px-4">About Us</li>
        <li className="px-4">Contact</li>
        <li className="px-4">Login</li>
    </ul>
    </div>
  </div>)
}

const Body =() =>{
   return <div>
      <Header />
   </div>
}


export default Body;
