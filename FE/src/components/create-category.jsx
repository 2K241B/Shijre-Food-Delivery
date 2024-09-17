import { CustomDialog, 
    CustomDialogBody, 
    CustomDialogContent, 
    CustomDialogFooter, 
    CustomDialogHeader, 
    CustomDialogTitle, 
    CustomDialogTrigger } from "@/components/customDialog";
    import { CustomInput } from "@/components/customInput";
    import { CustomButton } from "@/components/curstomButton";
import { PlusIcon } from "lucide-react";

export const CreateCategory = () => {
    return <CustomDialog>
    <CustomDialogTrigger className="flex h-10 px-4 py-2 items-center gap-2 self-stretch rounded-[8px] border-[1px] border-solid border-[#D6D8DB] bg-[#fff] text-[#5E6166]">
        <PlusIcon color="#5E6166"/>
        Create New Category</CustomDialogTrigger>
    <CustomDialogContent>
      <CustomDialogHeader className="border-b-[1px] flex">
        <CustomDialogTitle>Create New Category</CustomDialogTitle>
      </CustomDialogHeader>
      <CustomDialogBody>
      <CustomInput placeholder="Placeholder" className="" label="Category Name"/>
      </CustomDialogBody>
      <CustomDialogFooter>
        <CustomButton variant="ghost" size="sm">Clear</CustomButton>
        <CustomButton variant="dark" size="sm">Continue</CustomButton>
      </CustomDialogFooter>
    </CustomDialogContent>
  </CustomDialog>
}