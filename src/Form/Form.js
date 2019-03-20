import React, { Component } from 'react';
import './Form.css';

class Form extends Component{

      state ={
            newItem: ''
      }

      handleInputChange = (e) =>{
            this.setState({
                  newItem: e.target.value
            });
      }

      addItemHandler = (e) =>{
            e.preventDefault();
            // Add prop
            this.props.addItem(this.state.newItem);
            this.setState({
                  newItem: ''
            });
      }

      render(){
            return(
                  <form onSubmit={this.addItemHandler}>
                        <div className="form-group">
                              <small className="form-text"><span role="img" aria-label="astronaut">👨‍🚀</span> Remember, a goal without a plan is just a wish.</small>
                              <input 
                                    type="text" 
                                    className="form-control form-control-lg" 
                                    placeholder="Add an item"
                                    onChange={this.handleInputChange}
                                    value={this.state.newItem} />                        
                        </div>
                  </form>
            );
      }
}

export default Form;