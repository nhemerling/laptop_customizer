import React, { Component } from 'react';
import Summary from '../Summary/Summary.js';
import Total from '../Total/Total.js';
import './Cart.css';

export default class Cart extends Component {
    render() {
        return (
            <section className="main__summary">
                <h2>Your cart</h2>
                <Summary
                    selected={this.props.selected}
                    USCurrencyFormat={this.props.USCurrencyFormat}
                />
                <Total
                    selected={this.props.selected}
                    USCurrencyFormat={this.props.USCurrencyFormat}
                />
            </section>
        );
    };
}