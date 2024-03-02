import logo from "../../assets/X_logo_white.png";
import glogo from "../../assets/google-logo.png";
import apple from "../../assets/apple.png";
import { auth, provider } from "../../firebaseConfig/firebase";
import { signInWithPopup } from "firebase/auth";

const SignUp: React.FC = () => {
  const authInfoString = localStorage.getItem("auth");
  const authInfo = authInfoString ? JSON.parse(authInfoString) : null;
  // const currentUserPhoto = authInfo ? authInfo.profilePhoto : null;

  const SignInWithGoogle = async () => {
    try {
      const result = await signInWithPopup(auth, provider);

      // console.log(result);
      const authInfo = {
        userID: result.user.uid,
        name: result.user.displayName,
        profilePhoto: result.user.photoURL,
        isAuth: true,
        email: result.user.email,
      };
      localStorage.setItem("auth", JSON.stringify(authInfo));
      // console.log(result.user);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="max-w-xxl w-auto p-0 bg-black rounded-lg flex flex-col md:flex-col lg:flex-row min-h-screen">
      {/* left  */}
      <div
        className="lg:w-1/2
        md:w-1/2

      sm:w-full
      flex lg:justify-center lg:items-center
      md:justify-start
      justify-start
      sm:px-24
      sm:py-12
       px-10
       pt-10
       lg:p-4
      "
      >
        <img className="w-10 sm:w-12 lg:w-80" src={logo} alt="Logo" />
      </div>

      {/* right  */}
      <div
        className="lg:w-1/2
        md:w-1/2
      sm:w-full
      sm:px-24
      lg:px-16
      sm:py-12
      p-10
      flex justify-center flex-col
      mt-0 md:mt-0"
      >
        <h1
          className="text-2xl font-bold text-white mb-4
        sm:text-4xl
        md:text-5xl
        lg:text-7xl"
        >
          Happening now
        </h1>
        <h1
          className="text-2xl font-bold text-white mb-2
        sm:text-xl
        md:text-2xl
        lg:text-3xl"
        >
          Join today
        </h1>
        <button
          className="bg-white text-black flex items-center justify-center rounded-full py-2
         h-10 w-72  px-4 mb-1 shadow-md border border-gray-400"
          onClick={() => SignInWithGoogle()}
        >
          <span className=" text-sm">Sign in with Google</span>
          <img className="w-6 h-6 mx-auto mr-0" src={glogo} alt="Google Logo" />
        </button>
        <button
          className="bg-white text-black flex items-center justify-center rounded-full py-2
         h-10 w-72  px-4 mb-1 shadow-md border border-gray-400"
        >
          <img className="w-6 h-6 mr-0" src={apple} alt="Google Logo" />
          <strong className=" text-sm">Sign up with Apple</strong>
        </button>

        <div className="flex items-start justify-start">
          <hr className="border-gray-100 my-3 w-32" />
          <span className=" mx-2 text-white">or</span>
          <hr className="border-gray-300 my-3 w-32" />
        </div>
        <button
          className="bg-createBtn text-white flex items-center justify-center rounded-full py-2
         h-10 w-72  px-4 mb-1 shadow-md"
        >
          <strong className=" text-sm">Create acount</strong>
        </button>

        <p className="text-gray-600 text-xs mt-0">
          By signing up, you agree to the
          <span className="text-createBtn">Terms of Service</span>
          and
          <span className="text-createBtn">Privacy Policy,</span>
          including
          <span className="text-createBtn">Cookie Use</span>
        </p>
        <h2 className="text-xl text-white font-semibold mt-2">
          Already have an account?
        </h2>
        <button className="bg-black text-createBtn border rounded-full py-2 px-6 w-72 mt-2">
          Sign in
        </button>
      </div>
    </div>
  );
};

export default SignUp;