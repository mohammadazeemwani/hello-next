import React from 'react';

function TimeStamp({ time, ...delegated }) {

  const wrapperClass = `bg-sky-100 border border-purple-500 rounded-md px-2 py-2 flex gap-2 w-fit mx-auto ${delegated.className}`;
  return (
    <div {...delegated} className={wrapperClass}>
      <strong>✨ Page rendered on:</strong><p>{time}</p>
    </div>
  );
}

export default TimeStamp;
