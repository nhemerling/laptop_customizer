import React, { Component } from 'react';
import FeatureList from '../FeatureList/FeatureList.js';

export default class CustomizeFeatures extends Component {
    render() {
        return(
            <form className="main__form">
                <h2>Customize your laptop</h2>
                <FeatureList
                    selected={this.props.selected}
                    USCurrencyFormat={this.props.USCurrencyFormat}
                    features={this.props.features}
                    updateFeature={this.props.updateFeature}
                />
            </form>
        )
    }
}