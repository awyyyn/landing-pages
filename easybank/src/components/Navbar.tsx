 
import logo from '../assets/logo.svg'
import hamburger from '../assets/icon-hamburger.svg'
import close from '../assets/icon-close.svg'  
import Button from './Button'

interface navbarProps {
    isOpen: boolean
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
}
 
const Navbar = ({isOpen, setIsOpen}: navbarProps) => {

    return (
        <header className='px-5 tablet:px-16 laptop:px-20 widescreen:px-28 shadow-lg fixed top-0 w-full bg-neutral-white z-[99]'>
            <nav className='flex z-[99] relative py-3  justify-between items-center'>
                <img src={logo} alt='easybank logo' className='object-contain' />
                <button onClick={() => setIsOpen(!isOpen)} className='active:bg-neutral-blue laptop:hidden transition-all min-h-[35px] rounded-full min-w-[35px] text-center'>
                    <img src={isOpen ? close : hamburger} className='mx-auto scale-[90%]'  />
                </button>
                <div className='hidden laptop:block text-neutral-grayish space-x-7'>
                    <a href='#' className='nav-links'>Home</a>
                    <a href='#' className='nav-links'>About</a>
                    <a href='#' className='nav-links'>Contact</a>
                    <a href='#' className='nav-links'>Blog</a>
                    <a href='#' className='nav-links'>Careers</a>
                </div>
                <Button value='Request Invite' classnames='py-2 hidden laptop:block' />
            </nav> 
        </header>
    )
}

export default Navbar
