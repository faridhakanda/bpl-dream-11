import React from 'react';
import DollarIcon from '../assets/dollar.png'
import Logo from '../assets/logo.png' 
const Header = () => {
    return (
        <div className=''>
            <nav className=' flex justify-between py-8 w-[1140px] mx-auto'>
            
                <img src={Logo} alt="Logo" />
                <div className='flex gap-4 items-center'>
                    <div className='flex gap-4'>
                        <h2>Home</h2>
                        <h2>Fixture</h2>
                        <h2>Teams</h2>
                        <h2>Schedules</h2>
                    </div>
                    <button className='flex  gap-2 items-center btn font-bold'>
                        0 coins
                        <img src={DollarIcon} alt="Dollar Icon" width={24} height={24}/>
                    </button>
                </div>
                
            </nav>
            

            
        </div>
    );
};

export default Header;
