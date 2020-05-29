import React from 'react';
import './App.css';
import Display from "./Display";
import Button from "./Button";
import EnterDisplay from "./EnterDisplay";


class App extends React.Component {
    state = {
        value: 0,
        startVal: 0,
        maxVal: 3,
        isSetDisabled: false,
        isResetDisabled: true,
        isIncDisabled: true,
        isHidden:false,
        isNumberEnter: false

     };


     saveState=()=>{
         let stateAsAString=JSON.stringify(this.state);
         localStorage.setItem("state",stateAsAString);
     };
     restoreState=()=>{
         let state={
             value: 0,
             startVal: 0,
             maxVal: 0,
             isSetDisabled: false,
             isResetDisabled: true,
             isIncDisabled:true,
             isHidden:false,
             clicked:false
         };
         let stateAsString=localStorage.getItem("state");
         if(stateAsString){
             state=JSON.parse(stateAsString);
         }
         this.setState(state)
     }
     componentDidMount() {
         this.restoreState();
     }

    setStartVal=(startVal)=>{

        this.setState({
            startVal,
            isNumberEnter: true

        });
    }
    setMaxVal=(maxVal)=>{
        this.setState({
                maxVal

            }, this.saveState
        )
    }

    setValue = ()=> {
         this.setState({
             value:this.state.startVal,
             maxVal:this.state.maxVal,
             clicked:true,
             isIncDisabled:false,
             isNumberEnter: false
         },this.saveState);
    }
    //  clickedOnBtn=()=>{
    //     this.setState({
    //         clicked:!this.state.clicked
    //     })
    // }


    addValue = () => {
           this.setState({
            value: this.state.value + 1
        }, () => {
            if (this.state.value >= this.state.maxVal) {
                this.setState({
                    isSetDisabled: true,
                    isIncDisabled:true,
                    isResetDisabled: false
                })
            }
        })
    };

    resValue = () => {
        this.setState({
            value: this.state.startVal,
            isResetDisabled: true,
            isSetDisabled: false,
            isIncDisabled:false

        });
    }





    render = () => {

        return (
            <div className="App">
                <div className="wrapper">
                    <div className="counter1">
                        <EnterDisplay   className="enter-display"
                                        setStartVal={this.setStartVal}
                                        setMaxVal={this.setMaxVal}
                                        startVal={this.state.startVal}
                                        maxVal={this.state.maxVal}

                                      />
                        <div className="buttons-block">
                            <Button disabled={this.state.isSetDisabled}
                                    onBtnClick={this.setValue}

                            >set</Button>
                        </div>
                    </div>
                    <div className="counter2">
                        <Display className="display"
                            setVal={this.setValue}
                            value={this.state.value}
                            maxValue={this.state.maxVal}
                            startVal={this.state.startVal}
                            clicked={this.state.clicked}
                            isNumberEnter={this.state.isNumberEnter}

                        />
                        <div className="buttons-block">
                            <Button onBtnClick={this.addValue}
                                    disabled={this.state.isIncDisabled}>inc</Button>
                            <Button onBtnClick={this.resValue}
                                    disabled={this.state.isResetDisabled}>res</Button>
                        </div>
                    </div>
                    {/*<div className="counter3">*/}

                    {/*    { !this.state.clicked &&<EnterDisplay   className="enter-display"*/}
                    {/*                    setStartVal={this.setStartVal}*/}
                    {/*                    setMaxVal={this.setMaxVal}*/}
                    {/*                    startVal={this.state.startVal}*/}
                    {/*                    maxVal={this.state.maxVal}*/}
                    {/*    />}*/}

                    {/*    {this.state.clicked&&<Display*/}
                    {/*        setVal={this.setValue}*/}
                    {/*        value={this.state.value}*/}
                    {/*        maxValue={this.state.maxVal}*/}
                    {/*        clicked={this.state.clicked}*/}

                    {/*    />}*/}
                    {/*    <div className="buttons-block">*/}
                    {/*        <Button onBtnClick={this.addValue}*/}
                    {/*                disabled={this.state.isSetDisabled}>inc</Button>*/}
                    {/*        <Button onBtnClick={this.resValue}*/}
                    {/*                disabled={this.state.isResetDisabled}>res</Button>*/}
                    {/*        <Button disabled={this.state.isSetDisabled}*/}
                    {/*                onBtnClick={this.setValue}*/}
                    {/*                clicked={this.clickedOnBtn}>set</Button>*/}
                    {/*    </div>*/}
                    {/*</div>*/}
                </div>
            </div>

        );
    }
}


export default App;
