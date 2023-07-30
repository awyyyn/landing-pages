import logo from '../assets/logo-light.png.png'; 

interface headerProps {
    toggleBurger: () => void
    isOpen: boolean
}

const Header = ({isOpen, toggleBurger}: headerProps) => {

    return (
        <>
            <header className="h-[88px] relative  bg-black-2 flex items-center px-[20px]  md:px-[40px] lg:px-[70px]  justify-between">
                <img 
                    className='h-[32px] sm:h-[42px]'
                    src={logo}
                    alt='Logo'
                />
                <nav className='space-x-5 hidden sm:block'>
                    <a href='#about' className='link'>About</a>
                    <a href='#services' className='link'>Our Services</a>
                    <a href='#work-with-us' className='link'>Work with us</a>
                    <a href='#blog' className='link'>Blog</a>
                </nav>

                <div className='gap-x-2 items-center hidden sm:flex'>
                    <div className='max-h-[16px] min-h-[16px] min-w-[16px] max-w-[16px] gradient__blue rounded-full' />
                    <button className='uppercase bg-none text-white text-sm'>
                        Get in touch
                    </button>
                </div>
                <button onClick={toggleBurger} className='block sm:hidden'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6 text-white">
                        <path stroke-linecap="round" stroke-linejoin="round" d={!isOpen ? `M3.75 9h16.5m-16.5 6.75h16.5` : 'M6 18L18 6M6 6l12 12'} />
                    </svg> 

                </button>
                {
                    isOpen && 
                    <nav className='flex flex-col sm:hidden absolute py-5 pr-5 bg-black-2 shadow-2xl right-0 gap-y-4 w-full top-[88px] z-[99]  items-end'>
                        <a onClick={toggleBurger} href='#about' className='link text-2xl'>About</a>
                        <a onClick={toggleBurger} href='#services' className='link text-2xl'>Our Services</a>
                        <a onClick={toggleBurger} href='#work-with-us' className='link text-2xl'>Work with us</a>
                        <a onClick={toggleBurger} href='#blog' className='link text-2xl'>Blog</a>
                        <div className='gap-x-2 items-center flex'>
                            <div className='max-h-[16px] min-h-[16px] min-w-[16px] max-w-[16px] gradient__blue rounded-full' />
                            <button className='uppercase bg-none  text-xl text-white '>
                                Get in touch
                            </button>
                        </div>
                    </nav>
                }
            </header>
        </>
    )
}

export default Header