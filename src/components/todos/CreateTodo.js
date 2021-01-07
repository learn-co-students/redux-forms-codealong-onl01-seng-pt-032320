import React, { Component } from 'react'
import { connect } from 'react-redux';

class CreateTodo extends Component {

  // constructor() { super(); this.state = {text: '',}; }
  state = { text: '' };
   
  handleChange = (e) => { this.setState({text: e.target.value}); };
  // handleSubmit = (e) => { e.preventDefault(); this.props.addTodo(this.state) }
  handleSubmit = (e) => { e.preventDefault(); this.props.dispatch({ type: 'ADD_TODO', payload: this.state }); }

  render() {
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
          <p>
            <label>add todo</label>
            <input type="text" onChange={this.handleChange} value={this.state.text} />
          </p>
          <input type="submit" />
        </form> 
      </div>
    )
  }
}

// const mapDispatchToProps = dispatch => {
//  return {
//    addTodo: stateText => dispatch({ type: 'ADD_TODO', payload: stateText }) 
//  };
// };

export default connect()(CreateTodo);
// export default CreateTodo;