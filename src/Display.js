import React from 'react';
import './App.css';
import  './Display.css';


class Display extends React.Component {

    render = () => {


      let showError = (this.props.maxValue <= this.props.startVal && "error")||(this.props.startVal < 0 && "error")|| (this.props.isNumberEnter && "enter value and press'set'") || this.props.value;
      let classForError=(this.props.maxValue===this.props.value)||(this.props.maxValue<this.props.value)||(this.props.startVal<0)?'displred':'';


        return (
            <div  className="counter-display">
               <span className={classForError} >{showError}</span>
            </div>
         );
    }
}


export default Display;
