import { aboutLists } from "./constant";
import AboutCard from "./AboutCard";
import { motion } from 'framer-motion';

 

export default function About() {

        
    const variant = {
        initial: {
            translateX: -50,
            opacity: 0
        },
        exit: {
            translateX: 50,
            opacity: 0
        },
            animate: {
            translateX: 0,
            opacity: 1
        }
    }

    return (
        <section className="padding flex flex-col gap-y-10 bg-neutral-gray">
            <div className="center-to-left-text space-y-5 ">
                <motion.h1
                    variants={variant}
                    initial="initial"
                    whileInView="animate"
                    viewport={{once: false}}
                    exit="exit"
                    transition={{ duration: 1.2}}
                >Why choose Easybank?</motion.h1>
                <motion.p  
                    variants={variant}
                    initial="initial"
                    whileInView="animate"
                    viewport={{once: false}}
                    exit="exit"
                    transition={{ duration: 1.2, delay: 0.6}}
                    className="text-neutral-grayish ">We leverage Open Banking to turn your bank acocunt into your financial hub.<br className="hidden laptop:block"/>
                    Control your finances like never before.
                </motion.p>
            </div>
            <div className="col-to-row gap-8 justify-evenly laptop:gap-y-16 items-center flex-wrap flex-1">
                {aboutLists.map((item, i) => (
                    <AboutCard 
                        key={i}
                        {...item}
                    />
                ))}
            </div>
        </section>
    )
}
