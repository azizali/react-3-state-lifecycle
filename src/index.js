import React from 'react'
import { render } from 'react-dom'
import Counter from './Counter'

function App(){
  return(
    <div>Hi
      <Counter initialValue={10} />
    </div>
  )
}

render(<App />, document.querySelector('#app'))