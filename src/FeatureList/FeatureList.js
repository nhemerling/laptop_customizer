import React, { Component } from 'react';
import Option from '../Option/Option.js';
import './FeatureList.css';
import slugify from 'slugify';

export default class FeatureList extends Component {
    render() {
        const features = Object.keys(this.props.features).map((feature, idx) => {
            const featureHash = feature + '-' + idx;
            const options = this.props.features[feature].map(item => {
              const itemHash = slugify(JSON.stringify(item));
              return (
                <div key={itemHash} className="feature__item">
                  <Option
                    feature={feature}
                    selected={this.props.selected}
                    USCurrencyFormat={this.props.USCurrencyFormat}
                    features={this.props.features}
                    updateFeature={this.props.updateFeature}
                    itemHash={itemHash}
                    item={item}
                  />
                </div>
              );
            });
            return (
              <fieldset className="feature" key={featureHash}>
                <legend className="feature__name">
                  <h3>{feature}</h3>
                </legend>
                {options}
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