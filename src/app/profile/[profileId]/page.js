import React from 'react';
import Image from 'next/image';
import { getProfileData } from './config';

export async function generateMetadata({ params }) {
    const { name } = await getProfileData(params.profileId);
    return {
        title: name,
    };
}

async function Profile({ params }) {
    const { name, imgURL, followers, location } = await getProfileData(params.profileId);

    return (
        <main className='mt-11'>
            <div className='w-fit border-2 border-purple-500 rounded-md flex flex-col'>
                <Image 
                    className='rounded-t-[3px]'
                    src={imgURL} 
                    layout='responsive'
                    width={250}
                    height={170}
                    alt='Profile Image'
                />
                <div className='p-4 flex flex-col justify-around gap-2'>
                    <h1 className='text-lg italic font-medium my-1'>{name}</h1>
                    <p>Followers:{" "}<span className='py-1 px-2 bg-sky-100'>{followers}</span></p>
                    <p>Location :{" "}<span className='py-1 px-2 bg-yellow-100'>{location}</span></p>
                </div>
            </div>
        </main>
    )
}

export default Profile;
