import React, { useRef } from 'react'
import { useGlobalContext } from './state/context';
function Main() {
     const { payload, setPayload, setShow, setKey } = useGlobalContext();
     const count = useRef(0);
     function handleDelete(id) {
          handleSubmit();
          setPayload(payload.filter(item => {
               return item.key !== id
          }))
     }

     function handleSubmit() {
          count.current = 0;
          setPayload(payload.map(element => {
               count.current += 1;
               return { ...element, key: count.current }
          }))
     }

     function handleCancel() {
          setPayload([]);
     }

     function handleEditClick(id) {
          setShow(true);
          setKey(id);
     }

     return (
          <div className='main'>
               {
                    payload.map(data => {
                         return (
                              <>
                                   <div className='items' key={data.key}>
                                        {data.details.content}
                                        <span ><button onClick={() => handleDelete(data.key)}> delete </button></span>
                                        <span ><button onClick={() => handleEditClick(data.key)}>edit</button></span>
                                   </div>
                              </>
                         )
                    })
               }
               <div >
                    <button onClick={handleSubmit}>print</button>
                    <button onClick={handleCancel}>delete</button>
               </div>
          </div>
     )
}

export default Main