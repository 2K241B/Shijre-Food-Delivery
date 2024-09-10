"use client"

import { useMemo, useState } from "react";
import { CustomButton } from "./curstomButton"
import { CustomInput } from "./customInput"
import _ from "lodash"

export const RecoveryNewPassword = () => {

    const [formData, setFormData] = useState({ password: "", rePassword: "" });
    const handleOnChange = (event) => {
        setFormData((prev) => ({
            ...prev,
            [event.target.name]: event.target.value,
        }));
    }

    const debounceFn = useMemo(() => _.debounce(handleOnChange, 500), []);

    return <form className="inline-flex p-8 flex-col items-start rounded-2xl bg-white gap-12">
        <div className="flex justify-center w-full">
            <h2 className="text-[#0D1118] text-center text-[28px] font-bold">Шинэ нууц үг зохиох </h2>
        </div>
        <div className="flex w-[384px] flex-col items-start gap-2">
            <div className="flex flex-col items-start gap-4 self-stretch">
            <CustomInput name="password" type="password" onchange={debounceFn} label={"Нууц үг"} placeholder={"********"} showIcon={true} />
            <CustomInput name="rePassword" type="password" onchange={debounceFn} label={"Нууц үг давтах"} placeholder={"********"} showIcon={true} />
            </div>
        </div>
        <div className="flex flex-col items-center gap-8">
            <CustomButton type="submit" variant={formData.password.length > 0 && formData.rePassword.length > 0 ? "primary" : "secondary"}>Үргэлжлүүлэх</CustomButton>
        </div>
    </form>
}