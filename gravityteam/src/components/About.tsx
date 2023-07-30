 
 
const About = () => {
    return (
        <section className="  grid place-content-center py-0 sm:py-20" id="about">
            <div className="flex flex-col items-center justify-center gap-[24px] lg:w-[1056px]">
                <h1 className="max-w-[350px] text-[36px] sm:text-[56px] text-white font-medium leading-[58px] sm:leading-[78px] text-center">About Gravity Team</h1>
                <p className="text-white-2 text-[20px] font-normal leading-[30px] text-center max-w-[90vw] sm:max-w-[612.4px]">
                    At Gravity Team, we are on the mission to balance the supply and demand across crypto markets worldwide. We are a crypto native market maker founded by traders, developers, and innovators who are strong believers and supporters of the future of decentralization and digital assets.
                </p>
            </div>
            <div className="mt-[64px] relative sm:max-w-[1056px]">
                <div className="absolute h-[2px] w-full hidden lg:block gradient__blue left-[2px] bottom-[178px]" />
                <div className="absolute h-full w-[2px] hidden lg:block gradient__blue left-[263px] top-[2px]" />
                <div className="absolute h-full w-[2px] hidden lg:block gradient__blue left-[527px] top-[2px]" />
                <div className="absolute h-full w-[2px] hidden lg:block gradient__blue right-[263px] top-[2px]" /> 
                <div className="flex flex-wrap flex-1 justify-center">
                    <div className="box">
                        <h2 className="">
                            ~$100 billion
                        </h2>
                        <p className=" ">
                            comulative trading volume to date
                        </p>
                    </div>
                    <div className="box gradient__blue">
                        <h2 className="">
                            0.8 %
                        </h2>
                        <p className="">
                            of the global crypto spot trading volume
                        </p>
                    </div>
                    <div className="box">
                        <h2 className="">
                            ~ 30
                        </h2>
                        <p className="">
                            Gravity Teammates (& growing)
                        </p>
                    </div>
                    <div className="box">
                        <h2 className="">
                            25+
                        </h2>
                        <p className="">
                            leading global and local crypto exchanges
                        </p>
                    </div>
                    <div className="box">
                        <h2 className="">
                            2017
                        </h2>
                        <p className="">
                            start, crypto-natives
                        </p>
                    </div>
                    <div className="box">
                        <h2 className="">
                            1,200+
                        </h2>
                        <p className="">
                            crypto-asset pairs
                        </p>
                    </div>
                    <div className="box">
                        <h2 className="">
                            24/7
                        </h2>
                        <p className="">
                            liquidity
                        </p>
                    </div>
                    <div className="box ">
                        <h2 className="">
                            5 billion+
                        </h2>
                        <p className="">
                            trades done to date
                        </p>
                    </div> 
                </div> 
            </div>
        </section>
    )
}

export default About