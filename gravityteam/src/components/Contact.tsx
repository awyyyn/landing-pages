import PrimaryBTN from "./PrimaryBTN"

 


const Contact = () => {
    return (
        <section className="md:pt-[100px] md:px-[192px] md:pb-[128px] mt-[128px] px-[10vw] md:">
            <div className="lg:max-w-[1056px] min-h-[320px] flex flex-col items-center">
                <h1 className="leading-[78px] text-white text-[56px]  marker:font-medium not-italic">
                    Contact Us
                </h1>
                <p className="text-white-2 font-normal leading-[30px] text-[18px] text-center mt-[24px] md:max-w-[623.841px] mx-auto">
                    We are always open to discuss new value-adding partnerships. Do reach out if you are an exchange or a project looking for liquidity; an algorithmic trader or a software developer looking to improve the markets with us or just have a great idea you can’t wait to share with us!
                </p>
                <PrimaryBTN value="get in touch" styles="mt-[41px] h-[58px] w-[191px]  " />
            </div>
        </section>
    )
}

export default Contact

//padding: 100px 192px 128px 192px; 