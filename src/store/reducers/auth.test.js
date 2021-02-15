import reducer from './auth';

import * as actionTypes from '../actions/actionTypes';

describe('auth reducer', () => {
    it('Should return the initial state', () => {
        expect(reducer(undefined, {})).toEqual({
            token: null,
            userId: null,
            error: null,
            loading: false,
            authRedirectPath: '/'
        });
    });

    it('Should store the token upon login', () => {
        expect(reducer({
            token: null,
            userId: null,
            error: null,
            loading: false,
            authRedirectPath: '/'
        }, {
            type: actionTypes.AUTH_SUCCESS,
            idToken: 'some-token',
            userId: 'some-userid'
        })).toEqual({
            token: 'some-token',
            userId: 'some-userid',
            error: null,
            loading: false,
            authRedirectPath: '/'
        });
    });
});