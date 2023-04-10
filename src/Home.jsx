import React, { useEffect } from 'react'
import Main from './Main';
import Options from './Options';
import Edit from './Edit';
import { useGlobalContext } from './state/context';
function Home() {
     const { payload } = useGlobalContext();
     // payload.map(data => {
     //      console.log(data.key);
     // })
     return (
          <div className='home'>
               <Options />
               <Main />
               <Edit />
          </div>
     )
}

export default Home