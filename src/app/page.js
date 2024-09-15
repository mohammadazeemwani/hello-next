import React from 'react';
import TimeStamp from '@/components/TimeStamp';
function Home(){
  // const [time, setTime] = React.useState(null);
  const time = new Date().toLocaleString()

  // React.useEffect(() => {
  //   setTime(new Date().toLocaleTimeString())
  // }, []); // runs just hydration time (first time render)
  
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