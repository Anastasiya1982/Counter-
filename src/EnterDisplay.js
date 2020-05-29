import React from 'react';
import './App.css';
import  './EnterDisplay.css';



class EnterDisplay extends React.Component {
    state = {
        error: true,
    }
    onMaxValChanged = (e) => {
        let newMaxVal= Number(e.currentTarget.value);
        this.props.setMaxVal(newMaxVal);
    }

    onStartValChanged = (e) => {
        let newStartVal=Number(e.currentTarget.value);
        this.props.setStartVal(newStartVal);
           }

     onKeyPress = (e) => {
         if (e.key === "Enter") {
            this.props.setMaxVal();
         }
        }
    onKeyPress = (ev) => {
        if (ev.key === "Enter") {
            this.props.setStartVal();
        }
    }


    render = () => {
        let classErrorMaxValue = (this.props.maxVal < 0 )|| (this.props.maxVal <= this.props.startVal)?"red":"";
        let classErrorStartValue = (this.props.startVal < 0 )|| (this.props.startVal >= this.props.maxVal)?'red':"";


        return (
            <div className="inputs-display">
                <div className="input-item">
                    <span>max value:</span>
                    <input className={classErrorMaxValue}
                           type="number"
                           step="1"
                           onChange={this.onMaxValChanged}
                           onKeyPress={this.onKeyPress}
                           value={this.props.maxVal}
                    />
                </div>
                <div className="input-item">
                    <span>start value:</span>
                    <input className={classErrorStartValue}
                           type="number"
                           step="1"
                           onChange={this.onStartValChanged}
                        // onKeyPress={this.onKeyPress}
                           value={this.props.startVal}
                    />
                </div>
            </div>
        );
    }

}


export default EnterDisplay;
