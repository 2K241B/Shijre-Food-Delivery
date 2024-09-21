import {
    CustomDialog,
    CustomDialogBody,
    CustomDialogContent,
    CustomDialogDescription,
    CustomDialogFooter,
    CustomDialogHeader,
    CustomDialogTitle,
    CustomDialogTrigger
} from "@/components/customDialog";
import { CustomInput } from "@/components/customInput";
import { CustomButton } from "@/components/curstomButton";
import { CustomLabel } from "./customLabel";

export const CreateFood = () => {
    return <CustomDialog>
        <CustomDialogTrigger className="bg-[#18BA51] text-[#FFFFFF] px-4 py-[10px] rounded-md">Add New Food</CustomDialogTrigger>
        <CustomDialogContent>
            <CustomDialogHeader className="border-b-[1px] flex">
                <CustomDialogTitle>Create Food</CustomDialogTitle>
                <CustomDialogDescription></CustomDialogDescription>
            </CustomDialogHeader>
            <CustomDialogBody className="flex flex-col gap-4">
                <CustomInput id="foodName" placeholder="Placeholder" className="" label="Хоолны нэр" />
                <CustomInput id="foodCategory" placeholder="Placeholder" className="" label="Хоолны ангилал" />
                <CustomInput id="foodIngredients" placeholder="Placeholder" className="" label="Хоолны орц" />
                <CustomInput id="foodPrice" placeholder="Placeholder" className="" label="Хоолны үнэ" />
                <CustomInput id="foodDiscount" placeholder="Placeholder" className="" label="Хямдралтай эсэх" showSwitch={true} />
                <div>
                    <CustomLabel className="font-normal text-[#121316] text-start mb-1">Хоолны зураг</CustomLabel>
                    <div className="p-2 flex flex-col gap-2 rounded-md border-dashed border-[#D6D7DC] border-[2px] items-center py-[25px] w-[284px] bg-[#BABCC41F]">
                        <CustomLabel className="text-center text-[#525252] text-base">Add image for the food</CustomLabel>
                        <CustomButton id="addImage" variant="dark" size="sm">Add image</CustomButton>
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