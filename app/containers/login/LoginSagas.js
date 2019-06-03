import { put, call, fork, takeLatest } from 'redux-saga/effects';
import * as types from '../../actions/Types';
import { setToken } from '../../services/Api';
import * as loginApis from '../../services/LoginApis';
import { setUserInfo } from './LoginActions';

export function* login(action) {
    try {
        const data = yield call(loginApis.login, action.params)
        action.onSuccess(data.data)
        setToken(data.data.token || '');
        yield put(setUserInfo(data.data.user))
    } catch (error) {
        action.onError(error)
    }
}

export function* watchLogin() {
    yield takeLatest(types.LOGIN, login)
}

export function* fetchUserInfo(action) {
    try {
        const data = yield call(loginApis.fetchUserInfo)
        action.onSuccess(data.data)
        yield put(setUserInfo(data.data))
    } catch (error) {
        action.onError(error)
    }
}

export function* watchFetchUserInfo() {
    yield takeLatest(types.FETCH_USER_INFO, fetchUserInfo)
}
