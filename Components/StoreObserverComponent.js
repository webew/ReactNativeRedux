import React from 'react'
import { View, Text } from 'react-native'
import { connect } from 'react-redux'

class StoreObserverComponent extends React.Component {

    render(){
        return (
            <View style={{marginTop: 20,backgroundColor: "white"}}>
                <Text>STORE OBSERVER</Text>
                {/* le component possède une props donnees */}
                {/* provenant du state global */}
                <Text>{this.props.donneesMyReducer}</Text> 
                <Text>{this.props.donneesMyOtherReducer}</Text> 
            </View>
        );
    }
}
// Ici on récupère la prpriété donnees du state global
// et on crée une props donnees pour le component
const mapStateToProps = state => {
    return {
        donneesMyReducer: state.myReducer.donneesMyReducer,
        donneesMyOtherReducer: state.myOtherReducer.donneesMyOtherReducer
    };
}

export default connect(mapStateToProps)(StoreObserverComponent);


