import React, { Component } from 'react';
import './Step.css';

class Step extends Component {

    constructor(props) {
        super(props);

    }

    render() {
        return (
            <div className="Krok">
                <input type="number" value={this.props.propsStepValue} ref={(data) => { this._inputStep = data }} onChange={() => {
                    this.props.changeStepValueMethod(this._inputStep.value)
                }} />

            </div>

        );
    }

}

export default Step;