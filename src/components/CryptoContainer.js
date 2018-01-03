import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import Spinner from 'react-native-loading-spinner-overlay';

import FetchCoinData from './../Actions/FetchCoinData';
import CoinCard from './CoinCard';
import DetailCoin from './DetailCoin';

class CryptoContainer extends Component {

    componentWillMount() {
        this.props.FetchCoinData();
    }

    constructor() {
        super();
        this.state = {
          detailView: false,
          data : {
            coin: {
                name: "Bitcoin",
                symbol : "BTC",
                price_usd: "14923.2",
                percent_change_24h: "8.74",
                percent_change_7d:"-7.4"
            }
          }
        }
    }


    renderCoinCards() {
        const { crypto } = this.props;
        return crypto.data.map((coin) => 
            <CoinCard 
                state={this.state}
                key={coin.name}
                coin_name={coin.name}
                symbol={coin.symbol}
                price_usd={coin.price_usd}
                percent_change_24h={coin.percent_change_24h}
                percent_change_7d={coin.percent_change_7d}
            />
        ) 
    }


    render() {

        const { crypto } = this.props;
        const { contentContainer } = styles;
        const { detailView } = this.state;


        if (crypto.isFetching && !detailView) {
            return (
                <View>
                    <Spinner
                        visible={crypto.isFetching}
                        textContent={"Yüklənir..."}
                        textStyle={{color: '#253145'}}
                        animation="fade"
                    />
                </View>
            )
        }
        
        if (detailView) {

            return (
                <View>
                    <DetailCoin
                        key={this.state.data.coin.name}
                        coin_name={this.state.data.coin.name}
                        symbol={this.state.data.coin.symbol}
                        price_usd={this.state.data.coin.price_usd}
                        percent_change_24h={this.state.data.coin.percent_change_24h}
                        percent_change_7d={this.state.data.coin.percent_change_7d}
                     />
                </View>   
            )
        }

        return (
            <ScrollView contentContainerStyle={contentContainer}>
                {this.renderCoinCards()}
            </ScrollView>
        )
        

    }
}

const styles = {
    contentContainer: {
        paddingBottom: 100,
        paddingTop: 0
    }
}

function mapStateToProps(state) {
    return {
        crypto: state.crypto
    }
}

export default connect(mapStateToProps, { FetchCoinData })(CryptoContainer)