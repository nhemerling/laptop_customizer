import React, { Component } from 'react';
import Option from '../Option/Option.js';
import './Feature.css';
import slugify from 'slugify';
import Features from '../features.js';

export default class Feature extends Component {
    render () {
        const options = Features[this.props.feature].map(item => {
            const itemHash = slugify(JSON.stringify(item));
            return (
              <div key={itemHash} className="feature__item">
                <Option
                  feature={this.props.feature}
                  selected={this.props.selected}
                  USCurrencyFormat={this.props.USCurrencyFormat}
                  updateFeature={this.props.updateFeature}
                  itemHash={itemHash}
                  item={item}
                />
              </div>
            );
        });
        return(
            <>
                <legend className="feature__name">
                    <h3>{this.props.feature}</h3>
                </legend>
                {options}
            </>
        );
    };
}