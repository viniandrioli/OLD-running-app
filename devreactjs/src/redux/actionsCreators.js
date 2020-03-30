import { createActions } from 'reduxsauce'

export const {
    Types,
    Creators
} = createActions({
    signinRequest: ['email', 'passwd'],
    signinSuccess: ['user'],
    signinFailure: ['error'],

    authRequest: null,
    authSuccess: ['user'],
    authFailure: null,

    destroyAuthRequest: null,
    destroyAuthSuccess: null,
    
    getRunsRequest: null,
    getRunsSuccess: ['runs'],
    getsRunsFailure: null,

    createRunRequest: ['run'],
    createRunSuccess: ['run'],
    createRunFailure: ['error']

})

export default Creators