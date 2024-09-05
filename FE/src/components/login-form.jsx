"use client"

import { useRef, useState } from "react";
import { CustomButton } from "./curstomButton"
import { CustomInput } from "./customInput"




export const LoginForm = () => {

    const formRef = useRef();
    const [name, setName] = useState("")

    const handleOnchange = (e) => {
        setName(e.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault(); 
        const email = formRef.current[0].value;
        const password = formRef.current[1].value;
      };

    return <div ref={formRef} onSubmit={handleSubmit} className="inline-flex p-8 flex-col items-start rounded-2xl bg-white gap-12">
        <h2 className="text-[#0D1118] text-center text-[28px] font-bold">Нэвтрэх</h2>
        <div className="flex w-[384px] flex-col items-start gap-2">
               <div className="flex flex-col items-start gap-4 self-stretch">
               <CustomInput name="email" onchange={handleOnchange} label={"Имэйл"} placeholder={"Имэйл хаягаа оруулна уу"}/>
               <CustomInput name="password" onchange={handleOnchange} label={"Нууц үг"} placeholder={"Нууц үг"} showIcon={true}/>
               </div>
               <p className="flex justify-end items-center text-sm self-stretch text-[#3F4145]">
               Нууц үг сэргээх
               </p>
        </div>

        <div className="flex flex-col items-center gap-8">
            <CustomButton type="submit" variant={name !== "" ? "primary" : "secondary"}>Нэвтрэх</CustomButton>
            <p className="text-sm text-[#3F4145]">Эсвэл</p>
            <CustomButton variant="outline">Бүртгүүлэх</CustomButton>
        </div>
    </div>
}