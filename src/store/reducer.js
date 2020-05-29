const defaultState = {
    inputValue: '',
    list: [
        '早8点开晨会，分配今天代码任务',
        '早9点，和项目经理开需求沟通会',
        '晚上5点，review代码'
    ]
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
            break;
        }
        case 'removeItem': {
            newState.list.splice(action.index,1);
            break;
        }
        default:
            break;
    }
    return newState;
}