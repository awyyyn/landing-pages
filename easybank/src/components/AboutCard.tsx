import { motion } from 'framer-motion';
 

interface aboutCardProps {
    title: string
    paragraph: string
    svg: string
}

export default function AboutCard({paragraph, svg, title}: aboutCardProps) {

    return (
        <motion.div 
            initial={{translateY: 50, opacity: 0}} 
            whileInView={{
                translateY: 0, opacity: 1
            }}
            transition={{
                duration: 1.2,
                delay: 0.5,  
            }}
            exit={{
                translateY: -40, opacity: 0
            }}
            className="text-center space-y-4 card p-4 rounded-md">
            <img src={svg} alt={`${title} logo`} className="mx-auto" />
            <h3>{title}</h3>
            <p className="text-neutral-grayish">{paragraph}</p>
        </motion.div>
    )
}
