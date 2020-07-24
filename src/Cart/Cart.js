import React, { Component } from 'react';
import Summary from '../Summary/Summary.js';
import './Cart.css';

export default class Cart extends Component {
    render() {
        const total = Object.keys(this.props.selected).reduce(
            (acc, curr) => acc + this.props.selected[curr].cost,
            0
            );
        return (
            <section className="main__summary">
                <h2>Your cart</h2>
                <Summary
                    selected={this.props.selected}
                    USCurrencyFormat={this.props.USCurrencyFormat}
                />
                <div className="summary__total">
                    <div className="summary__total__label">Total</div>
                    <div className="summary__total__value">
                    {this.props.USCurrencyFormat.format(total)}
                    </div>
                </div>
            </section>
        );
    };
}