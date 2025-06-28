import React, { useState, useRef, useLayoutEffect } from 'react';
import { FiveStarRating, FiveStarRatingBig } from '../utils/icons';
import reviewerImg from '../assets/img/png/reviewer-img.png'
import CustomButton from './common/CustomButton';
import { Link } from 'react-router-dom';

const TABS = [
    { key: 'reviews', label: 'Reviews', align: 'text-left' },
    { key: 'specs', label: 'Specifications', align: 'text-center' },
    { key: 'faq', label: "FAQ's", align: 'text-right' },
];

const reviewsSummary = [
    { stars: 5, percent: 100 },
    { stars: 4, percent: 88 },
    { stars: 3, percent: 42 },
    { stars: 2, percent: 58 },
    { stars: 1, percent: 20 },
];

const ProductDetailTabs = () => {
    const [activeTab, setActiveTab] = useState('reviews');
    const tabRefs = useRef([]);
    const indicatorRef = useRef(null);

    useLayoutEffect(() => {
        const currentTab = tabRefs.current[TABS.findIndex(t => t.key === activeTab)];
        if (currentTab && indicatorRef.current) {
            indicatorRef.current.style.width = `${currentTab.offsetWidth}px`;
            indicatorRef.current.style.left = `${currentTab.offsetLeft}px`;
        }
    }, [activeTab]);

    const renderContent = () => {
        switch (activeTab) {
            case 'reviews':
                return (
                    <div>
                        <div className="flex flex-col md:flex-row justify-center items-center gap-8">
                            <div className="flex flex-col lg:min-w-[220px]">
                                <div className="text-[20px] sm:text-[22px] font-semibold text-[#112D49] mb-1">Customer Reviews</div>
                                <div className="mb-2">
                                    <FiveStarRating/>
                                    <p className="font-medium text-dark-blue mt-1">Based on 1 review</p>
                                </div>
                                <Link href="#" className="text-[#112D49] md:mt-[147px] text-nowrap mt-3 text-sm  font-medium hover:underline flex items-center gap-1">
                                    See all Customers Reviews
                                    <span className="ml-1">&gt;</span>
                                </Link>
                            </div>

                            <div className="min-w-[150px] max-w-full sm:max-w-[360px] pt-4">
                                <div className="space-y-2">
                                    {reviewsSummary.map((r) => (
                                        <div key={r.stars} className="flex items-center gap-2">
                                            <span className="text-sm w-6 gap-1 flex">
                                                <span className="text-dark-blue font-medium">{r.stars}</span>
                                                <span className="text-[#FFD600] font-medium">★</span>
                                            </span>
                                            <div className="flex-1 bg-[#F1F4F9] rounded h-1.5 overflow-hidden">
                                                <div className="bg-[#FFD600] h-1.5" style={{ width: `${r.percent}%` }} />
                                            </div>
                                            <span className="text-xs font-semibold text-gray-500 w-8 text-right">{r.percent}%</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="flex-1 lg:min-w-[250px] flex flex-col items-start lg:items-end">
                                <div className="rounded-xl p-5 sm:p-6 w-full max-w-xs">
                                    <h4 className="text-lg font-semibold text-[#112D49] mb-[6px]">Review this Product</h4>
                                    <p className="text-xs text-[#112D49] mb-[25px]">Share your thought with other customers</p>
                                    <CustomButton
                                        buttonClass={'text-white'}
                                        buttonText={' Write a Customer Review'}
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="my-8" style={{ borderBottom: '3px solid', borderImage: 'linear-gradient(90deg, rgba(17,45,73,0) 0%, #112D49 52.4%, rgba(17,45,73,0) 100%) 1' }} />

                        <div className="flex items-start gap-4 flex-col sm:flex-row">
                            <img
                                src={reviewerImg}
                                alt="Kathryn Murphy"
                                className="w-[66px] h-[66px] rounded-full object-cover border-2 border-[#E5EAF1]"
                            />
                            <div>
                                <div className="flex items-center gap-2 flex-wrap">
                                    <FiveStarRatingBig/>
                                    <span className="text-gray-400 text-xs">23/05/2025</span>
                                </div>
                                <div className="font-semibold text-[#112D49] text-base">Kathryn Murphy</div>
                                <div className="text-gray-600 text-sm mt-2 max-w-2xl">
                                    Excellent router that offers great value for its price. The setup process is
                                    straightforward and user-friendly, making it easy even for non-technical users.
                                    With two powerful 5 dBi antennas, the router delivers a strong and stable network
                                    connection throughout the home or office, ensuring no lag or disconnections during
                                    browsing, streaming, or gaming. Its compact design fits well in any space, making it
                                    both efficient and unobtrusive. Highly recommended for reliable everyday internet use.
                                </div>
                            </div>
                        </div>
                    </div>
                );
            case 'specs':
                return (
                    <div>
                        <h3 className="text-xl font-semibold text-[#112D49] mb-4">Specifications</h3>
                        <ul className="list-disc list-inside text-gray-700 space-y-2 text-sm sm:text-base">
                            <li>ADSL2+ Router with 300 Mbps speed</li>
                            <li>4 Ethernet Ports + 1 WAN</li>
                            <li>Dual 5dBi External Antennas</li>
                        </ul>
                    </div>
                );
            case 'faq':
                return (
                    <div className="text-center text-gray-500 text-lg py-12">
                        Coming Soon...
                    </div>
                );
            default:
                return null;
        }
    };

    return (
        <div className="md:mt-16 sm:mt-10 mt-8 max-w-6xl mx-auto px-2 sm:px-6">
            <div className="relative flex border-none bg-transparent" style={{ minHeight: 48 }}>
                {TABS.map(({ key, label, align }, i) => (
                    <button
                        key={key}
                        ref={el => tabRefs.current[i] = el}
                        onClick={() => setActiveTab(key)}
                        className={`flex-1 py-2 px-3 text-base sm:text-md font-semibold bg-transparent focus:outline-none transition-colors duration-200 ${align} ${activeTab === key ? 'text-[#112D49]' : 'text-gray-500 hover:text-[#112D49]'}`}
                    >
                        {label}
                    </button>
                ))}
                <span
                    ref={indicatorRef}
                    className="absolute bottom-0 h-[4px] max-sm:w-[100px] bg-[#112D49] rounded transition-all duration-300 z-10"
                    style={{ left: 0, width: 0 }}
                />
            </div>

            <div
                className="w-full my-8"
                style={{
                    borderBottom: '3px solid',
                    borderImage: 'linear-gradient(90deg, rgba(17,45,73,0) 0%, #112D49 52.4%, rgba(17,45,73,0) 100%) 1',
                    marginTop: '-3px'
                }}
            />

            <div className="rounded-xl shadow border border-[#E5EAF1] bg-white p-6 sm:p-8">
                {renderContent()}
            </div>
        </div>
    );
};

export default ProductDetailTabs;
