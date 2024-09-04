"use client"

import * as React from "react"

import { cn } from "@/lib/utils"
import { EyeIcon, EyeOffIcon } from "lucide-react";

const CustomInput = React.forwardRef(({className, type, label, placeholder, showIcon = false, onchange, ...props }, ref) => {

    const [clicked, setClicked] = React.useState(true)

    const onclickHandler = () => {
        setClicked(!clicked)
    }

    return (
        (<div className="flex flex-col items-start gap-1 self-stretch">
            <p className="text-sm text-[#3F4145]">{label}</p>
            <span className={cn(
                "flex h-12 w-full rounded-sm border-[1px] border-solid border-[#ECEDF0] border-input bg-[#F7F7F8] px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50 items-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
                className
            )}>
                <input
                    onChange={onchange}
                    placeholder={placeholder}
                    type={showIcon & clicked ? "password" : "text"}
                    className="w-full h-full bg-transparent outline-none appearance-none"
                    ref={ref}
                    {...props} />
                {showIcon ? <span onClick={onclickHandler}>{clicked ? <EyeOffIcon/> : <EyeIcon />}</span> : <></>}
            </span>
        </div>
        )
    );
})
CustomInput.displayName = "CustomInput"

export { CustomInput }
