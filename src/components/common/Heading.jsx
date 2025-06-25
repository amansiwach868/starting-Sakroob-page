import React from 'react'

const Heading = ({headingText, headingClass }) => {
  return (
      <p className={`font-bold text-2xl text-[#112D49] ${headingClass} `}>{headingText }</p>
  )
}

export default Heading