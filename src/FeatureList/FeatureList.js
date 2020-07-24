import React, { Component } from 'react';
import Feature from '../Feature/Feature.js';
import './FeatureList.css';


export default class FeatureList extends Component {
    render() {
        const features = Object.keys(this.props.features).map((feature, idx) => {
            const featureHash = feature + '-' + idx;
            return (
              <fieldset className="feature" key={featureHash}>
                <Feature
                  feature={feature}
                  selected={this.props.selected}
                  USCurrencyFormat={this.props.USCurrencyFormat}
                  features={this.props.features}
                  updateFeature={this.props.updateFeature}
                />
              </fieldset>
            );
        });
        return (
          <>
            {features}
          </>
        );
    };
}