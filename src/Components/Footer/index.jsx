import React from 'react'

function Footer() {
  return (
    <div className='bg-[#28262D] w-full '>
        <div  className='flex gap-[50px] w-full h-[200px] py-[20px] justify-around'>
            <div>
                <h2 className='text-gray-light  mb-[15px] text-[18px]'>Company</h2>
                <p className='text-[#8c8b8b]'>About Us</p>
                <p className='text-[#8c8b8b]'>Careers</p>  
            </div>
            <div>
                <h2 className='text-gray-light mb-[15px] text-[18px]'>Need Help</h2>
                <p className='text-[#8c8b8b]'>VIsit Help Center?</p>
                <p className='text-[#8c8b8b]'>Shere FeedBack</p>  
            </div>
            <div>
                <h2 className='text-gray-light mb-[20px] text-[18px]'>View Website in</h2>
                <buuton className="bg-[#3b3b3b] py-[10px] px-[25px] border border-gray-light rounded-[30px] text-gray-light cursor-pointer flex gap-[7px]">
                    <ion-icon name="checkmark-outline"></ion-icon>English
                </buuton>   
            </div>
            <div>
                <h2 className='text-gray-light mb-[20px] text-[18px]'>Social Media</h2>
                <div className='text-gray-light text-[25px] flex gap-[10px]'>
                    <div className='bg-[#3b3b3b] w-[40px] h-[40px] border border-gray-light rounded-[50px] p-[2px] px-[7px]'>
                       <ion-icon name="logo-instagram"></ion-icon>
                    </div>
                    <div className='bg-[#3b3b3b] w-[40px] h-[40px] border border-gray-light rounded-[50px] p-[2px] px-[7px]'>
                       <ion-icon name="logo-twitter"></ion-icon> 
                    </div>
                  
                </div>
            </div>
            <div className='flex flex-col gap-[15px]'>
                <h2 className='text-gray-light text-[18px]'>Download Our App</h2>
                <div className='w-[170px] flex gap-[10px] bg-[black] rounded-[30px] py-[5px] px-[10px]'>
                    <div className='text-[30px] text-gray-light'>
                       <ion-icon name="logo-apple"></ion-icon>
                    </div>
                    <div>
                        <p className='text-[10px] text-gray-light'>Download on the</p>
                        <h3 className='text-[20px] text-gray-light'>App Store</h3>
                    </div>
                </div> 
                <div className='w-[170px] flex gap-[10px] bg-[black] rounded-[30px] py-[5px] px-[10px]'>
                    <div className='text-[30px] text-gray-light'>
                       <ion-icon name="logo-google-playstore"></ion-icon>
                    </div>
                    <div>
                        <p className='text-[10px] text-gray-light'>GET IT ON </p>
                        <h3 className='text-[20px] text-gray-light'>Google Play</h3>
                    </div>
                </div>
            </div>
        </div>
        <hr className='text-gray-light'/>
        <div className=' w-full flex items-center justify-between py-[10px] px-[50px]'>
            <div className='flex gap-[25px] text-[#8c8b8b]' >
                <p>@ 2023 STREAM X. All Rights Reserved.</p>
                <p>Terms Of Use</p>
                <p>Privacy POlicy</p>
                <p>FAQ</p>
            </div>
            <div className='w-[120px] h-[27]'>  
              <h1 className='text-[25px] text-gray-light'>STREM<span className='text-[30px] text-[red] '>X</span></h1>
            </div>
        </div>
    </div>
  )
}

export default Footer