 
import arrow from '../assets/arrow.svg';  
import token4 from '../assets/token-4.png';
import bar4 from '../assets/bar-4.png'
import table4 from '../assets/table-4.png'
import shadow4 from '../assets/shadow-4.png'
import token1 from '../assets/token-1.png';
import bar1 from '../assets/bar-1.png'
import table1 from '../assets/table-1.png'
import shadow1 from '../assets/shadow-1.png'
import token2 from '../assets/token-2.png';
import bar2 from '../assets/bar-2.png'
import table2 from '../assets/table-2.png'
import shadow2 from '../assets/shadow-2.png'
import token3 from '../assets/token-3.png';
import bar3 from '../assets/bar-3.png' 
import table3 from '../assets/table-3.png'
import shadow3 from '../assets/shadow-3.png'
import divBgGradient from '../assets/div.png'
import gridBG from '../assets/grid.png'
import middleLeft from '../assets/middle-left-2.png'
import exchangeStyle from '../assets/exchange-screens-new.png'
import solana from '../assets/solana.png'
import near from '../assets/near.png'
import bgblob from '../assets/background-blob-service-1.png.png'
import mena from '../assets/mena.png'
import bitbank from '../assets/bitbank@2x.png'
import binance from '../assets/binance@2x.png'
import bithumb from '../assets/bithumb@2x.png'
import bitsstamp from '../assets/bitstamp@2x.png'
import coinbase from '../assets/coinbase@2x.png'
import bitfinex from '../assets/bitfinex@2x.png'
import CryptoWallets from './CryptoWallets';
import arrowLeft from '../assets/left.svg'
import arrowRight from '../assets/right.svg'
import bitkub from '../assets/bitkub-logo-light-trimmed.png.png'
import brown from '../assets/brown.png'
import blue from '../assets/blue.png'
import Link from './Link';


const wallets1 = [
    {
        id: 0,
        img: binance,
        imgAlt: 'Binance Logo',
        wallet: 'Binance'
    },
    {
        id: 1,
        img: bitbank,
        imgAlt: 'Bitbank Logo',
        wallet: 'Bitbank'
    },
    {
        id: 2,
        img: bithumb,
        imgAlt: 'Bithumb Logo',
        wallet: 'Bithumb'
    },

]

const wallets2 = [
    {
        id: 0,
        img: bitsstamp,
        imgAlt: 'Bitstamp Logo',
        wallet: 'Bitstamp'
    },
    {
        id: 1,
        img: coinbase,
        imgAlt: 'Coinbase Logo',
        wallet: 'Coinbase'
    },
    {
        id: 2,
        img: bitfinex,
        imgAlt: 'Bitfinex Logo',
        wallet: 'Bitfinex'
    },

]


