import React from 'react';
import './App.css';



class Button extends React.Component {


    render = () => {
         return (
                <button
                    disabled={this.props.disabled} onClick={this.props.onBtnClick}
                >{this.props.children}</button>

        )
    }

}


export default Button;
