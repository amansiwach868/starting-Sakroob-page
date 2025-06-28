import React from 'react';
import { FEATURED_CATEGORIES_PRODUCTS } from '../utils/helper';
import HeadingAndPara from './common/HeadingAndPara';

const FeaturedCategories = () => {
    const gridStyles = [
        'lg:col-start-1 lg:col-end-3 lg:row-start-1 lg:row-end-2 sm:col-start-1 sm:col-end-2 sm:row-start-1 sm:row-end-2 bg-[#D5E8FF]',
        'lg:col-start-3 lg:col-end-4 lg:row-start-1 lg:row-end-2 sm:col-start-2 sm:col-end-3 sm:row-start-1 sm:row-end-2 bg-[#EEF4FB]',
        'lg:col-start-4 lg:col-end-5 lg:row-start-1 lg:row-end-2 sm:col-span-2 sm:row-start-2 sm:row-end-3 bg-[#E5E4E2]',
        'lg:col-start-1 lg:col-end-2 lg:row-start-2 lg:row-end-3 sm:col-start-1 sm:col-end-2 sm:row-start-3 sm:row-end-4 bg-[#EEF4FB]',
        'lg:col-start-2 lg:col-end-3 lg:row-start-2 lg:row-end-3 sm:col-start-2 sm:col-end-3 sm:row-start-3 sm:row-end-4 bg-[#E5E4E2]',
        'lg:col-span-2 lg:col-start-3 lg:col-end-5 lg:row-start-2 lg:row-end-3 sm:col-span-2 sm:row-start-4 sm:row-end-5 bg-[#D5E8FF]',
    ];

    const imageStyles = [
        'lg:max-w-[372px] max-w-[300px] right-0 bottom-0 ml-auto w-full lg:min-h-[261px] min-h-[200px]',
        'sm:max-w-[250px] sm:max-w-[157px] max-w-[250px] right-1/2 translate-x-1/2 sm:-bottom-6 bottom-0 w-full sm:min-h-[213px] min-h-[170px]',
        'sm:max-w-[184px] max-w-[162px] right-1/2 translate-x-1/2 bottom-3 w-full sm:min-h-[208px]',
        'sm:max-w-[306px] max-w-[294px] sm:left-0 sm:bottom-0 w-full sm:min-h-[261px] max-sm:-rotate-90 -right-4 bottom-4',
        'sm:max-w-[266px] max-w-[198px] right-1/2 translate-x-1/2 bottom-[18px] w-full sm:min-h-[187px]',
        'right-0 top-0 bottom-0 left-0 h-full w-full z-0',
    ];

    const headingStyles = [
        'max-w-[172px] xl:top-1/2 xl:left-[62px] xl:-translate-y-1/2 left-6 top-6',
        'max-w-[213px] left-1/2 -translate-x-1/2 top-8',
        'w-full text-center left-1/2 -translate-x-1/2 top-[46px]',
        'max-w-[196px] sm:top-[26px] sm:right-4 top-4 max-sm:left-4',
        'w-full text-center left-1/2 -translate-x-1/2 top-[22px]',
        'text-center left-1/2 -translate-x-1/2 top-[59px]',
    ];

    return (
        <div id='featuredCategories' className="max-w-[1440px] md:px-7 sm:px-6 px-4 mx-auto md:my-[132px] sm:my-[100px] my-[7px]">
            <HeadingAndPara
                heading="Featured Categories"
                para="Shop Our Most Popular Products"
                headingClass="sm:text-[20px] text-[18px] font-normal leading-[120%] italic text-[#112D49] text-center w-full mb-2 leading-[120%]"
                paraClass="md:text-[48px] sm:text-[38px] text-[28px] leading-[120%] max-sm:max-w-[264px] font-bold text-[#112D49] text-center max-w-[602px] mx-auto w-full md:mb-[57px] sm:md-10 mb-7"
            />

            <div className="grid lg:grid-cols-4 lg:grid-rows-2 sm:grid-cols-2 sm:grid-rows-4 grid-cols-1 gap-6">
                {FEATURED_CATEGORIES_PRODUCTS.map((item, index) => (
                    <div
                        key={index}
                        className={`relative overflow-hidden rounded-[8px] duration-200 sm:min-h-[335px] min-h-[298px] flex flex-col-reverse lg:block items-center gap-4 ${gridStyles[index]}`}
                    >
                        <img
                            src={item.categoryImg}
                            alt={item.categoryName || 'Category'}
                            className={`object-cover w-full rounded-[10px] pointer-events-none sm:rounded-[20px] md:rounded-[30px] absolute ${imageStyles[index]}`}
                        />
                        <h4
                            className={`md:text-[32px] sm:text-[28px] text-[24px] font-bold leading-[120%] text-[#112D49] absolute z-10 ${headingStyles[index]}`}
                        >
                            {item.categoryName}
                        </h4>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FeaturedCategories;
