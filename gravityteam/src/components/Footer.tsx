
import logo from '../assets/logo-light.png.png'

const Footer = () => {


    return (
        <footer className="lg:px-[160px] pt-[97px] pb-[64px] w-full  ">
            <div className="flex  justify-between  md:max-w-[756px] mx-auto lg:max-w-[1056px]  gap-y-[60px] px-[32px]">
                <div className="space-y-[11px] "> 
                    <h2 className="uppercase text-white text-[15px] font-normal not-italic tracking-[0.53px] leading-[24px] w-[116px]">Gravity team</h2>
                    <a href="#about" className="text-[#BCBCBC] block font-normal text-[14px] leading-[22px] not-italic">
                        About
                    </a>
                    <a href="#" className="text-[#BCBCBC] block font-normal text-[14px] leading-[22px] not-italic">
                        Work with Us
                    </a>
                </div>
                <img 
                    src={logo}
                    className='w-[180px] h-[41.813px]'
                />
            </div>
            <div className="flex px-[32px] justify-between md:px-[32px] flex-col sm:flex-row md:max-w-[756px] lg:max-w-[1056px] mx-auto gap-y-[20px] mt-[30px] md:mt-[60px]"> 
                <a href="#" className="text-[#BCBCBC] block font-normal text-[14px] leading-[18.4px] not-italic ">
                    Terms of Use & Privacy Policy
                </a>
                <span className='text-[#BCBCBC] block font-normal text-[14px] leading-[18.4px] not-italic'>
                    ©2022 Gravity Team. All Rights Reserved
                </span>
            </div>
        </footer>
    )
}

export default Footer

// padding: 97px 160px 64px 160px; 