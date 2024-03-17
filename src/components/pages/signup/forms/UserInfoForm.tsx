import TextAlert from "@/components/alert/text-alert";
import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import logo from "../../../../assets/X_logo_white.png";
import { useSignUpFormState } from "../signupFormContext";

type Inputs = {
    name: string
    phone: string
    email: string
}

export default function RegisterUserInfoForm() {

    const [isEmailAuth, setIsEmailAuth] = React.useState(false);
    const { onHandleNext, setFormData, setFormStatus } = useSignUpFormState();

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<Inputs>()

    const onSubmit: SubmitHandler<Inputs> = (data) => {

        if (isEmailAuth) {
            data.phone = '';
        } else {
            data.email = '';
        }

        const details = new FormData();
        details.append('name', data.name);
        details.append('phone', data.phone);
        details.append('email', data.email);

        //sending details to backend


        //if response is 200 then send go to new pages
        setFormData((prev) => ({ ...prev, ...data }));
        setFormStatus(200); //if any error then 500 or 400...
        onHandleNext();
    }

    return <>
        <form
            onSubmit={handleSubmit(onSubmit)}
            className="w-full bg-black text-slate-200 rounded-lg flex items-center flex-col min-h-screen justify-between p-5 py-10 space-y-10">
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
                <div>
                    <div className="input-group group focus-within:p-[0.70rem] focus-within:border-2 focus-within:border-blue-600">
                        <input type="text" id="Name"
                            className="input peer"
                            required={true}
                            {...register("name", {
                                required: true,
                                maxLength: 80,
                                minLength: 5,
                            })}
                        />
                        <label htmlFor="Name" className="input-label group-focus-within:text-xs group-focus-within:text-blue-500 peer-valid:text-xs group-focus-within:h-1/2 peer-valid:h-1/2 group-focus-within:-translate-y-1 group-focus-within peer-valid:-translate-y-1 group-focus-within:pl-2 peer-valid:pl-2">Name</label>
                    </div>
                    {
                        errors.name?.type === "required" && <TextAlert alert="Name is required" />
                    }
                    {
                        errors.name?.type === "maxLength" && <TextAlert alert="Name is too long" />
                    }
                    {
                        errors.name?.type === "minLength" && <TextAlert alert="Name is too short" />
                    }
                </div>
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
            </div>
            <button
                className="bg-white hover:bg-slate-200 text-slate-800 flex items-center justify-center rounded-full py-1 h-10 w-full px-4 mb-1 shadow-md text-md font-bold"
            >
                Next
            </button>
        </form>
    </>
}