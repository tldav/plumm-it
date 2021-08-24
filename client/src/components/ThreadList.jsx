import React from 'react';
import ThreadBox from './ThreadBox';

const ThreadList = ({threads}) => {

  // useEffect(() => {}, [threads])

  return ( 
    <>
    {threads.map((thread) => (
        <ThreadBox key={thread.thread_id} thread={thread} />
      ))}
    </>
  );
}

export default ThreadList;