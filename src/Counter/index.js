import React from 'react'

class Counter extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      counter: props.initialValue
    }
    this.handleClickCounter = this.handleClickCounter.bind(this)
    this.handleInputChange = this.handleInputChange.bind(this)
  }

  shouldComponentUpdate(props, state){
    if(state.counter === 15){
      return false
    } else {
      return true
    }
  }
  
  handleInputChange(e){
    this.setState({ counter: parseInt(e.target.value) })
  }

  handleClickCounter(){ 
    this.setState({ counter: ++this.state.counter})
  }

  render(){
    let { counter } = this.state
    return(
      <div>
        <input
          type="text"
          onChange={this.handleInputChange}
          value={counter}
        />
        <button onClick={this.handleClickCounter}>
          I am a counter {counter}
        </button>
      </div>
    )
  }
}

export default Counter