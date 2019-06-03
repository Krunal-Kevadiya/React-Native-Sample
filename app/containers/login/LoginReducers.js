import * as types from '../../actions/Types';
import appState from '../../contants/InitialState';

const loginReducer = (state = appState.login, action) => {
    switch (action.type) {
        case types.SET_USER_INFO:
            return { ...state, ...{ userInfo: action.data } }
        default:
            return state
    }
}
export default loginReducer