import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { FirebaseAuth } from "./config";


const googleProvider = new GoogleAuthProvider();

export const signInWithGoogle = async () => {
    try {
        const result = await signInWithPopup(FirebaseAuth, googleProvider);
        //const credential = GoogleAuthProvider.credentialFromResult(result);

        const { uid, displayName, photoURL, email } = result.user;

        return {
            ok: true,
            //user data
            displayName,
            uid,
            photoURL,
            email
        }

    } catch (error) {

        const errorCode = error.code;
        const errorMessage = error.message;
        
        return {
            ok: false,
            errorCode,
            errorMessage
        }
    }
}

