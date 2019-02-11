import React from 'react'

class Counter extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      counter: props.initialValue
    }
    this.handleClickCounter = this.handleClickCounter.bind(this)
  }

  shouldComponentUpdate(props, state){
    if(state.counter === 15){
      return false
    } else {
      return true
    }
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