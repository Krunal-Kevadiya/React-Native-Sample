import { api } from './Api';

export const login = (params) => {
    return api.post('/login', params);
}

export const fetchUserInfo = () => {
    return api.get('/getUserInfo');
}