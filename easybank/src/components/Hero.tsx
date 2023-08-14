import mobileImg from '../assets/bg-intro-mobile.svg'
import desktopImg from '../assets/bg-intro-desktop.svg'
import phonesImg from '../assets/image-mockups.png'
import Button from './Button'
import { motion } from 'framer-motion';

export default function Hero() {

  const variant = {
    initial: {
      translateX: -30,
      opacity: 0
    },
    animate: {
      translateX: 0,
      opacity: 1
    }
  }

  const transition = {duration: 1}

  return (
    <section className='py-10 flex flex-col laptop:flex-row-reverse laptop:min-h-screen laptop:items-center overflow-x-hidden overflow-y-hidden'> 
      <div className='relative -z-10 laptop:w-[60%] laptop:self-start bg-red '>
        <img src={mobileImg} className='w-full  laptop:hidden' />
        <img src={desktopImg} className='absolute object-contain hidden laptop:block -right-28 -top-24' />
        <img src={phonesImg} className='absolute w-full -top-[5rem]  object-contain laptop:-top-[20rem] laptop:scale-75 laptop:-right-44' />
      </div>
      <div className='px-5 tablet:px-16 laptop:pl-20 widescreen:pl-28 space-y-5 center-to-left-text  w-full laptop:max-w-[40%] widescreen:max-w-[40%]'>
        <motion.h1
          variants={variant}
          initial="initial"
          animate="animate"
          transition={{...transition}}
        >
          Next generation digital banking
        </motion.h1>
        <motion.p 
          variants={variant}
          initial="initial"
          animate="animate"
          transition={{...transition, delay: 0.5}}
          className='text-justify  text-neutral-grayish'>
          Take your financial life online. Your Easybank account will be a one-stop-shop for spending, saving, budgeting, investing, and much more.
        </motion.p>
        <motion.div
          variants={variant}
          initial="initial"
          animate="animate"
          transition={{...transition, delay:1}}
        >
          <Button value="Request Invite" />
        </motion.div>
      </div>
    </section>
  )
}
