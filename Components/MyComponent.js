import React from 'react'
import { View, Text, Button } from 'react-native';
import { connect } from 'react-redux'

class MyComponent extends React.Component{

    componentDidUpdate(){
        console.log("update de MyComponent"); 
    }

    // méthode appelée par l'évènement onPress du Button
    _modifierStateGlobal(){
        // création d'un action
        const action = { type: this.props.action, value: this.props.action+"\n"};
        
        // envoi de l'action au reducer (qui modifiera le state global)
        this.props.dispatch(action); 
    }

    render(){
        return (
            <View style={{marginTop:15}}>
                <Text style={{textAlign:"center"}}>! MyComponent {this.props.action} !</Text>
                <Button 
                    title={"MyReducer : "+this.props.action} 
                    onPress={ () => {
                        this._modifierStateGlobal();
                        this.props.onChange()
                    }
                }/>
                
            </View>
        );
    }
}
// constante faisant le lien entre les propriétés du state global et celles du component
// Ici, on met le contenu de state.donnees dans une prop donnees du component
// On accèdera à state.donnees via this.props.donnees
const mapStateToProps = (state) => {
    return {
        donneesMyReducer: state.myReducer.donneesMyReducer,
        donneesMyOtherReducer: state.myOtherReducer.donneesMyOtherReducer
    };
}
// connexion au store. Rend disponible la méthode dispatch dans les props du component
export default connect(mapStateToProps)(MyComponent);

