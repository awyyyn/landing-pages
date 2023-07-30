 
import arrow from '../assets/arrow.svg';  

interface linkProps {
    link: string
    value: string
    styles?: string
}

const Link = ({link, value, styles } : linkProps) => {
    return ( 
        <a href={`${link}`} className={`${styles} inline-flex items-center pr-0 absolute bottom-0 `}>
            <span className='pr-[2.844px] pb-1px  flex items-start leading-[30px] font-normal text-[18px] text-white  relative '>
                {value}    
                <div className='absolute bottom-0 w-full h-[2px] gradient__blue' /> 
            </span>    
            <img src={arrow} className='w-[20px] h-[20px] ml-2' />
        </a>
    )
}

export default Link