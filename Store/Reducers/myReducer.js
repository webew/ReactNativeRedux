// on initialise le state
const initialState = { donneesMyReducer : [] };

function myReducer(state = initialState, action){
    let name = "MyReducer";
    let nextState; // le nouveau state à créer
    switch(action.type){ // les actions sont déclenchées dans les components
        case 'ACTION1':
            nextState = {
                ...state,
                donneesMyReducer : [...state.donneesMyReducer, name + " " + action.value]
            }
            break;
        case 'ACTION2':
            nextState = {
                ...state,
                donneesMyReducer : [...state.donneesMyReducer, action.value]
            }
            break;
        default: 
            nextState = state;
    }
    return nextState ;
}

export default myReducer;

