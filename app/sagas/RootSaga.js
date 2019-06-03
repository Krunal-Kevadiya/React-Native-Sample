import { all } from 'redux-saga/effects';
import { watchLogin, watchFetchUserInfo } from '../containers/login/loginSagas';

function* rootSaga() {
    yield all([
        watchLogin(),
        watchFetchUserInfo()
    ])
}
export default rootSaga