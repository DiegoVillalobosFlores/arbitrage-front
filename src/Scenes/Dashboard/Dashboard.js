import React from 'react'
import ArbitrageCard from "../../Components/Arbitrage/ArbitrageCard";



class Dashboard extends React.Component {
    state = {
        exchanges: [
            {name: 'Kraken',currenciesF: ['BTC/XBT','ETH'], currenciesT: ['USD','EUR']},
            {name: 'Vaultoro',currenciesF: ['GLD'], currenciesT: ['USD','EUR']}
        ]
    };

    render(){
        const {exchanges} = this.state;
        return (
            <div>
                <ArbitrageCard exchanges={exchanges}/>
            </div>
        )
    }

}

export default Dashboard;
