import React from 'react';
import { BLOG_PAGE_DATA } from '../utils/helper';
import HeadingAndPara from './common/HeadingAndPara';
import { Arrow } from '../utils/icons';
import CustomButton from './common/CustomButton';

const BlogPage = () => {
    const styles = [
        'sm:row-start-1 sm:row-end-2 sm:col-start-1 sm:col-end-2 bg-[#E5E4E2] p-8',
        'sm:row-start-1 sm:row-end-2 sm:col-start-2 sm:col-end-3 bg-[#EEF4FB] p-8',
        'sm:row-start-2 sm:row-end-3 sm:col-start-1 sm:col-end-3 bg-[#D5E8FF]  flex justify-center items-center p-8'
    ];

    const imgStyles = [
        'xl:!max-w-[281px] max-w-[202px] xl:min-h-[235px] lg:right-[6px] lg:bottom-[3px] max-lg:top-[10px] max-lg:left-1/2 max-lg:-translate-x-1/2',
        'lg:!max-w-[197px] max-w-[157px] lg:min-h-[358px] lg:top-0 lg:right-0 max-lg:-rotate-90 max-lg:-top-13 max-lg:left-1/2 max-lg:-translate-x-1/2',
        'xl:!max-w-[375px] md:max-w-[300px] sm:max-w-[230px] max-w-[200px] xl:min-h-[303px] lg:left-[18px] lg:bottom-1/2 lg:translate-y-1/2 max-lg:top-0 max-lg:left-0'
    ];

    const headingStyles = [
        'min-[700px]:!max-w-[700px] !max-w-[250px]',
        'md:!max-w-[400px] !max-w-[275px]',
        'text-center'
    ];

    const paraStyles = [
        'sm:max-w-[470px] max-w-[250px]',
        'md:max-w-[360px] max-w-[250px]',
        'text-center'
    ];

    const buttonContainerStyles = [
        '',
        '',
        'items-center justify-center'
    ];

    const wrapperStyles = [
        'max-lg:bottom-[14px] max-lg:left-[14px]',
        'max-lg:bottom-[14px] max-lg:left-[14px]',
        'md:!ml-auto md:!mr-auto max-md:top-1/2 max-md:left-1/2 max-md:-translate-1/2'
    ];

    return (
        <div id='blog' className=' max-w-[1440px] w-full mx-auto md:px-7 sm:px-6 px-4 md:my-[132px] sm:my-[100px] my-[75px] flex flex-col justify-center items-center gap-[56px]'>
            <h3 className='md:text-[48px] sm:text-[38px] text-[28px] font-bold text-[#112D49] leading-[120%] max-w-[618px] mx-auto text-center'>Blog, Guides, Build Logs & More</h3>
            <div className="grid sm:grid-cols-2 grid-cols-1 gap-x-[26px] gap-y-6 w-full lg:!grid-rows-[335px_388px] sm:grid-rows-[400px_527px] grid-rows-[364px_364px_527px]">
                {BLOG_PAGE_DATA.map((item, i) => (
                    <div
                        key={i}
                        className={`relative overflow-hidden rounded-[8px] duration-200 min-h-[335px] ${styles[i]}`}
                    >
                        <img
                            className={`object-cover w-full md:rounded-[30px] sm:rounded-[20px] rounded-[10px] absolute pointer-events-none ${imgStyles[i]}`}
                            src={item.blogPgaeImg}
                            alt={item.heading || 'Blog image'}
                        />
                        <img
                            className={`${item.active ? 'flex' : 'hidden'} pointer-events-none object-cover w-full lg:rounded-[30px] sm:rounded-[20px] rounded-[10px] absolute xl:!max-w-[365px] md:max-w-[280px] sm:max-w-[230px] max-w-[200px] xl:min-h-[303px] lg:right-[27px] lg:bottom-1/2 lg:translate-y-1/2 bottom-0 right-0`}
                            src={item.blogPgaeImg_1}
                            alt={item.heading || 'Blog image'}
                        />
                        <div className={`flex flex-col gap-7 lg:max-w-[450px] max-w-[350px] w-full relative z-10 max-lg:absolute ${wrapperStyles[i]}`}>
                            <HeadingAndPara
                                heading={item.heading}
                                para={item.para}
                                headingClass={`lg:text-[32px] sm:text-[28px] text-[24px] font-bold text-[#112D49] leading-[120%] mb-3 ${headingStyles[i]}`}
                                paraClass={`sm:text-base  text-[14px] font-normal text-[#112D49] ${paraStyles[i]}`}
                            />
                            <div className={`w-full flex ${buttonContainerStyles[i]}`}>
                                <button className="flex gap-2 items-center cursor-pointer text-[#112D49] font-medium group">
                                    {item.button} <div className="group-hover:translate-x-[5px] duration-300">
                                        <Arrow />
                                    </div>
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <CustomButton buttonText={'View All Blog Posts'} buttonClass={'text-white'} />
        </div>
    );
};

export default BlogPage;
