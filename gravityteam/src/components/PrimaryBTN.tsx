
interface btnProps {
    styles: string
    value?: string
}

const PrimaryBTN = ({ styles, value }:btnProps) => {

    return ( 
        <button className={`${styles} text-white-2 gradient__blue rounded-[2px]  uppercase mx-auto`}>
            {value}
        </button>
    )
}

export default PrimaryBTN