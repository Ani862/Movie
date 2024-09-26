import React from 'react'

function Header() {
  return (
    <header className=' w-full flex px-[50px] py-[20px] items-center justify-between fixed'>
        <div className="flex items-center gap-[50px]">
            <div className='w-[120px] h-[27]  '>
              <h1 className='text-[25px] text-gray-light'>STREM<span className='text-[30px] text-[red] '>X</span></h1>
            </div>
            <nav>
                <ul className='flex gap-[32px] text-[18px] text-gray-light'>
                    <li>Home</li>
                    <li>Movies</li>
                    <li>Series</li>
                    <li>Tranding</li>
                    <li>Categories</li>
                </ul>
            </nav>
        </div>
        <div className='flex w-[350px] items-center gap-[10px]'>
            <input type='text' placeholder='Search Movies, Series... ' className='w-[300px] h-[40px] border rounded-[20px] p-[10px] ' /> 
            <div className='text-[50px] text-gray-light '>
               <ion-icon name="person-circle-outline"></ion-icon>
            </div>       
            {/* <img className='w-[40px] h-[4   0px] rounded-[50%]' src='https://www.transparentpng.com/thumb/user/gray-user-profile-icon-png-fP8Q1P.png' /> */}
       </div>
    </header>
  )
}

export default Header