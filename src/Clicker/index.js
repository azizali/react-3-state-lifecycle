import React from 'react'

export default function({counter, changeCb, clickCb}){
  return(
    <div>
      <input
        type="text"
        onChange={(e)=>{ changeCb(e.target.value) }}
        value={counter}
      />
      <input
        type="button"
        value="Reset"
        onClick={()=>{ changeCb(0) }}
      />
      <button onClick={clickCb}>
        I am a counter {counter}
      </button>
    </div>
  )
}
