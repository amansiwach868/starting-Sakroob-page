import React from 'react'

const FeaturedCategories = () => {
    const styles = [
        'col-start-1 col-end-3 row-start-1 row-end-2 bg-[#D5E8FF]',
        'col-start-3 col-end-4 row-start-1 row-end-2 bg-[#EEF4FB]',
        'col-start-4 col-end-5 row-start-1 row-end-2 bg-[#E5E4E2]',
        'col-start-1 col-end-2 row-start-2 row-end-3 bg-[#EEF4FB]',
        'col-start-2 col-end-3 row-start-2 row-end-3 bg-[#E5E4E2]',
        'col-start-3 col-end-5 row-start-2 row-end-3 bg-[#D5E8FF]'
    ];
    return (
        <div>
            <div className="grid grid-cols-4 grid-rows-2 gap-6">
                <div className="col-start-1 col-end-3 row-start-1 row-end-2 bg-red-200">Div 1</div>
                <div className="col-start-3 col-end-4 row-start-1 row-end-2 bg-blue-200">Div 2</div>
                <div className="col-start-4 col-end-5 row-start-1 row-end-2 bg-green-200">Div 3</div>
                <div className="col-start-1 col-end-2 row-start-2 row-end-3 bg-yellow-200">Div 4</div>
                <div className="col-start-2 col-end-3 row-start-2 row-end-3 bg-pink-200">Div 5</div>
                <div className="col-start-3 col-end-5 row-start-2 row-end-3 bg-purple-200">Div 6</div>
            </div>
        </div>
    )
}

export default FeaturedCategories
