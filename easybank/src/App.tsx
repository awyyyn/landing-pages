 
import { About, Hero, Navbar, Blog, Footer } from "./components"
import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion'; 
export default function App() {

  const [isOpen, setIsOpen] = useState(false);

  return (
    <> 
      <Navbar isOpen={isOpen} setIsOpen={() => setIsOpen(!isOpen)} /> 
      <AnimatePresence>
        {isOpen &&
          <motion.nav
            initial={{opacity: 0, translateX: '-50%', translateY: '-10%' }}
            animate={{opacity: 1, translateX: '-50%',  translateY: 0 }}
            exit={{opacity: 0, translateY: '-10%'}}
            transition={{
              ease: 'easeInOut',
              duration: 0.3,
              staggerChildren: 0.5,
              delayChildren: 0.1,
            }} 
            className='fixed laptop:hidden top-20 tablet:min-w-[60%] rounded-md flex flex-col bg-neutral-white -translate-x-[50%] left-[50%] min-w-[75%] items-center py-3 gap-y-5 text-lg shadow-5xl z-50'>
              <a href='#'>Home</a>
              <a href='#'>About</a>
              <a href='#'>Contact</a>
              <a href='#'>Blog</a>
              <a href='#'>Careers</a>
          </motion.nav>
        }
      </AnimatePresence>  
      <main> 
        <Hero />
        <About />
        <Blog />
        <Footer />
      </main>
    </>
  )
}
