import React,{Component} from 'react';


class Input extends Component{
  state ={
    inputField : ''
  }
  onSubmit = (event) =>{
    event.preventDefault();
    this.props.storeInput(this.state.inputField);
  }
  onChange = (e)=>{
    let inputField = e.target.value;
    this.setState({inputField});
  }
  render(){
    console.log(this.state);
    return(
      <div>
        <form onSubmit={this.onSubmit}>
        <input placeholder="Enter a Food Item" onChange={this.onChange}/>
        <input type="submit" />
      </form>

      </div>
    )
  }

}

export default Input ;
