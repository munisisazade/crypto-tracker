import React from 'react';
import { 
    View,
    Text,
    StyleSheet,
    Image,
    ScrollView,
    Button
} from 'react-native';
import { images } from '../Utils/CoinIcons';

const styles = StyleSheet.create({
    container: {
        display: "flex", 
        padding: 20
    },
    upperRow: {
        display: "flex",
        justifyContent: "center",
  		alignItems: "center",
        marginBottom: 15
    },
    coinSymbol: {
        marginTop: 10,
        marginLeft: 20,
        marginRight: 5,
        fontSize: 40,
        fontWeight: "bold",        
    },
    coinName: {
        marginTop: 10,
        fontSize: 30, 
    },
    seperator: {
        marginTop: 10,
    },
    coinPrice: {
        marginTop: 10,
        marginLeft: 10,
        marginRight: "auto",
        fontSize: 20,
        fontWeight: "bold",        
    },
    image: {
        width: 150,
        height: 150,
    },
    moneySymbol: {
        fontWeight: "bold",
    },
    statisticsContainer: {
        display: "flex",
        borderTopColor: "#FAFAFA",
        borderTopWidth: 2,
        padding: 10,
        flexDirection: "row",
        justifyContent: "space-around"
    },
    percentChangePlus: {
        color: "#00BFA5",
        fontWeight: "bold",
        marginLeft: 5
    },
    percentChangeMinus: {
        color: "#DD2C00",
        fontWeight: "bold",
        marginLeft: 5
    },
    buttonStyle: {
    	borderRadius: 20,
    	padding: 20,
    	marginTop: 20,
    	color: 'white'
    }
})

const { 
    container,
    image,
    moneySymbol,
    upperRow,
    coinSymbol,
    coinName,
    coinPrice,
    statisticsContainer,
    seperator,
    percentChangePlus,
    buttonStyle,
    percentChangeMinus
} = styles;


const DetailCoin = ({ symbol, coin_name, price_usd, percent_change_24h, percent_change_7d }) => {

	function hello() {
		return "Cool";
	}

    return (
        <ScrollView contentContainerStyle={container}>

            <View style={upperRow}>
                <Image
                    style={styles.image}
                    source={{ uri: images[symbol] }}
                />
                <Text style={coinSymbol}>{symbol}</Text>
                <Text style={coinName}>{coin_name}</Text>
                <Text style={coinPrice}>Symbol: {symbol} </Text>
                <Text style={coinPrice}>Coin name: {coin_name}
                </Text>
                <Text style={coinPrice}>Price: {price_usd}
                    <Text style={moneySymbol}> $ </Text>
                </Text>
                <Text style={coinPrice}>Percentage 24 hours: {percent_change_24h}
                </Text>
                <Text style={coinPrice}>Percentage one weeks: {percent_change_7d}
                </Text>
                <Button
				  onPress={hello}
				  title="Geri Qayit"
				  color="#FF9900"
				  accessibilityLabel="Learn more about this purple button"
				/>
             </View>

        </ScrollView> 
    );
}

export default DetailCoin;