import React from 'react';
import TimeStamp from '@/components/TimeStamp';
export const dynamic = 'force-dynamic';


function Home(){
  const time = new Date().toLocaleString();

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