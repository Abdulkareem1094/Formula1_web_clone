import React from 'react'
import Image from 'next/image'

export const NewsCard = ({text,type,image,className1,className2}:any) => {
  return (
    <div className={`flex flex-col group text-sm ${image? 'h-[302px]' : 'h-[129px]' } basis-1/3 flex-1 ${className2}`}>
        {image ? 
        <Image className='mt-0 ' src={image} alt='9080' />
        : ''}
        <div className={` pt-4 z-30 h-full transition-all duration-300 duration ease-in-out 
                        rounded-br-xl ${image? 'group-hover:-mt-3' : '' } ${className1}`
                        }>
            <div className={`p-4 pt-0 z-30 h-full border-textgray border-r-1 
                            rounded-br-xl border-b-1 group-hover:border-primary ${className1}`
                            }>
                <h3 className='text-primary text-xxs font-titilliumWebSemiBold' >{type}</h3>
                <h2>{text}</h2>
            </div>
        </div>
    </div>
  )
}
