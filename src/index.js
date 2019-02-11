import React from 'react'
import { render } from 'react-dom'
import Counter from './Counter'

function App(){
  return(
    <Counter initialValue={10} />
  )
}

render(<App />, document.querySelector('#app'))