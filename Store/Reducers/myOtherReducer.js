// on initialise le state
const initialState = { donneesMyOtherReducer : [] };

function myOtherReducer(state = initialState, action){
    let name = "MyOtherReducer";
    let nextState; // le nouveau state à créer
    switch(action.type){ // les actions sont déclenchées dans les components
        case 'ACTION3':
            nextState = {
                ...state,
                donneesMyOtherReducer : [...state.donneesMyOtherReducer, name + " " + action.value]
            }
            break;
        case 'ACTION4':
            nextState = {
                ...state,
                donneesMyOtherReducer : [...state.donneesMyOtherReducer, action.value]
            }
            break;
        default: 
            nextState = state;
    }
    return nextState ;
}

export default myOtherReducer;

