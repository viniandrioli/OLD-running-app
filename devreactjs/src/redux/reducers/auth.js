import { createReducer } from 'reduxsauce'
import { Types } from "../actionCreators"

export const INITIAL_STATE = {
    isAuthing: false,
    isAuth: false,
    isSigningin: false,
    user: {},
    error: false,
    errorMessage: ''
}

export const signinRequest = (state = INITIAL_STATE, action) => {
    return {
        ...state,
        isSigningin: true,
        error: false,
        errorMessage: ''
    }
}

export const signinSuccess = (state = INITIAL_STATE, action) => {
    return {
        ...state,
        isSigningin: false,
        isAuth: true,
        user: action.user
    }
}

export const signinFailure = (state = INITIAL_STATE, action) => {
    return {
        ...state,
        isSigningin: false,
        error: true,
        errorMessage: action.error
    }
}

export const authSuccess = (state = INITIAL_STATE, action) => {
    return {
        ...state,
        isSigningin: false,
        isAuth: true,
        user: action.user
    }
}

export const authFailure = (state = INITIAL_STATE, action) => {
    return {
        ...state,
        isSigningin: false,
        isAuth: false,
        error: true,
        errorMessage: action.error
    }
}


export const destroyAuthSuccess = (state = INITIAL_STATE, action) => {
    return {
        ...state,
        isSigningin: false,
        isAuth: false,
        user: {}
    }
}

export const HANDLERS = {
    [Types.SIGNIN_REQUEST]: signinRequest,
    [Types.SIGNIN_SUCCESS]: signinSuccess,
    [Types.SIGNIN_FAILURE]: signinFailure,
    [Types.AUTH_REQUEST]: authRequest,
    [Types.AUTH_SUCCESS]: authSuccess,
    [Types.AUTH_FAILURE]: authFailure,
    [Types.DESTROY_AUTH_SUCCESS]: destroyAuthSuccess

}

export default createReducer(INITIAL_STATE, HANDLERS)