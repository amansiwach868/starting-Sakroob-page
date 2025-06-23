import React from 'react'

const HeadingAndPara = ({ headingClass, heading, paraClass, para }) => {
    return (
        <div>
            <h2 className={headingClass}>{heading}</h2>
            <p className={paraClass}>{para}</p>
        </div>
    )
}

export default HeadingAndPara
