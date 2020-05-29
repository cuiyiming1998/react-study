const defaultState = {
    inputValue: '',
    list: ''
}

export default (state=defaultState,action) => {
    let newState = JSON.parse(JSON.stringify(state));
    switch(action.type){
        case 'changeInput': {
            newState.inputValue = action.value;
            break;
        }
        case 'addItem': {
            newState.list.push(newState.inputValue);
            newState.inputValue = '';
            break;
        }
        case 'removeItem': {
            newState.list.splice(action.index,1);
            break;
        }
        case 'getList': {
            newState.list = action.data
            return newState;
        }
        default:
            break;
    }
    return newState;
}