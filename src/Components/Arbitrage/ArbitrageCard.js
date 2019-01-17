import React from 'react';
import Paper from '@material-ui/core/Paper';
import PropTypes from 'prop-types';

import Styles from './ArbitrageCard.module.css'

class ArbitrageCard extends React.Component {
    state = {
        selectedExchange1: {currenciesF: [''],currenciesT: ['']},
        selectedExchange2: {currenciesF: [''],currenciesT: ['']},
        currencies: [''],
    };

    handleExchangeChange = (evt,number) => {
        this.setState({
            [`selectedExchange${number}`]: this.props.exchanges[evt.target.value],
        })
    };

    handleCurrencyChange = (evt,number) => {
        const {currencies} = this.state;
        currencies[number] = evt.target.value;
        this.setState({
            currencies,
        })
    };

    componentDidMount() {
        const {exchanges} = this.props;
        const first = exchanges[0];
        const second = exchanges[1];
        const currencies = [
            first.currenciesT[0],
            first.currenciesF[0],
            second.currenciesF[0],
            second.currenciesT[0],
        ];
        this.setState({
            selectedExchange1: first,
            selectedExchange2: second,
            currencies
        })
    }

    render(){
        const {selectedExchange1, selectedExchange2, currencies} = this.state;
        const {exchanges} = this.props;
        return (
            <div>
                <Paper elevation={1} className={Styles.container}>
                    <div className={Styles.selects1}>
                        <select onChange={(evt) => this.handleExchangeChange(evt,1)}>
                            {exchanges.map((item,index) => (
                                <option value={index}>{item.name}</option>
                            ))}
                        </select>
                        <select onChange={evt => this.handleCurrencyChange(evt,0)}>
                            {selectedExchange1.currenciesT.map(currency => (
                                <option value={currency}>{currency}</option>
                            ))}
                        </select>
                        <select onChange={evt => this.handleCurrencyChange(evt,1)}>
                            {selectedExchange1.currenciesF.map(currency => (
                                <option value={currency}>{currency}</option>
                            ))}
                        </select>
                    </div>
                    <div className={Styles.diagram}>
                        {currencies.map((item,index) => (
                            <div>{`${item} ${index < currencies.length-1 ? '->' : ''} `}</div>
                        ))}
                    </div>
                    <div className={Styles.selects2}>
                        <select onChange={(evt) => this.handleExchangeChange(evt,2)} defaultValue={1}>
                            {exchanges.map((item,index) => (
                                <option value={index}>{item.name}</option>
                            ))}
                        </select>
                        <select onChange={evt => this.handleCurrencyChange(evt,2)}>
                            {selectedExchange2.currenciesF.map(currency => (
                                <option value={currency}>{currency}</option>
                            ))}
                        </select>
                        <select onChange={evt => this.handleCurrencyChange(evt,3)}>
                            {selectedExchange2.currenciesT.map(currency => (
                                <option value={currency}>{currency}</option>
                            ))}
                        </select>
                    </div>
                </Paper>
            </div>
        )
    }
};

ArbitrageCard.propTypes = {
    exchanges: PropTypes.array.isRequired,
};

export default ArbitrageCard;
