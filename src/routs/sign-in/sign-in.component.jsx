import { signInwithGooglePopup, createUserDocumentFromAuth } from "../../utils/firebase/firbase.utils";

const SignIn = () => {
    const logGoogleUser = async () => {
        const { user } = await signInwithGooglePopup();
        const userDocRef = await createUserDocumentFromAuth(user);
    };

    return (
        <div>
            <h1>Sign in page</h1>
            <button onClick={logGoogleUser}>Sign in with Google popup</button>
        </div>
    );
};


export default SignIn;