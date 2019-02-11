import React from 'react'

export default function({counter, changeCb, clickCb}){
  return(
    <div>
      <input
        type="text"
        onChange={changeCb}
        value={counter}
      />
      <button onClick={clickCb}>
        I am a counter {counter}
      </button>
    </div>
  )
}
