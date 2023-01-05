import React from 'react'

export const RedButton = ({value,className}:any) => {
  return (
    <button 
    className={`m-1 p-3 px-4 text-ms font-titilliumWebRegular text-white transition-all duration-300 
   rounded-md border-none hover:bg-opacity-60 tracking-widest ${className}`
  }>{value}</button>
  )
}
