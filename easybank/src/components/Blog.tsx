import { articles } from "./constant";
import BlogCard from "./BlogCard";
import { motion } from 'framer-motion';

 

export default function Blog() {


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
            opacity: 1,
            transition: {
                duration: 1.2
            }
        },
    }

    return (
        <section className="flex flex-col padding ">
            <motion.h1 variants={variant} initial="initial" whileInView="animate" viewport={{once: false}} >Latest Articles</motion.h1>
            <div className="col-to-row gap-10 py-5 mt-5 items-center blog-card-container overflow-y-hidden">
                {articles.map((article, i) => (
                    <BlogCard 
                        key={i}
                        {...article}
                    />
                ) )}
            </div>
        </section>
    )
}
