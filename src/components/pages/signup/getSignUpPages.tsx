import { redirect } from "react-router-dom";
import RegisterError from "./forms/RegisterError";
import RegisterPasswordForm from "./forms/RegisterPasswordForm";
import RegisterUserInfoForm from "./forms/UserInfoForm";
import { useSignUpFormState } from "./signupFormContext";
import RegisterSuccess from "./forms/success";

export default function GetSignUpFormPages() {


    const { step, status } = useSignUpFormState();

    if (status != 200) {
        return <RegisterError />
    }

    switch (step) {
        case 0:
            return <RegisterUserInfoForm />;
        case 1:
            return <RegisterPasswordForm />;
        case 2:
            return <RegisterSuccess />;
    }
}