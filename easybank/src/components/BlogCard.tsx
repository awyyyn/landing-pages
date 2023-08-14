import { motion } from 'framer-motion';
 

interface blogCardProps {
    title: string;
    author: string;
    paragraph: string;
    image: string;
    alt: string
}

export default function BlogCard({author, image, alt, paragraph, title}: blogCardProps) {

    return (
        <motion.div 
            
            initial={{translateY: 40, opacity: 0}} 
            whileInView={{
                translateY: 0, opacity: 1
            }}
            transition={{
                duration: 1.2,
                delay: 0.6,  
            }}
            exit={{
                translateY: -40, opacity: 0
            }}
            className="overflow-hidden rounded-lg  card cursor-pointer ">
            <div className="relative">
                <img src={image} alt={`${alt}`} className="tablet:max-h-[200px] tablet:w-full" />
            </div>
            <div className="p-5 space-y-2">
                <p className="text-sm text-neutral-grayish">By {author}</p>
                <h3>{title}</h3>
                <p>{paragraph}...</p>
            </div>
        </motion.div>
    )
}