const Content = () => {

    return (
        <section className="relative flex flex-col gap-y-[122px] items-center lg:overflow-visible overflow-x-hidden">
            <div style={{backgroundImage: `url('${bgblob}')`}} className='min-w-[2038.893px]  min-h-[2018.932px] absolute bg-contain rotate-[60deg] flex-shrink-0  -top-[726px] -left-[1093px]' />
            <div className="md:px-[217.938px] md:max-w-[1056px] flex flex-col gap-[24px]  px-[5vw] ">
                <h1 className="text-white text-center text-[56px] font-medium leading-[78px] ">Crypto Marketing Making</h1>
                <p className="md:max-w-[620.325px]   text-white-2 font-normal leading-[30px] text-center text-[20px] ">
                    We are a global crypto liquidity provider and algorithmic market maker. We trade digital assets listed on Centralized Exchanges in over 15 countries worldwide.
                </p>
            </div>
            <div className=" flex flex-col lg:flex-row items-center justify-start md:gap-x-[42px] gap-y-[92px] md:gap-y-0 lg:max-w-[1056px] md:min-w-[556px] md:w-[768px] lg:min-w-[1056px]">
                <div className="h-[400px] w-[90vw] lg:max-w-[422.391px] lg:min-w-[422.391px]   md:w-[572px]  lg:min-h-[366px] relative">    
                    <h2 className="text-white text-[36px] font-normal leading-[44px] w-[404.122px]">Market Making for Crypto Projects</h2>
                    <h3 className="text-white mt-[27px] text-[20px] font-bold leading-[28px]">    
                        Accelerate your token’s journey by boosting its liquidity
                    </h3>
                    <p className='text-white-2 mt-[20px] font-normal leading-[30px] text-[20px]'>
                        We invest in building long-term, sustainable relationships and support our projects in their growth journey with our services, industry expertise and network.
                    </p>
                    <Link link='#' value='Learn More' / >
                </div> 
                <div className='  sm:max-w-[222px] md:mt-10 lg:mt-0 w-full     md:max-w-[422.391px]  lg:min-w-[422.391px] min-h-[366px]   relative'>
                    <div className='w-[124px] h-[84px] group'>
                        <div style={{backgroundImage: `url('${token4}')`}} className='  w-[54px] h-[62px] flex-shrink-0 absolute top-[28px] left-[62px] lg:left-[132px]' />
                        <div style={{backgroundImage: `url('${table4}')`}} className='absolute  top-[92px] left-[28px] lg:left-[98px] object-contain w-[124px] h-[84.922px] flex-shrink-0 z-[2]' />
                        <div style={{backgroundImage: `url('${bar4}')`}} className='absolute top-[106px] left-[28px] lg:left-[98px] object-contain  w-[124px] h-[84px] flex-shrink-0 z-[1]' />
                        <div style={{backgroundImage: `url('${shadow4}')`}} className='absolute top-[108px] left-[30px] lg:left-[100px] object-contain  w-[100px] h-[58.25px] flex-shrink-0 z-[3]' />
                    </div>
                    <div>
                        <div style={{backgroundImage: `url('${token1}')`}} className='absolute  z-[7] flex-shrink-0 min-h-[130px] min-w-[130px] top-[19.1px] left-[142px] lg:left-[212px]' />
                        <div style={{backgroundImage: `url('${table1}')`}} className='absolute z-[5] flex-shrink-0 top-[117px] left-[106px] lg:left-[176px] min-w-[190px] min-h-[131.188px]' />
                        <div style={{backgroundImage: `url('${bar1}')`}} className='absolute z-[4] flex-shrink-0 w-[190px] h-[181px] left-[106px] lg:left-[176px] top-[127px]' />
                        <div style={{backgroundImage: `url('${shadow1}')`}} className='absolute z-[6] flex-shrink-0 w-[160.884px] h-[89.481px] left-[125.56px] lg:left-[195.56px] top-[129.87px] ' />
                    </div>
                    <div>
                        <div style={{backgroundImage: `url('${token2}')`}} className='absolute z-[7] flex-shrink-0 h-[116px] w-[116px] top-[170px] left-[260px] lg:left-[330px]' />
                        <div style={{backgroundImage: `url('${table2}')`}} className='absolute z-[3] flex-shrink-0 h-[104.469px] w-[150px] left-[235.39px] lg:left-[305.39px] top-[252px]' />
                        <div style={{backgroundImage: `url('${bar2}')`}} className='absolute z-[2] flex-shrink-0 h-[120px] w-[150px] top-[262px] left-[235.39px] lg:left-[305.39px]' />
                        <div style={{backgroundImage: `url('${shadow2}')`}} className='absolute z-[4] flex-shrink-0 h-[66.75px] w-[120px] left-[254.29px] lg:left-[324.29px] top-[262px]' />
                    </div>
                    <div>
                        <div  style={{backgroundImage: `url('${token3}')`}} className='absolute z-[7] flex-shrink-0 w-[86px] h-[86px] top-[194px] left-[40px] lg:left-[110px] '  />
                        <div  style={{backgroundImage: `url('${table3}')`}} className='absolute z-[4] flex-shrink-0 w-[108px] h-[73.5px] top-[262px] left-[28px] lg:left-[98px] '  />
                        <div  style={{backgroundImage: `url('${shadow3}')`}} className='absolute z-[5] flex-shrink-0 w-[100px] h-[58.25px] top-[266px] left-[38px] lg:left-[108px] '  />
                        <div  style={{backgroundImage: `url('${bar3}')`}} className='absolute z-[1] flex-shrink-0 w-[108px] h-[80px] top-[272px] left-[28px] lg:left-[98px] '  />
                    </div>
                </div>
            </div>

            <div className='  flex flex-col items-center lg:flex-row lg:gap-x-[211.22px] md:gap-y-[120px] gap-y-[50px]'>
                <div className='  relative sm:min-w-[422.391px] sm:w-full   md:max-w-[377.391px] lg:max-w-[422.391px] min-h-[387px]  '>
                    <div style={{backgroundImage: `url('${divBgGradient}')`}} className='z-[0] absolute flex-shrink-0 w-[772px] h-[760px] -top-[210px] -left-[110px] ' />
                    <div className='relative w-[90vw] md:w-[432px] sm:w-[500px]  md:h-[387px] flex-shrink-0 mx-auto'>
                        <div style={{backgroundImage: `url('${gridBG}')`}} className='z-[3] bg-contain bg-no-repeat absolute w-[314px] h-[221px] md:w-[514px] md:h-[321px] flex-shrink-0 left-[2px] top-[152px]' />
                        <div style={{backgroundImage: `url('${exchangeStyle}')`}} className='z-[2]  bg-contain bg-no-repeat absolute w-[314px] md:w-[514px] h-[422px] md:h-[522px] flex-shrink-0 left-[0] -top-[50px]' />
                    </div>
                </div>
                <div className='  relative lg:w-[377.391px] h-[387px] w-[90vw] flex-shrink-0 min-h-[387px] md:w-[572px]  '>
                    <h2 className='text-white font-normal leading-[44px] text-[36px]'>
                        Market Making for Crypto Exchange
                    </h2>
                    <h3 className='text-white text-[20px] font-bold leading-[28px] mt-[27px] '>
                        Attract more traders and projects with deep order books & liquidity
                    </h3>
                    <p className='text-white-2 font-normal leading-[30px] text-[19px] mt-[20px]'>
                        Our world-class market making services are proven to help local and emerging exchanges win traders and gain market-leading positions of up to 90% market dominance.
                    </p>
                    <a href='#' className='inline-flex items-center pr-0 absolute bottom-0 '>
                        <span className='pr-[2.844px] pb-1px  flex items-start leading-[30px] font-normal text-[18px] text-white  relative '>
                            Learn More    
                            <div className='absolute bottom-0 w-[99.84px] h-[2px] gradient__blue' /> 
                        </span>    
                        <img src={arrow} className='w-[20px] h-[20px] ml-2' />
                    </a>
                </div>
            </div>


            <div className='relative mt-[180px] lg:mt-0 flex flex-col items-center lg:items-baseline md:flex-row md:mt-[246px] w-full justify-center min-h-[696px] lg:max-w-[1120px]'>
                <div style={{backgroundImage: `url('${middleLeft}')`}} className='absolute bg-contain bg-no-repeat z-[0] flex-shrink-0 lg:-left-[566.84px] -left-[320px] -top-[342.46px] lg:-top-[243.46px] w-[829.226px] h-[831.145px] rotate-[5.938deg]' />
                <div style={{backgroundImage: `url('${mena}')`}} className='absolute bg-contain left-[208px] -top-[163px] lg:left-[68.4px] lg:top-[63.9px] w-[72px] h-[82px] flex-shrink-0 ' />
                <div style={{backgroundImage: `url('${near}')`}} className='absolute bg-contain left-[97px] lg:-left-[17px] -top-[253px] lg:-top-[23px]  w-[72px] h-[82px] flex-shrink-0' />
                <div style={{backgroundImage: `url('${solana}')`}} className='absolute bg-contain left-[63px] lg:-left-[63px] -top-[120px] lg:top-[100px]  w-[72px] h-[82px] flex-shrink-0' />
                    
                <div className='lg:min-w-[1056px]  mb-20 w-[90vw] lg:max-w-[1056px] min-h-[696px]  overflow-hidden flex-shrink-0 relative  flex   flex-col lg:flex-row lg:gap-x-[141.12px] '>
                    <div className='pt-[1px]   pl-0 lg:pr-[106.284px ] pb-[22px] min-h-[300px] lg:max-w-[400.591px] lg:mt-[331px] z-[1]  lg:h-[153px] '>
                        <h1 className='text-white mx-auto lg:mx-0 font-semibold md:leading-[78px] text-[60px] max-w-[400px]  '>
                            Our Partners & Friends
                        </h1>
                    </div>
                    <div className='flex  flex-col lg:flex-row flex-shrink-0 lg:w-[408px] lg:h-[696px]  lg:gap-x-[24px] relative wallet__container '>
                        <div className='flex lg:flex-col-reverse  justify-center lg:justify-normal flex-row gap-x-[32px] lg:gap-y-[32px] py-[32px] lg:mb-[70px]'>
                            {wallets1.map(wallet => (
                                <CryptoWallets 
                                    key={wallet.id}
                                    {...wallet}
                                />
                            ))}
                        </div>
                        <div className='flex lg:flex-col justify-center lg:justify-normal flex-row gap-x-[32px] gap-y-[32px] py-[32px] lg:mt-[70px]'>
                            {wallets2.map(wallet => (
                                <CryptoWallets 
                                    key={wallet.id}
                                    {...wallet}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>


            <div className='lg:w-[1056px] lg:h-[889.391px] flex flex-col items-center'>
                <h1 className='text-white text-center font-medium lg:leading-[78px] text-4xl sm:text-[57px] not-italic '>
                    We are in a good company 
                </h1>
                <p className='text-white mt-[20px] text-center text-[20px] not-italic font-normal max-w-[90vw] leading-[28px] sm:max-w-[603.747px]'>
                    Our partnerships have delivered great value to our projects and we’re happy to share some of their feedback below
                </p>
                <div className='flex justify-center mt-[27px] gap-x-[32px]'>
                    <img 
                        src={arrowLeft}
                        alt='Arrow Left'
                        className=''
                    />
                    <img 
                        src={arrowRight}
                        alt='Arrow Right'
                        className=''
                    />
                </div>
                <div className='flex items-center mt-[36px] flex-col max-w-[90vw] sm:max-w-[678.091px] '>
                    <p className='text-white not-italic leading-[44px] text-center font-normal text-[26px] lg:max-w-[678.091px]'>
                        Since 2019, Gravity team has been an astounding market maker for Bitkub. They have proven themselves to be one of the most consistent, committed and driven market makers on our exchange. Gravity Team has contributed high-quality volume and has proven to be very reliable and trustworthy partner. We strongly advocate Gravity Team as they have been an indispensable part of our market-making team.
                    </p>
                    <h3 className='text-[18px] font-bold  mt-[38px]  not-italic leading-[23px ] text-white'>
                        Atthakrit Chimplapibul
                    </h3>
                    <div className='flex items-center mt-[18px]  '>
                        <p className="text-white not-italic font-light my-auto leading-[18.4px] mr-[32.42px]">    
                            Co-founder & CEO of Bitkub
                        </p> 
                        <div
                            style={{backgroundImage: `url('${bitkub}')`}}
                            className='w-[123.5px] h-[26px] bg-contain relative 
                                before:content-[""] before:w-[2px] before:bg-[#b3b2b2] before:h-full before:absolute before:-left-[16px]
                            '
                        />
                    </div>
                </div>
            </div>

            <div className="lg:flex-row flex flex-col md:gap-y-[60px] gap-y-[20px] items-center lg:gap-y-0 lg:gap-x-[132px] md:max-w-[1056] md:min-w-[1056px] ">
                <div className='pr-[59px] flex items-start '>
                    <div className="h-[156px] w-[408px] absolute">
                        <div style={{backgroundImage: `url('${brown}')`}} className='absolute z-[2] -left-157px] w-[341.684px] h-[329.289px] -top-[100] bg-contain' />
                        <div style={{backgroundImage: `url('${blue}')`}} className='absolute z-[2] -left-[132px] w-[567.098px] h-[401.028px] -top-[102px] bg-contain rotate-[0.17deg]' />
                    </div>
                    <h1 className='text-white text-[43px] md:text-[53px] not-italic px-[5vw] mg:px-0 font-medium z-[5] leading-[48px] md:leading-[78px]'>
                        Join <br />&nbsp;Gravity Team
                    </h1>
                </div>
                <div className="flex flex-col pr-[10.331px] mt-[50px] md:mt-0 z-[10] gap-[24px] max-w-[516px] min-h-[435px] md:min-h-[335px]  h-[335px]">
                    <p className="paragraph leading-[30px] text-[19px] z-[10] px-[5vw] md:px-0">
                        Join our community of innovators, problem solvers and owners who apply scientific discovery techniques to make crypto markets a better place for everyone.
                    </p>
                    <p className="paragraph leading-[30px] text-[19px] px-[5vw] md:px-0">
                     As we emphasize it in our name – Gravity Team, we are a team. A team of bright, talented people, each masters of their specialty, curious about the world and eager to solve the new exciting cryptocurrency market problems, build cool stuff and have fun whilst doing so!
                    </p>
                    <Link link='#' value='Learn more about working with us' styles="px-[5vw] md:px-0"/>
                </div>
            </div>
        </section>
    )
}

export default Content