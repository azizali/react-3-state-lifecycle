import React from 'react'
import Score from '../Score'

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
      <div className="row">
        <div className="col-6 border p-5">
          <input
            type="text"
            onChange={this.handleInputChange}
            value={counter}
          />
          <button onClick={this.handleClickCounter}>
            I am a counter {counter}
          </button>
        </div>
        <div className="col-6 border bg-dark text-white p-5">
          <Score value={counter} />
        </div>
      </div>
    )
  }
}

export default Counter