import { XIcon } from "lucide-react";
import logo from "../../assets/X_logo_white.png";

const SignUp: React.FC = () => {
    return (
        <>
            {/* Exit */}
            <div>
                <a href="/" className="text-white absolute left-10 top-10">
                    <XIcon />
                </a>
            </div>

            <div className="w-full bg-black text-slate-200 rounded-lg flex items-center flex-col min-h-screen justify-between p-5 py-10 space-y-10">
                <div className="space-y-5 w-full">
                    <div
                        className="Logo flex items-center justify-center w-full">
                        <img className="w-10" src={logo} alt="Logo" />
                    </div>
                    <h4
                        className="text-2xl font-bold mb-2"
                    >
                        Create your account
                    </h4>

                    <div className="relative group w-full border-[1px] rounded border-slate-800 p-[0.75rem] focus-within:p-[0.70rem] focus-within:border-2 focus-within:border-blue-600">
                        <input type="text" id="username" required className="w-full h-10 text-sm peer bg-transparent outline-none m-0" />
                        <label htmlFor="username" className="transform transition-all absolute top-0 left-0 h-full flex items-center pl-2 text-lg group-focus-within:text-xs group-focus-within:text-blue-500 peer-valid:text-xs group-focus-within:h-1/2 peer-valid:h-1/2 group-focus-within:-translate-y-1 group-focus-within peer-valid:-translate-y-1 group-focus-within:pl-2 peer-valid:pl-2 text-slate-500">Name</label>
                    </div>

                    <div className="relative group w-full border-[1px] rounded border-slate-800 p-[0.75rem] focus-within:p-[0.70rem] focus-within:border-2 focus-within:border-blue-600">
                        <input type="text" id="username" required className="w-full h-10 text-sm peer bg-transparent outline-none m-0" />
                        <label htmlFor="username" className="transform transition-all absolute top-0 left-0 h-full flex items-center pl-2 text-lg group-focus-within:text-xs group-focus-within:text-blue-500 peer-valid:text-xs group-focus-within:h-1/2 peer-valid:h-1/2 group-focus-within:-translate-y-1 group-focus-within peer-valid:-translate-y-1 group-focus-within:pl-2 peer-valid:pl-2 text-slate-500">Phone</label>
                    </div>
                </div>
                <button
                    className="bg-white hover:bg-slate-200 text-slate-800 flex items-center justify-center rounded-full py-1 h-10 w-full px-4 mb-1 shadow-md text-md font-bold"
                >
                    Next
                </button>
            </div>
        </>
    );
};

export default SignUp;
