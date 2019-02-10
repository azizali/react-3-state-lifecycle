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
    this.handleClickCounter = this.handleClickCounter.bind(this)
  }
  
  handleClickCounter(){ 
    this.setState({ counter: ++this.state.counter},
      ()=>{
        alert('Counter is: ' + this.state.counter)
      })
  }

  render(){
    let { counter } = this.state
    return(
      <div onClick={this.handleClickCounter}>
        I am a counter {counter}
      </div>
    )
  }
}

export default Counter