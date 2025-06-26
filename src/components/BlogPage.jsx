import React from 'react';
import { BLOG_PAGE_DATA } from '../utils/helper';
import HeadingAndPara from './common/HeadingAndPara';
import { Arrow } from '../utils/icons';
import CustomButton from './common/CustomButton';

const BlogPage = () => {
    const styles = [
        'sm:row-start-1 sm:row-end-2 sm:col-start-1 sm:col-end-2 bg-[#E5E4E2] ',
        'sm:row-start-1 sm:row-end-2 sm:col-start-2 sm:col-end-3 bg-[#EEF4FB] ',
        'sm:row-start-2 sm:row-end-3 sm:col-start-1 sm:col-end-3 bg-[#D5E8FF] '
    ];

    const imgStyles = [
        'md:!max-w-[281px] max-w-[202px] md:min-h-[235px] md:right-[6px] md:bottom-[3px] max-md:top-[10px] max-md:left-1/2 max-md:-translate-x-1/2',
        'md:!max-w-[197px] max-w-[157px] md:min-h-[358px] md:top-0 md:right-0 max-md:-rotate-90 max-md:-top-13 max-md:left-1/2 max-md:-translate-x-1/2',
        'md:!max-w-[375px] max-w-[162px] md:min-h-[303px] md:left-[18px] md:bottom-[34px] max-md:top-0 max-md:left-0'
    ];

    const headingStyles = [
        '',
        'max-w-[360px]',
        'text-center'
    ];

    const paraStyles = [
        '',
        'max-w-[360px]',
        'text-center'
    ];

    const buttonContainerStyles = [
        '',
        '',
        'items-center justify-center'
    ];

    const wrapperStyles = [
        'max-md:bottom-[14px] max-md:left-[14px]',
        'max-md:bottom-[14px] max-md:left-[14px]',
        'md:!ml-auto md:!mr-auto max-md:top-1/2 max-md:left-1/2 max-md:-translate-1/2'
    ];

    return (
        <div className=' max-w-[1384px] w-full mx-auto px-6 md:my-[132px] sm:my-[120px] my-[112px] flex flex-col justify-center items-center gap-[64px]'>
            <h3 className='md:text-[48px] sm:text-[38px] text-[28px] font-bold text-[#112D49] leading-[120%] max-w-[618px] mx-auto text-center'>Blog, Guides, Build Logs & More</h3>
            <div className="grid sm:grid-cols-2 grid-cols-1 gap-x-[26px] gap-y-6 w-full md:!grid-rows-[335px_388px] sm:grid-rows-[364px_527px] grid-rows-[364px_364px_527px]">
                {BLOG_PAGE_DATA.map((item, i) => (
                    <div
                        key={i}
                        className={`relative overflow-hidden rounded-[8px] cursor-pointer active:scale-95 duration-200 min-h-[335px] ${styles[i]}`}
                    >
                        <img
                            className={`object-cover w-full md:rounded-[30px] sm:rounded-[20px] rounded-[10px] absolute ${imgStyles[i]}`}
                            src={item.blogPgaeImg}
                            alt={item.heading || 'Blog image'}
                        />
                        <img
                            className={`${item.active ? 'flex' : 'hidden'} object-cover w-full md:rounded-[30px] sm:rounded-[20px] rounded-[10px] absolute md:!max-w-[365px] max-w-[162px] md:min-h-[303px] md:right-[27px] md:bottom-4 bottom-0 right-0`}
                            src={item.blogPgaeImg_1}
                            alt={item.heading || 'Blog image'}
                        />
                        <div className={`flex flex-col gap-7 max-w-[410px] w-full lg:ml-8 md:ml-4 md:mt-4 relative lg:mt-8 md:p-3.5 z-10 max-md:absolute ${wrapperStyles[i]}`}>
                            <HeadingAndPara
                                heading={item.heading}
                                para={item.para}
                                headingClass={`md:text-[32px] sm:text-[28px] text-[24px] font-bold text-[#112D49] leading-[120%] mb-3 ${headingStyles[i]}`}
                                paraClass={`sm:text-[16px] text-[14px] font-normal text-[#112D49] ${paraStyles[i]}`}
                            />
                            <div className={`w-full flex ${buttonContainerStyles[i]}`}>
                                <button className="flex gap-2 items-center">
                                    {item.button} <Arrow />
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
