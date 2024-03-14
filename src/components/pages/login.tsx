import { XIcon } from "lucide-react";
import logo from "../../assets/X_logo_white.png";
import apple from "../../assets/apple.png";
import GoogleLoginButton from "../button/googleLogin";

const Login: React.FC = () => {
    return (
        <>
            <div>
                <a href="/" className="text-white absolute left-10 top-10">
                    <XIcon />
                </a>
            </div>
            <div className="w-full bg-black text-slate-200 rounded-lg flex items-center flex-col min-h-screen p-5 py-10 space-y-10">
                {/* Exit */}
                <div
                    className="">
                    <img className="w-10" src={logo} alt="Logo" />
                </div>
                <div className="space-y-3 w-fit">
                    <h4
                        className="text-2xl font-bold mb-2
        md:text-2xl
        lg:text-3xl"
                    >
                        Sign in to X
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

                    <form
                        className="flex flex-col space-y-5"
                    >
                        <div className="relative group w-full border-[1px] rounded border-slate-800 p-[0.75rem] focus-within:p-[0.70rem] focus-within:border-2 focus-within:border-blue-600">
                            <input type="text" id="username" required className="w-full h-10 text-sm peer bg-transparent outline-none m-0" />
                            <label htmlFor="username" className="transform transition-all absolute top-0 left-0 h-full flex items-center pl-2 text-lg group-focus-within:text-xs group-focus-within:text-blue-500 peer-valid:text-xs group-focus-within:h-1/2 peer-valid:h-1/2 group-focus-within:-translate-y-1 group-focus-within peer-valid:-translate-y-1 group-focus-within:pl-2 peer-valid:pl-2 text-slate-500">Phone, email or username</label>
                        </div>

                        <button
                            className="bg-white hover:bg-slate-200 text-slate-800 flex items-center justify-center rounded-full py-1 h-10 w-72 px-4 mb-1 shadow-md"
                        >
                            <strong className=" text-sm">Next</strong>
                        </button>
                    </form>

                    <button className="bg-black text-white border rounded-full hover:bg-gray-200 hover:bg-opacity-5 border-slate-700 font-semibold py-2 px-6 w-72 mt-2">
                        Forgot Password?
                    </button>
                </div>
            </div>
        </>
    );
};

export default Login;
