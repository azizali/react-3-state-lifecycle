import React from 'react'
import Score from '../Score'
import Clicker from '../Clicker'

class Counter extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      counter: props.initialValue
    }
    this.incrementCounter = this.incrementCounter.bind(this)
    this.setCounterValue = this.setCounterValue.bind(this)
  }

  shouldComponentUpdate(props, state){
    if(state.counter === 15){
      return false
    } else {
      return true
    }
  }
  
  setCounterValue(val){
    this.setState({ counter: val })
  }

  incrementCounter(){ 
    this.setState({ counter: ++this.state.counter})
  }

  render(){
    let { counter } = this.state
    return(
      <div className="row">
        <div className="col-6 border p-5">
          <Clicker
            counter={counter}
            changeCb={this.setCounterValue}
            clickCb={this.incrementCounter}
          />
        </div>
        <div className="col-6 border bg-dark text-white p-5">
          <Score value={counter} />
        </div>
      </div>
    )
  }
}

export default Counter