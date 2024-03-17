import { XIcon } from "lucide-react";
import React from "react";
import GetSignUpFormPages from "./getSignUpPages";
import { SignUpFormProvider } from "./signupFormContext";

const SignUp: React.FC = () => {

    return (
        <>
            {/* Exit */}
            <div>
                <a href="/" className="text-white absolute left-10 top-10">
                    <XIcon />
                </a>
            </div>
            <SignUpFormProvider>
                <GetSignUpFormPages />
            </SignUpFormProvider>
        </>
    );
};

export default SignUp;
