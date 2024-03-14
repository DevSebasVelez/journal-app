import { logOutFirebase, loginWithEmailPassword, registerUserWithEmailPassword, signInWithGoogle } from "../../firebase/providers"
import { clearNotesLogout } from "../journal"
import { checkingCredentials, login, logout } from "./authSlice"


export const checkingAuthentication = ( email, password ) => {
    return async( dispatch ) => {

        dispatch( checkingCredentials() )
    }
}


export const startGoogleSignIn = () => {
    return async( dispatch ) => {

        dispatch( checkingCredentials() )

        const result = await signInWithGoogle();

        if( !result.ok ) return dispatch( logout( result ) );

        dispatch( login( result ) );


    }
}


export const startCreatingUserWithEmailPassword = ({ email, password, displayName }) => {
    return async (dispatch) => {

        dispatch( checkingCredentials() )

        const resp = await registerUserWithEmailPassword({ email, password, displayName });

        if( !resp.ok ) return dispatch( logout( resp ) );

        dispatch( login( resp ) );
    }
}


export const startLoginWithEmailPassword = ({ email, password }) => {
    return async ( dispatch ) => {

        dispatch( checkingCredentials() )

        const resp = await loginWithEmailPassword({ email, password });

        if( !resp.ok ) return dispatch( logout( resp ) );

        dispatch( login( resp ) );
    }
}


export const startLogout = () => {
    return async (dispatch) => {

        await logOutFirebase();

        dispatch( clearNotesLogout() )
        dispatch( logout() );
    }
}


