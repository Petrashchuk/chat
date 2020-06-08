import {createReducer} from 'redux-create-reducer';

const defaultStatus = {
    message: 'Disconnect',
    status: false
};

const stateWs = createReducer(defaultStatus, {
    ONLINE: (state, action) => {
        return {...state, status: true, message: 'Online'};
    },
    DISCONNECT: (state, action) => {
        return {...state, status: false, message: 'Disconnect'};
    }
});


export default stateWs;
