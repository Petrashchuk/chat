import {createAction} from 'redux-actions';

const online = createAction('ONLINE');
const disconnect = createAction('DISCONNECT');

export {online, disconnect};
