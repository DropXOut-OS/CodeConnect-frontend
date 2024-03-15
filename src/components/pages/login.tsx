import { XIcon } from "lucide-react";
import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import logo from "../../assets/X_logo_white.png";
import apple from "../../assets/apple.png";
import GoogleLoginButton from "../button/googleLogin";
import TextAlert from "../alert/text-alert";

type Inputs = {
    name: string
    phone: string
    email: string
}

const Login: React.FC = () => {

    const [isEmailAuth, setIsEmailAuth] = React.useState(false);

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<Inputs>()
    const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data)

    return (
        <>
            {/* Exit */}
            <div>
                <a href="/" className="text-white absolute left-10 top-10">
                    <XIcon />
                </a>
            </div>
            <div className="w-full bg-black text-slate-200 rounded-lg flex items-center flex-col min-h-screen p-5 py-10 space-y-10">
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
                        onSubmit={handleSubmit(onSubmit)}
                        className="flex flex-col space-y-5"
                    >
                        <div className="input-items">
                            {
                                !isEmailAuth ?
                                    <div className="input-group group focus-within:p-[0.70rem] focus-within:border-2 focus-within:border-blue-600">
                                        <input type="number" id="phone"
                                            className="input peer"
                                            required={!isEmailAuth}
                                            {...register("phone", {
                                                required: !isEmailAuth,
                                                maxLength: 10,
                                                minLength: 10,
                                            })}
                                        />
                                        <label htmlFor="phone"
                                            className="input-label group-focus-within:text-xs group-focus-within:text-blue-500 peer-valid:text-xs group-focus-within:h-1/2 peer-valid:h-1/2 group-focus-within:-translate-y-1 group-focus-within peer-valid:-translate-y-1 group-focus-within:pl-2 peer-valid:pl-2">Phone</label>
                                    </div>
                                    :
                                    <div className="input-group group focus-within:p-[0.70rem] focus-within:border-2 focus-within:border-blue-600">
                                        <input type="email" id="email"
                                            className="input peer"
                                            required={isEmailAuth}
                                            {...register("email", {
                                                required: isEmailAuth,
                                                maxLength: 80,
                                                minLength: 5,
                                            })}
                                        />
                                        <label htmlFor="email" className="input-label group-focus-within:text-xs group-focus-within:text-blue-500 peer-valid:text-xs group-focus-within:h-1/2 peer-valid:h-1/2 group-focus-within:-translate-y-1 group-focus-within peer-valid:-translate-y-1 group-focus-within:pl-2 peer-valid:pl-2">Email</label>
                                    </div>
                            }
                            {
                                !isEmailAuth ?
                                    errors.phone?.type === "required" && <TextAlert alert="Phone is required" />
                                    :
                                    errors.email?.type === "required" && <TextAlert alert="Email is required" />
                            }
                            {
                                !isEmailAuth ?
                                    errors.phone?.type === "maxLength" && <TextAlert alert="Phone is too long" />
                                    :
                                    errors.email?.type === "maxLength" && <TextAlert alert="Email is too long" />
                            }
                            {
                                !isEmailAuth ?
                                    errors.phone?.type === "minLength" && <TextAlert alert="Phone is too short" />
                                    :
                                    errors.email?.type === "minLength" && <TextAlert alert="Email is too short" />
                            }
                            <div className="flex justify-end w-full">
                                <button
                                    type="button"
                                    onClick={() => setIsEmailAuth(!isEmailAuth)}
                                    className="text-blue-500 my-2 w-fit hover:underline">
                                    {
                                        !isEmailAuth ?
                                            <span>Use email instead</span>
                                            :
                                            <span>Use phone instead</span>
                                    }
                                </button>
                            </div>
                        </div>

                        <button
                            type="submit"
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
