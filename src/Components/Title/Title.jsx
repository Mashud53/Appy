import React from 'react';

const Title = ({title, desc}) => {
    return (
        <div className='text-center'>
                <h2 className='text-2xl font-bold'>{title}</h2>
                <p className='text-sm text-gray-500 pb-8 pt-3'>{desc}</p>

            </div>
    );
};

export default Title;