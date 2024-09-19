"use client"
import { EllipsisVertical, Pencil, Trash2 } from "lucide-react"
import { useState } from "react"
import { CategoryDropDown } from "./category-drop-down"
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover"
import { CustomInput } from "./customInput"
import { CustomButton } from "./curstomButton"
import { CustomDialog, CustomDialogBody, CustomDialogContent, CustomDialogFooter, CustomDialogHeader, CustomDialogTitle, CustomDialogTrigger } from "./customDialog"
import { Label } from "./ui/label"

export const Category = ({ name }) => {

    const [isActive, setIsActive] = useState(false);

    const clickHandle = () => {
        setIsActive(!isActive);
    }

    return <div className="flex flex-col justify-end self-stretch cursor-pointer gap-2">
        <div onClick={clickHandle} className={`flex h-10 py-2 px-4 justify-between items-center self-stretch rounded-lg ${isActive ? "bg-[#18BA51] text-[#fff]" : "border-[1px] border-[#D6D8DB] bg-[#fff]"}`}>
            <p className={`text-lg font-medium ${isActive ? "text-[#fff]" : "text-[#000]"}`}>{name}</p>
            <Popover>
                <PopoverTrigger>
                    <EllipsisVertical className="cursor-pointer" />
                </PopoverTrigger>
                <PopoverContent>
                    <CustomDialog>
                        <CustomDialogTrigger>
                            <CategoryDropDown name="Edit name" themeColor="#161616" icon={<Pencil />} />
                        </CustomDialogTrigger>
                        <CustomDialogContent>
                            <CustomDialogHeader className="border-b-[1px] flex">
                                <CustomDialogTitle>Edit Name</CustomDialogTitle>
                            </CustomDialogHeader>
                            <CustomDialogBody>
                                <CustomInput placeholder="Update your name here..."/>
                            </CustomDialogBody>
                            <CustomDialogFooter className="justify-center">
                                <CustomButton type="submit" variant="dark">Submit</CustomButton>
                            </CustomDialogFooter>
                        </CustomDialogContent>
                    </CustomDialog>

                    <CustomDialog>
                        <CustomDialogTrigger>
                            <CategoryDropDown name="Delete category" themeColor="#DF1F29" icon={<Trash2 color="#DF1F29" />} />
                        </CustomDialogTrigger>
                        <CustomDialogContent>
                            <CustomDialogHeader className="border-b-[1px] flex">
                                <CustomDialogTitle>Delete Category</CustomDialogTitle>
                            </CustomDialogHeader>
                            <CustomDialogBody>
                                <Label className="text-lg">Are you sure you want to delete this category ?</Label>
                            </CustomDialogBody>
                            <CustomDialogFooter className="justify-center gap-3">
                                <CustomButton type="submit" variant="outline" size="flex">No</CustomButton>
                                <CustomButton type="submit" variant="dark" size="flex">Yes</CustomButton>
                            </CustomDialogFooter>
                        </CustomDialogContent>
                    </CustomDialog>
                </PopoverContent>
            </Popover>
        </div>
    </div>
}