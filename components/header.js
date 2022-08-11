import Link from 'next/link'

export default function Header(){
    return(
        <>
            <header className="text-gray-600 body-font">
                <div className="flex flex-col items-center">
                    <nav className="flex flex-col text-center mt-10">

                        <Link href="/projects">
                            <a className="hover:text-gray-900">Service Design by Day</a>
                        </Link>

                        <Link href="https://creativecoding.vercel.app/">
                            <a className="hover:text-gray-900">Creative Coding by Night</a>
                        </Link>

                        <br/>
                        
                        <Link href="/projects">
                            <a className="hover:text-gray-900">Blog</a>
                        </Link>
                    </nav>

                    {/* <button className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">Button 
                        <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
                            <path d="M5 12h14M12 5l7 7-7 7"></path>
                        </svg>
                    </button> */}

                </div>
            </header>        

        </>
    )
}