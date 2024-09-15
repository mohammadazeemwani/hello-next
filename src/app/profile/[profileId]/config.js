import React from 'react';
import PROFILE_DATA from './profileData.js';

export const getProfileData = React.cache(async (profileId) => {
    console.log('getting profile', profileId);
    delay(1000);
    return PROFILE_DATA[profileId];

})

function delay(ms){
    new Promise(resolve => setTimeout(resolve, ms))
}