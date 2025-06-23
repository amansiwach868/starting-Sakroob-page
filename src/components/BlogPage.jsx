import React from 'react';
import { BLOG_PAGE_DATA } from '../utils/hepler';
import HeadingAndPara from './common/HeadingAndPara';
import { Arrow } from '../utils/icons';

const BlogPage = () => {
    const styles = [
        'sm:row-start-1 sm:row-end-2 sm:col-start-1 sm:col-end-2 bg-[#E5E4E2]',
        'sm:row-start-1 sm:row-end-2 sm:col-start-2 sm:col-end-3 bg-[#EEF4FB]',
        'sm:row-start-2 sm:row-end-3 sm:col-start-1 sm:col-end-3 bg-[#D5E8FF]'
    ];

    const imgStyles = [
        'sm:!max-w-[281px] max-w-[190px] lg:right-0 lg:bottom-0 w-full !top-2.5 ml-auto sm:min-h-[235px]',
        'sm:!max-w-[197px] max-w-[157px] lg:right-0 lg:-bottom-6 !-top-20 w-full sm:min-h-[358px] max-sm:-rotate-90',
        'sm:!max-w-[375px] max-w-[162px] lg:left-[18px] lg:bottom-[34px] top-0 left-0 w-full sm:min-h-[303px]'
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
        '',
        'sm:!my-[75px]',
        'sm:!mx-auto sm:!my-[114px]'
    ];

    return (
        <div className="grid sm:grid-cols-2 sm:grid-rows-2 grid-cols-1 gap-x-5 gap-y-5 max-w-[1384px] w-full mx-auto px-6 my-[100px]">
            {BLOG_PAGE_DATA.map((item, i) => (
                <div
                    key={i}
                    className={`relative overflow-hidden rounded-[8px] cursor-pointer active:scale-95 duration-200 justify-end sm:min-h-[500px] min-h-[364px] lg:block flex flex-col items-center gap-4 ${styles[i]}`}
                >
                    <div className={`absolute ${imgStyles[i]}`}>
                        <img
                            className="object-cover mt-auto w-full md:rounded-[30px] sm:rounded-[20px] rounded-[10px]"
                            src={item.blogPgaeImg}
                            alt={item.heading || 'Blog image'}
                        />
                    </div>
                    <div className={`flex flex-col gap-7 max-w-[410px] w-full sm:ml-8 sm:mt-8 p-3.5 ${wrapperStyles[i]}`}>
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
    );
};

export default BlogPage;
