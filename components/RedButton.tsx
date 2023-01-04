import React from 'react'

export const RedButton = ({value}:any) => {
  return (
    <button className='m-1 p-3 px-4 text-ms text-white transition-all duration-300 bg-primary rounded-md border-none hover:bg-opacity-60'>{value}</button>
  )
}
