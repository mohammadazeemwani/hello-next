import React from 'react';
import TimeStamp from '@/components/TimeStamp';
export const dynamic = 'force-dynamic';
const timezoneConfig = {
  timeZone: 'Asia/Kolkata',
  year: 'numeric',
  month: 'long',
  day: 'numeric',
  hour: 'numeric',
  minute: 'numeric',
  second: 'numeric',
  hour12: true
}


function Home(){
  const time = new Intl.DateTimeFormat('en-US', timezoneConfig).format(new Date());

  return (
    <> 
    <main className="mt-5">
      <div className="px-3 py-4 bg-yellow-100 border border-orange-500 rounded-md">
          <h1>Greetings Fellas</h1>
      </div>
    </main>

    <TimeStamp className="mb-14" time={time}/>
    </>
  )
}

export default Home;