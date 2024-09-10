"use client"

import { useMemo, useState } from "react";
import { CustomInput } from "./customInput";
import { CustomButton } from "./curstomButton";
import { Input } from "./ui/input";


export const SignUpForm = () => {

    const [formData, setFormData] = useState({name: "", email: "", address: "", password: "", rePassword: "" });

    const handleOnChange = (event) => {
        setFormData((prev) => ({
            ...prev,
            [event.target.name]: event.target.value,
        }));
    }

    const debounceFn = useMemo(() => _.debounce(handleOnChange, 500), []);

    return <form className="inline-flex p-8 flex-col items-start rounded-2xl bg-white gap-12">
        <div className="flex justify-center w-full">
        <h2 className="text-[#0D1118] text-center text-[28px] font-bold">Бүртгүүлэх</h2>
        </div>
        <div className="flex w-[384px] flex-col items-start gap-2">
            <div className="flex flex-col items-start gap-4 self-stretch">
                <CustomInput name="name" onchange={debounceFn} label={"Нэр"} placeholder={"Нэрээ оруулна уу"} />
                <CustomInput name="email" type="email" onchange={debounceFn} label={"Имэйл"} placeholder={"Имэйл хаягаа оруулна уу"} />
                <CustomInput name="address" onchange={debounceFn} label={"Хаяг"} placeholder={"Та хаягаа оруулна уу"} />
                <CustomInput name="password" type="password" onchange={debounceFn} label={"Нууц үг"} placeholder={"Нууц үгээ оруулна уу"} showIcon={true} />
                <CustomInput name="rePassword" type="password" onchange={debounceFn} label={"Нууц үг"} placeholder={"Нууц үгээ давтан оруулна уу"} showIcon={true} />
            </div>
        </div>

        <div className="flex flex-col items-center gap-8">
            <div className="flex w-full items-center gap-2">
            <Input type="checkbox" className="h-4 w-4" name="policy"/>
            <label htmlFor="policy" className="text-sm text-[#3F4145]">Үйлчилгээний нөхцөл зөвшөөрөх</label>
            </div>
            <CustomButton type="button" variant={formData.name && formData.email && formData.address && formData.password && formData.rePassword !== "" ? "primary" : "secondary"}>Бүртгүүлэх</CustomButton>
        </div>
    </form>
}