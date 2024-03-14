import logo from "../../assets/X_logo_white.png";
import apple from "../../assets/apple.png";
import GoogleLoginButton from "../button/googleLogin";

const Auth: React.FC = () => {

  return (
    <div className="max-w-xxl w-auto bg-black text-slate-200 rounded-lg flex flex-col md:flex-col lg:flex-row min-h-screen p-5 py-10 space-y-10">
      {/* left  */}
      <div
        className="w-1/2 flex items-center justify-center"
      >
        <img className="w-10 sm:w-12 lg:w-80" src={logo} alt="Logo" />
      </div>

      {/* right */}
      <div className="w-1/2 p-2 space-y-10">
        <h1
          className="font-bold
        max-w-[500px]
        text-4xl
        sm:text-6xl"
        >
          Happening now
        </h1>
        <div className="space-y-5 w-fit">
          <h4
            className="text-2xl font-bold mb-2
        md:text-2xl
        lg:text-3xl"
          >
            Join today
          </h4>
          <GoogleLoginButton />
          <button
            className="bg-white text-black flex items-center justify-center rounded-full py-2
         h-10 w-72  px-4 mb-1 shadow-md border border-gray-400"
          >
            <img className="w-6 h-6 mr-0" src={apple} alt="Google Logo" />
            <strong className=" text-sm">Sign up with Apple</strong>
          </button>

          <div className="flex items-start justify-start">
            <hr className="border-gray-100 my-3 w-32" />
            <span className=" mx-2">or</span>
            <hr className="border-gray-300 my-3 w-32" />
          </div>
          <button
            className="bg-createBtn flex items-center justify-center rounded-full py-2
              h-10 w-72  px-4 mb-1 shadow-md"
          >
            <a href="/signup">
              <strong className=" text-sm">Create acount</strong>
            </a>
          </button>

          <p className="text-gray-600 text-xs mt-0 max-w-[350px] space-x-1">
            By signing up, you agree to the &nbsp;
            <span className="text-createBtn">Terms of Service</span>&nbsp;
            and
            <span className="text-createBtn">Privacy Policy,</span>&nbsp;
            including
            <span className="text-createBtn">Cookie Use</span>
          </p>
          <h2 className="text-xl font-semibold mt-2">
            Already have an account?
          </h2>
          <button className="bg-black text-createBtn border rounded-full hover:bg-blue-500 hover:bg-opacity-5 border-slate-700 font-semibold py-2 px-6 w-72 mt-2">
            <a href="/login">
              Sign in
            </a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Auth;
