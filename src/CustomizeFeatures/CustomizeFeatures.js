import React, { Component } from 'react';
import FeatureList from '../FeatureList/FeatureList.js';
import './CustomizeFeatures.css';

export default class CustomizeFeatures extends Component {
    render() {
        return(
            <form className="main__form">
                <h2>Customize your laptop</h2>
                <FeatureList
                    selected={this.props.selected}
                    USCurrencyFormat={this.props.USCurrencyFormat}
                    updateFeature={this.props.updateFeature}
                />
            </form>
        );
    };
}