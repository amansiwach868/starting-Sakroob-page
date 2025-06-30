import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import CustomButton from "./common/CustomButton";
import HeadingAndPara from "./common/HeadingAndPara";

const Hero = () => {
    return (
        <div className="md:px-7 sm:px-5 px-2 max-w-[1432px] w-full mx-auto">
            <Carousel showArrows={false} showThumbs={false} showStatus={false} infiniteLoop interval={3000} autoplay>
                <div className="bg-[url('./assets/img/png/hera-bg-img.png')] rounded-[8px] bg-center bg-cover bg-no-repeat sm:min-h-[650px] min-h-[415px]  w-full flex flex-col justify-center items-center">
                    <div className="sm:pt-[110px] pt-[90px]"><HeadingAndPara heading={'Where Tinkerers Bring Ideas Alive'} para={'Explore niche tech gear, DIY kits, and pro tools — built for creators, gamers, and engineers.'} headingClass={'lg:text-[60px] md:text-[50px] sm:text-[40px] text-[32px] max-sm:max-w-[264px] font-bold text-[#112D49] text-center max-w-[716px] w-full mx-auto mb-3 leading-[120%]'} paraClass={'sm:text-base  text-[14px] max-sm:max-w-[264px] font-normal text-[#112D49] text-center max-w-[460px] mx-auto w-full'} />
                        <div className="flex justify-center items-center sm:gap-4.5 gap-2 mt-8.5">
                            <CustomButton buttonClass="!bg-[#112D49] !text-white hover:!bg-[#112D49]/80" buttonText="Browse Products" />
                            <CustomButton buttonClass="hover:!bg-[#112D49]/80 !text-[#112D49] hover:!text-white !bg-transparent !border !border-[#112D49]" buttonText="Starter Kits" />
                        </div></div>
                </div>
                <div className="bg-[url('./assets/img/png/hera-bg-img.png')] rounded-[8px] bg-center bg-cover bg-no-repeat sm:min-h-[650px] min-h-[415px]  w-full flex flex-col justify-center items-center">
                    <div className="sm:pt-[110px] pt-[90px]"><HeadingAndPara heading={'Where Tinkerers Bring Ideas Alive'} para={'Explore niche tech gear, DIY kits, and pro tools — built for creators, gamers, and engineers.'} headingClass={'lg:text-[60px] md:text-[50px] sm:text-[40px] text-[32px] max-sm:max-w-[264px] font-bold text-[#112D49] text-center max-w-[716px] w-full mx-auto mb-3 leading-[120%]'} paraClass={'sm:text-base  text-[14px] max-sm:max-w-[264px] font-normal text-[#112D49] text-center max-w-[460px] mx-auto w-full'} />
                        <div className="flex justify-center items-center sm:gap-4.5 gap-2 mt-8.5">
                            <CustomButton buttonClass="!bg-[#112D49] !text-white hover:!bg-[#112D49]/80" buttonText="Browse Products" />
                            <CustomButton buttonClass="hover:!bg-[#112D49]/80 !text-[#112D49] hover:!text-white !bg-transparent !border !border-[#112D49]" buttonText="Starter Kits" />
                        </div></div>
                </div>
                <div className="bg-[url('./assets/img/png/hera-bg-img.png')] rounded-[8px] bg-center bg-cover bg-no-repeat sm:min-h-[650px] min-h-[415px]  w-full flex flex-col justify-center items-center">
                    <div className="sm:pt-[110px] pt-[90px]"><HeadingAndPara heading={'Where Tinkerers Bring Ideas Alive'} para={'Explore niche tech gear, DIY kits, and pro tools — built for creators, gamers, and engineers.'} headingClass={'lg:text-[60px] md:text-[50px] sm:text-[40px] text-[32px] max-sm:max-w-[264px] font-bold text-[#112D49] text-center max-w-[716px] w-full mx-auto mb-3 leading-[120%]'} paraClass={'sm:text-base  text-[14px] max-sm:max-w-[264px] font-normal text-[#112D49] text-center max-w-[460px] mx-auto w-full'} />
                        <div className="flex justify-center items-center sm:gap-4.5 gap-2 mt-8.5">
                            <CustomButton buttonClass="!bg-[#112D49] !text-white hover:!bg-[#112D49]/80" buttonText="Browse Products" />
                            <CustomButton buttonClass="hover:!bg-[#112D49]/80 !text-[#112D49] hover:!text-white !bg-transparent !border !border-[#112D49]" buttonText="Starter Kits" />
                        </div></div>
                </div>
                <div className="bg-[url('./assets/img/png/hera-bg-img.png')] rounded-[8px] bg-center bg-cover bg-no-repeat sm:min-h-[650px] min-h-[415px]  w-full flex flex-col justify-center items-center">
                    <div className="sm:pt-[110px] pt-[90px]"><HeadingAndPara heading={'Where Tinkerers Bring Ideas Alive'} para={'Explore niche tech gear, DIY kits, and pro tools — built for creators, gamers, and engineers.'} headingClass={'lg:text-[60px] md:text-[50px] sm:text-[40px] text-[32px] max-sm:max-w-[264px] font-bold text-[#112D49] text-center max-w-[716px] w-full mx-auto mb-3 leading-[120%]'} paraClass={'sm:text-base  text-[14px] max-sm:max-w-[264px] font-normal text-[#112D49] text-center max-w-[460px] mx-auto w-full'} />
                        <div className="flex justify-center items-center sm:gap-4.5 gap-2 mt-8.5">
                            <CustomButton buttonClass="!bg-[#112D49] !text-white hover:!bg-[#112D49]/80" buttonText="Browse Products" />
                            <CustomButton buttonClass="hover:!bg-[#112D49]/80 !text-[#112D49] hover:!text-white !bg-transparent !border !border-[#112D49]" buttonText="Starter Kits" />
                        </div></div>
                </div>



            </Carousel>
        </div>
    )
}

export default Hero
