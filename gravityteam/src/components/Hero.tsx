import PrimaryBTN from "./PrimaryBTN"

  
const Hero = () => {
    return (
        <section className="h-screen sm:max-h-[550px] md:max-h-[710px]   w-full pt-20 sm:pt-10"> 
            <div className="max-auto flex flex-col items-center ">
                <h1 className="heading">
                    Balancing
                </h1>
                <h1 className="heading mt-5">
                    Crypto Markets
                </h1>
                <p className="text-center mt-[31px] text-white-2 text-[16px] md:text-[18px] font-normal leading-[30px] lg:leading-[30px] max-w-[90vw] sm:max-w-[527px]">
                    Our fully automated proprietary quantitative trading software provides 24/7 liquidity to 170+ crypto assets across 25+ centralized spot and derivative crypto exchanges.
                </p>
                <PrimaryBTN value="get in touch" styles="mt-[41px] h-[58px] w-[191px] " />
            </div>
        </section>
    )
}

export default Hero