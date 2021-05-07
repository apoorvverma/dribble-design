const Tile = () => {
    return  (
        <div className="">
           <div className="z-0 rounded-full md:h-60 md:w-60 h-36 w-36 md:ml-20 md:-mt-24 ml-6 -mb-36 bg-blue-400 shadow-xl"></div>
           <div className="z-20 rounded-tl-full rounded-bl-full h-32 w-16 -mb-64 mt-24 md:mt-0 md:h-72 md:w-36 md:-mb-72 bg-blue-100  ml-auto "></div>
           <img className="z-30 w-3/4 rounded-3xl my-6 mx-auto shadow-xl" src="/cash.jpg"></img>
           <div className="z-90 invisible sm:visible mb-40 lg:mb-72 shadow-lg">
               <img className="w-28 rounded-xl my-6 shadow-lg ml-28 -mt-40 lg:w-56 lg:-mt-72" src="/cash2.jpeg"></img>
                <img className="w-28 rounded-xl my-6 shadow-lg ml-auto mr-10 -mt-40 lg:w-56 lg:-mt-72" src="/cash3.jpeg"></img>
           </div>
        </div>
    )
}

export default Tile;