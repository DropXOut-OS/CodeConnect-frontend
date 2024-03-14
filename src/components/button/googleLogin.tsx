import { signInWithPopup } from "firebase/auth";
import glogo from "../../assets/google-logo.png";
import { auth, provider } from "../../firebaseConfig/firebase";


export default function GoogleLoginButton() {
    const authInfoString = localStorage.getItem("auth");
    const authInfo = authInfoString ? JSON.parse(authInfoString) : null;
    // const currentUserPhoto = authInfo ? authInfo.profilePhoto : null;

    const SignInWithGoogle = async () => {
        try {
            const result = await signInWithPopup(auth, provider);
            // console.log(result);

            // console.log(result);
            const authInfo = {
                userID: result.user.uid,
                name: result.user.displayName,
                profilePhoto: result.user.photoURL,
                isAuth: true,
                email: result.user.email,
            };
            localStorage.setItem("auth", JSON.stringify(authInfo));
            console.log(result.user);
        } catch (error) {
            console.error(error);
            alert(error);
        }
    };
    return <>
        <button
            className="bg-white text-black flex items-center justify-center font-sans space-x-2 rounded-full py-2
         h-10 w-72 px-4 mb-1 shadow-md border border-gray-400"
            onClick={() => SignInWithGoogle()}
        >
            <img className="w-6 h-6" src={glogo} alt="Google Logo" />
            <span className=" text-sm">Sign in with Google</span>
        </button>
    </>
}