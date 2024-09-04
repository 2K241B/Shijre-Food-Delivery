import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva } from "class-variance-authority";

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "flex justify-center items-center gap-1 rounded-sm",
  {
    variants: {
      variant: {
       primary: "bg-[#18BA51] text-[#FFFFFF]",
       secondary: "bg-[#EEEFF2] text-[#1C20243D]",
       outline: "border-[1px] border-solid border-[#18BA51]",
      },
      size: {
        default: "h-[48px] w-[384px] px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

const CustomButton = React.forwardRef(({ className, variant, size, asChild = false, ...props }, ref) => {
  const Comp = asChild ? Slot : "button"
  return (
    (<Comp
      className={cn(buttonVariants({ variant, size, className }))}
      ref={ref}
      {...props} />)
  );
})
CustomButton.displayName = "CustomButton"

export { CustomButton, buttonVariants }
