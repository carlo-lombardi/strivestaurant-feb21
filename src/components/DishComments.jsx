import React, { Component } from 'react'
import { ListGroup } from 'react-bootstrap'

export default class DishComments extends Component{
  constructor(props) {
    super(props);
    this.state = {
        render: false //Set render state to false
    }
}
    componentDidMount() {
      setTimeout(function() { //Start the timer
          this.setState({render: true}) //After 1 second, set render to true
          }.bind(this), 1000)
    }
  render(){
    const { selectedDish } = this.props
    let renderContainer = false //By default don't render anything
    if(this.state.render) { //If this.state.render == true, which is set to true by the timer.
      renderContainer =         <>
      {!selectedDish && <h1>NOTHING YET</h1>}
      {selectedDish && <h2>Comments for {selectedDish.name}</h2>}
      {selectedDish && <ListGroup>
            {
                selectedDish.comments.map(c => (
                    <ListGroup.Item key={c.id}>{c.comment}</ListGroup.Item>
                ))
            }
        </ListGroup>
      }
     </> //Add dom elements
  }
    return(
        renderContainer
        )}
      }
 

// mapping propss.selectedDish.comments