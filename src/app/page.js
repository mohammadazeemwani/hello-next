import React from 'react';
import TimeStamp from '@/components/TimeStamp';
import { readFile, writeFile } from '@/helpers/file-helpers';
export const dynamic = 'force-dynamic';

const DATABASE_PATH = "/src/database.json";

function Home(){
  const time = new Date().toLocaleString()
  let { hits } = JSON.parse(readFile(DATABASE_PATH));
  hits++;
  writeFile(DATABASE_PATH, JSON.stringify({ hits }));

  return (
    <> 
    <main className="mt-5">
      <div className="px-3 py-4 bg-yellow-100 border border-orange-500 rounded-md">
          <h1>Greetings Fellas</h1>
      </div>
      <p className='my-8 font-mono'>
        You are visitor number:
        {' '}
        <span className='p-1 bg-yellow-100 rounded-sm'>{hits}</span>  
      </p>
    </main>

    <TimeStamp className="mb-14" time={time}/>
    </>
  )
}

export default Home;