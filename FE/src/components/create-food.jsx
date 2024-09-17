import {
    CustomDialog,
    CustomDialogBody,
    CustomDialogContent,
    CustomDialogFooter,
    CustomDialogHeader,
    CustomDialogTitle,
    CustomDialogTrigger
} from "@/components/customDialog";
import { CustomInput } from "@/components/customInput";
import { CustomButton } from "@/components/curstomButton";
import { Label } from "./ui/label";

export const CreateFood = () => {
    return <CustomDialog>
        <CustomDialogTrigger className="bg-[#18BA51] text-[#FFFFFF] px-4 py-[10px] rounded-md">Add New Food</CustomDialogTrigger>
        <CustomDialogContent>
            <CustomDialogHeader className="border-b-[1px] flex">
                <CustomDialogTitle>Create Food</CustomDialogTitle>
            </CustomDialogHeader>
            <CustomDialogBody className="flex flex-col gap-4">
                <CustomInput placeholder="Placeholder" className="" label="Хоолны нэр" />
                <CustomInput placeholder="Placeholder" className="" label="Хоолны ангилал" />
                <CustomInput placeholder="Placeholder" className="" label="Хоолны орц" />
                <CustomInput placeholder="Placeholder" className="" label="Хоолны үнэ" />
                <CustomInput placeholder="Placeholder" className="" label="Хямдралтай эсэх" showSwitch={true} />
                <div>
                    <Label className="font-normal text-[#121316]">Хоолны зураг</Label>
                    <div className="p-2 flex flex-col gap-2 rounded-md border-dashed border-[#D6D7DC] border-[2px] items-center py-[25px] w-[284px] bg-[#BABCC41F]">
                        <Label className="text-center text-[#525252] text-base">Add image for the food</Label>
                        <CustomButton variant="dark" size="sm">Add image</CustomButton>
                    </div>
                </div>
            </CustomDialogBody>
            <CustomDialogFooter>
                <CustomButton variant="ghost" size="sm">Clear</CustomButton>
                <CustomButton variant="dark" size="sm">Continue</CustomButton>
            </CustomDialogFooter>
        </CustomDialogContent>
    </CustomDialog>
}