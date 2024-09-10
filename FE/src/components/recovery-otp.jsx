"use client"

import { useState } from "react";
import { CustomButton } from "./curstomButton"
import _ from "lodash"
import {
    InputOTP,
    InputOTPGroup,
    InputOTPSlot,
} from "@/components/ui/input-otp"
import { Label } from "./ui/label";


export const RecoveryOTP = () => {

    const [value, setValue] = useState(0)

    return <form className="inline-flex p-8 flex-col items-start rounded-2xl bg-white gap-12">
        <div className="flex justify-center w-full">
            <h2 className="text-[#0D1118] text-center text-[28px] font-bold">Нууц үг сэргээх</h2>
        </div>
        <div className="flex w-[384px] flex-col items-start gap-8">
            <p className="text-center text-[#695C08] font-medium">Таны <a className="text-[#18BA51] font-medium leading-[22px]">example@pinecone.mn</a> хаяг руу сэргээх код илгээх болно. </p>

            <div className="flex flex-col items-center gap-4 self-stretch">
                <Label htmlFor="inputOtp" className="font-normal text-sm text-[#3F4145]">Нууц үг сэргээх код</Label>
                <InputOTP maxLength={4} id="inputOtp" name="inputOtp" onChange={() => setValue(value + 1)}>
                    <InputOTPGroup>
                        <InputOTPSlot index={0} />
                        <InputOTPSlot index={1} />
                        <InputOTPSlot index={2} />
                        <InputOTPSlot index={3} />
                    </InputOTPGroup>
                </InputOTP>

            </div>
        </div>
        <div className="flex flex-col items-center gap-8">
            <CustomButton type="submit" variant={value === 4 ? "primary" : "secondary"}>Үргэлжлүүлэх</CustomButton>
        </div>
    </form>
}