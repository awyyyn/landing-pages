

interface props {
    wallet: string
    img: string
    imgAlt: string
}

const CryptoWallets = ({img, imgAlt, wallet} : props) => {

    return (
        <div className='gradient__black flex last:hidden lg:last:block w-[142px] lg:w-[192px] p-[26px] lg:p-[56px] pb-[25px] flex-col justify-end items-center gap-[16px] '>
            <img src={img} alt={imgAlt} className='h-[80px] w-[80px] object-contain' />
            <h4 className='text-[#999] text-[11px] font-normal leading-[22px] uppercase'>
                {wallet}
            </h4>
        </div>
    )
}

export default CryptoWallets