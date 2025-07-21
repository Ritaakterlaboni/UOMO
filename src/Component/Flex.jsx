import React from 'react'

const Flex = ({children,className}) => {
  return (
    <div className={`items-center flex ${className}`}>{children}</div>
  )
}

export default Flex