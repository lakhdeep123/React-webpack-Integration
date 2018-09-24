import React, { Component } from 'react';
import { adultIncrement ,adultDecrement } from '../actions/counterAction';
import { connect } from 'react-redux';
var that;
class TestComponent extends Component {
    constructor(props) {
        super(props);
        this.state={disabled:false};
        that=this;

    }
   
    handlePlus(e)
    {
        debugger;
        that.props.adultIncrement(e.target.id);
     
        
       
    }
   
    handleMinus2(e)
    {
       var text= $("#text2").val();
          text=parseInt(text)-1;
          $("#text2").val(text);
      

    }
    handleMinus3(e)
    {
       var text= $("#text3").val();
          text=parseInt(text)-1;
          $("#text3").val(text);
      

    }

    render () {
        return (
           
<div>
    <span>Adult : </span>
<input type="button" id="adult" className="plus" disabled={this.state.disabled} onClick={this.handlePlus} value="+"></input>
<input type="text" value={this.props.adult}  id="text1"></input>
<input type="button" id="btnminus1" className="minus" onClick={this.handleMinus1} value="-"></input>

<br/><br/> <span>Children : </span>
<input type="button"  id="children" className="plus" disabled={this.state.disabled} onClick={this.handlePlus}value="+"></input>
<input type="text"   value={this.props.children} id="text2"></input>
<input type="button" id="btnminus1" className="minus" onClick={this.handleMinus2} value="-"></input>

<br/><br/> <span>Infant : </span>
<input type="button"  id="infant" className="plus" disabled={this.state.disabled} onClick={this.handlePlus} value="+"></input>
<input type="text"   value={this.props.infant} id="text3"></input>
<input type="button" id="btnminus1" className="minus" onClick={this.handleMinus3} value="-"></input>

    </div>
          
)
    }
}

const mapStateToProps = (state) => {
   debugger;

  
   if(that!=undefined)
   {
       if(state.counter.error)
     that.setState({disabled:true});
     else
     {
       that.setState({disabled:false});
     }
   }
  


    const { adult, children, infant, error } = state.counter;
    return {
        adult,
        children,
        infant,
        error
    };
};

const mapActionsToProps = {
    adultIncrement,
    adultDecrement
  
}
  
export default connect(mapStateToProps, mapActionsToProps)(TestComponent);
