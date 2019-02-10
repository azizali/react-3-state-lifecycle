import React from 'react'

function Counter(props){
  // Wrong way to track values that need to be rendered
  let num = props.initialValue

  return(
    <div onClick={()=>{ 
      num++
      alert('Counter is: ' + num)
    }}>
      I am a counter {num}
    </div>
  )
}

export default Counter