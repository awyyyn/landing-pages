
interface buttonProps {
    value: string
    classnames?: string
}

const Button = ({value, classnames}: buttonProps) => {

    return (
        <button className={`primaryButton ${classnames}`}>
            {value}
        </button>
    )
}

export default Button
