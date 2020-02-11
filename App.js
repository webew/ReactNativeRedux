import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Provider } from "react-redux";
import Store from "./Store/configureStore";
import MyComponent from "./Components/MyComponent";
import StoreObserverComponent from './Components/StoreObserverComponent';

export default class App extends React.Component {

    constructor(props){
        super(props);
        this.state = {};
    }

    _update(){
        console.log("update dans App");
        this.setState({modif: true});
        // console.log(Store);
    }

    componentDidUpdate(){
        console.log("update de App");
    }

    render(){
        console.log("******STORE**********");
        console.log(Store);
        console.log("******FIN STORE**********\n");

        return (
            <Provider store={ Store }  style={{ flex:1 }}>
                <View style={ styles.main_container }>
                    <Text>DEMO REDUX</Text>
                    <MyComponent action="ACTION1" onChange={ () => this._update() } />
                    <MyComponent action="ACTION3" onChange={ () => this._update() } />
                    <StoreObserverComponent/>
                </View>
            </Provider>
        );
    }
}

const styles = StyleSheet.create({
    main_container: {
        flex: 1,
        padding: 15,
        backgroundColor: "#DDDDDD",
        justifyContent: 'center',
    }
});
