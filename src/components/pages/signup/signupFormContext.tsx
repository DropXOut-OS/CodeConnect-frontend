import React, { createContext, useState, useContext } from 'react';

interface FormData {
    // Define your formData interface properties here
}

interface SignUpFormContextType {
    formData: FormData;
    onHandleBack: () => void;
    onHandleNext: () => void;
    setFormData: (data: FormData) => void;
    setFormStatus: (status: number) => void;
    status: number;
    step: number;
}

const initialFormData: FormData = {
    name: '',
    email: '',
    phone: '',
    password: ''
};

const SignUpFormContext = createContext<SignUpFormContextType>({
    formData: initialFormData,
    onHandleBack: () => { },
    onHandleNext: () => { },
    setFormData: () => { },
    setFormStatus: () => { },
    status: 500,
    step: 0,
});

export function SignUpFormProvider({ children }: { children: React.ReactNode }) {
    const [formData, setFormData] = useState<FormData>(initialFormData);
    const [step, setStep] = useState<number>(0);
    const [status, setStatus] = useState<number>(200);

    function onHandleNext() {
        if (step === 10) return;
        setStep((prev) => prev + 1);
    }

    function onHandleBack() {
        if (step === 0) return;
        setStep((prev) => prev - 1);
    }

    function setFormStatus(newStatus: number) {
        setStatus(newStatus);
    }

    return (
        <SignUpFormContext.Provider
            value={{
                formData,
                setFormData,
                onHandleBack,
                onHandleNext,
                setFormStatus,
                status,
                step,
            }}
        >
            {children}
        </SignUpFormContext.Provider>
    );
}

export function useSignUpFormState() {
    return useContext(SignUpFormContext);
}
