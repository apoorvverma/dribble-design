const Nav = () => {
    return  (
        <div className="flex justify-evenly p-5">
            <img className="w-20" src="/unflip.png" alt="logo" />
            <div className="md:flex hidden">
                <p className="px-3 my-auto md:px-4 lg:px-6 font-semibold">Product 💎</p>
                <p className="px-3 my-auto md:px-4 lg:px-6 text-gray-400 font-semibold">Features</p>
                <p className="px-3 my-auto md:px-4 lg:px-6 text-gray-400 font-semibold">Pricing</p>
            </div>
            <div className="flex">
                <button className="rounded-lg text-black px-3 py-1 border border-gray-400 hover:bg-gray-100 mr-4">
                    Sign Up
                </button>
                <button className="flex rounded-lg px-3 py-1 bg-black text-white">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor" >
                    <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                </svg>
                    Log In
                </button>
                {/* <div className="md:hidden mt-1 ml-4"> */}
                <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 md:hidden mt-1 ml-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
                {/* </div> */}
            </div>
        </div>
    )
    
}

export default Nav;