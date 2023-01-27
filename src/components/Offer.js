import React from 'react'
import Content from "../common/content";
import TitleHeader from "../common/TitleHeader";
import LightButton from '../common/Button/LightButton'
import coconut from '../assets/coconut.png'
import coconut2 from '../assets/coconut2.svg'
import RedButton from '../common/Button/RedButton';

import { offerData } from "../Data/Home"

const Offer = () => {
  return (
    <div className="max-w-[1400px] w-[92%] mx-auto my-24">
        <div className="w-[90%]  laptop:w-[50%]">
            <TitleHeader text="What do we offer?"/>
            <Content text="We have a range of products and services for you. " />
        </div>
      <div className="flex flex-wrap gap-10 justify-around mt-4">
        {offerData?.map((item) => (
            <div key={item.id} className="relative rounded-[24px] p-8 shadow-lg w-[85%] mobile:w-[70%] tablet:w-[400px]">
                {item.active === true ? (
                    <img className='absolute right-0 top-0 w-[60px] h-[60px]' src={coconut} alt="coco"/>
                ) : (
                    <img className='absolute right-0 top-0 w-[60px] h-[60px]' src={coconut2} alt="coco"/>
                )}
                <div className='w-[70px] h-[70px] mt-10'>
                    <img src={item.img} alt="coco" />
                </div>
                <div>
                    <p className='text-[18px] my-4 text-blue font-[600]'>{item?.name} </p>
                    <p className='text-grey mb-4'>{item?.content}</p>
                    {item.active === true ? (
                        <RedButton text={item?.btn}/>
                        ) : (
                        <LightButton text={item?.btn}/>
                    )}
                </div>
            </div>
        ))}
      </div>
    </div>
  )
}

export default Offer