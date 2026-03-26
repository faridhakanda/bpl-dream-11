import React from 'react';

const Players = () => {
    return (
        <div className='flex justify-between w-[1140px] mx-auto mt-12 bg-lime-200'>
            <h2>Available Players</h2>
            <div className='flex gap-4'>
                <h2>Available</h2>
                <h2>Selected (0)</h2>
            </div>
        </div>
    );
};

export default Players;