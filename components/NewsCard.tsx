import React from 'react'
import Image from 'next/image'

export const NewsCard = ({text,image,className1,className2}:any) => {
  return (
    <div className={`flex flex-col group text-sm ${image? 'h-[302px]' : 'h-[129px]' } basis-1/3 flex-1 ${className2}`}>
        {image ? 
        <Image className='mt-0 ' src={image} alt='9080' />
        : ''}
        <div className={` pt-5 z-30 h-full transition-all duration-300 ease-in-out 
                        rounded-br-md ${image? 'group-hover:-mt-3' : '' } ${className1}`
                        }>
            <div className={`p-4 z-30 h-full border-textgray border-r-1 
                            rounded-br-md border-b-1 group-hover:border-primary ${className1}`
                            }>
                <h2>
                    {text}
                </h2>
            </div>
        </div>
    </div>
  )
}
