import { combineReducers } from 'redux';
import loginReducers from '../containers/login/loginReducers';

const allReducers = combineReducers({
    login: loginReducers
})
export default allReducers