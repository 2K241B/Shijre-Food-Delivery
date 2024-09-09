"use client"

import { useMemo, useState } from "react";
import { CustomButton } from "./customButton"
import { CustomInput } from "./customInput"

export const SignUpForm = () => {

    const [formData, setFormData] = useState({ email: "", password: ""});

    const handleOnChange = (event) => {
        setFormData((prev) => ({
            ...prev,
            [event.target.name]: event.target.value,
          }));
    }

    const debounceFn = useMemo(() => _.debounce(handleOnChange, 500), []);

    return <form className="inline-flex p-8 flex-col items-start rounded-2xl bg-white gap-12">
    <h2 className="text-[#0D1118] text-center text-[28px] font-bold">Нэвтрэх</h2>
    <div className="flex w-[384px] flex-col items-start gap-2">
        <div className="flex flex-col items-start gap-4 self-stretch">
            <CustomInput name="email" type="email" onchange={debounceFn} label={"Имэйл"} placeholder={"Имэйл хаягаа оруулна уу"} />
            <CustomInput name="password" type="password" onchange={debounceFn} label={"Нууц үг"} placeholder={"Нууц үг"} showIcon={true} />
        </div>
        <p className="flex justify-end items-center text-sm self-stretch text-[#3F4145]">
            Нууц үг сэргээх
        </p>
    </div>

    <div className="flex flex-col items-center gap-8">
        <CustomButton type="submit" variant={formData.email && formData.password !== "" ? "primary" : "secondary"}>Нэвтрэх</CustomButton>
        <p className="text-sm text-[#3F4145]">Эсвэл</p>
        <CustomButton type="button" variant="outline">Бүртгүүлэх</CustomButton>
    </div>
</form>
}