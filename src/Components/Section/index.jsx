import React from 'react'

function Section() {
  return (
    <div className='w-full '>
        <img className='w-full absalute' src='https://www.ecranlarge.com/content/uploads/2019/01/spider-man-3-photo-1051480-630x380.jpg' />
        <div className=' absolute mt-[-650px] ml-[500px] text-center'>
          <div className='flex justify-center'>
            <h1 className='w-[100px] h-[40px] bg-[#bd2828] text-[25px] text-gray-light px-[5px]'>MARVEL</h1>
            <h1 className='text-[25px] text-gray-light'>STUDIOS</h1>
          </div>
  
          <h1 className='text-[#417fc5e7] text-[70px]'>SPIDER-MAN</h1>
          <h1 className='text-gray-light text-[40px]'>No Way Home</h1>

          <div className='text-[20px] text-gray-light'>
             <p>When a spell goes wrong, danagerous foes from other</p>
             <p>worlds start to appear, forcing Peter to discover what it</p>
             <p>truly means to be Spider-Man.</p>
          </div>
          <div className='my-[10px] flex gap-[20px] justify-center'>
            <button className='bg-gray-light w-[170px] py-[10px] px-[17px] rounded-[50px] text-[20px] '><ion-icon name="play-circle-outline"></ion-icon>Whatch Now</button>
            <button className='bg-[#28262D] w-[170px] py-[10px] px-[17px] rounded-[50px] text-[20px] text-gray-light'><ion-icon name="chevron-forward-circle-outline"></ion-icon>More Info</button>
          </div>
       
        </div>
    </div>
  )
}

export default Section