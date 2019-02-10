import React from 'react'

// function Counter(props){
//   // Wrong way to track values that need to be rendered
//   let num = props.initialValue

//   return(
//     <div onClick={()=>{ 
//       num++
//       alert('Counter is: ' + num)
//     }}>
//       I am a counter {num}
//     </div>
//   )
// }

class Counter extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      counter: props.initialValue
    }
  }
  render(){
    let { counter } = this.state
    return(
      <div onClick={()=>{ 
        this.setState({ counter: ++counter},
          ()=>{
            alert('Counter is: ' + this.state.counter)
          })
      }}>
        I am a counter {counter}
      </div>
    )
  }
}

export default Counter