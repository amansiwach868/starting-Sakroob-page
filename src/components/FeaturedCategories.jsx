import React from 'react';
import { FEATURED_CATEGORIES_PRODUCTS } from '../utils/hepler';
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
        'sm:max-w-[372px] max-w-[246px] right-0 bottom-0 ml-auto w-full sm:min-h-[261px]',
        'sm:max-w-[250px] max-w-[157px] right-1/2 lg:translate-x-1/2 -bottom-6 w-full sm:min-h-[213px]',
        'sm:max-w-[184px] max-w-[162px] right-1/2 lg:translate-x-1/2 bottom-3 w-full sm:min-h-[208px]',
        'sm:max-w-[306px] max-w-[294px] sm:left-0 sm:bottom-0 w-full sm:min-h-[261px] max-sm:-rotate-90 -right-4 bottom-4',
        'sm:max-w-[266px] max-w-[198px] right-1/2 lg:translate-x-1/2 bottom-[18px] w-full sm:min-h-[187px]',
        'right-0 top-0 bottom-0 left-0 w-full z-0',
    ];

    const headingStyles = [
        'max-w-[172px] w-full xl:ml-[62px] sm:ml-[30px] xl:mt-[117px] mr-auto ml-6 mt-6',
        'max-w-[213px] w-full text-center mx-auto sm:mt-8 mb-[46px] sm:mb-0',
        'w-full text-center mt-[34px] mb-[39px] sm:mb-0',
        'max-w-[196px] w-full sm:absolute sm:mt-[26px] sm:mr-4 top-6 left-6 ml-auto',
        'w-full text-center sm:mt-2.5 mb-[44px] sm:mb-0',
        'text-center sm:mt-12 mb-[50px] sm:mb-0',
    ];

    return (
        <div className="max-w-[1384px] px-6 mx-auto my-[132px]">
            <HeadingAndPara
                heading="Featured Categories"
                para="Shop Our Most Popular Products"
                headingClass="text-[20px] font-normal italic text-[#112D49] text-center w-full mb-2 leading-[120%]"
                paraClass="sm:text-[48px] text-[14px] max-sm:max-w-[264px] font-bold text-[#112D49] text-center max-w-[602px] mx-auto w-full mb-[57px]"
            />

            <div className="grid lg:grid-cols-4 lg:grid-rows-2 sm:grid-cols-2 sm:grid-rows-4 grid-cols-1 gap-6">
                {FEATURED_CATEGORIES_PRODUCTS.map((item, index) => (
                    <div
                        key={index}
                        className={`relative overflow-hidden rounded-[8px] cursor-pointer active:scale-95 duration-200 sm:min-h-[335px] min-h-[298px] flex flex-col-reverse lg:block items-center gap-4 ${gridStyles[index]}`}
                    >
                        <div className={`lg:absolute ${imageStyles[index]}`}>
                            <img
                                src={item.categorieImg}
                                alt={item.categorieName || 'Category'}
                                className="object-cover w-full rounded-[10px] sm:rounded-[20px] md:rounded-[30px] sm:absolute"
                            />
                        </div>
                        <h4
                            className={`md:text-[32px] sm:text-[28px] text-[24px] font-bold text-[#112D49] relative z-10 ${headingStyles[index]}`}
                        >
                            {item.categorieName}
                        </h4>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FeaturedCategories;
