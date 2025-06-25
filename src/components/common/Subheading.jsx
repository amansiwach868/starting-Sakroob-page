import React from 'react'

const Subheading = ({text, subheadingClass}) => {
  return (
      <p className={`font-normal text-base text-[#3F566B] ${subheadingClass} `}>{text}</p>
  )
}

export default Subheading