"use client"
import { EllipsisVertical, Pencil, Trash2 } from "lucide-react"
import { Label } from "./ui/label"
import { useState } from "react"

const CategoryDropDown = ({name, themeColor, icon }) => {
    return  <div className="flex py-2 px-4 items-center gap-4 self-stretch">
    {icon}
    <Label className={`text-[${themeColor}]`}>{name}</Label>
</div>
}

export const Category = ({ name }) => {

    const [isClicked, setIsClicked] = useState(false)

    const handleDropDown = () => {
        setIsClicked(!isClicked)
    }
    
    return <div className="flex flex-col justify-end">
        <div className="flex h-10 py-2 px-4 justify-between items-center self-stretch rounded-lg border-[1px] border-[#D6D8DB] bg-[#fff]">
            <p className="text-lg font-medium text-[#000]">{name}</p>
            <EllipsisVertical className="cursor-pointer" onClick={handleDropDown}/>
        </div>
        {isClicked ? <div className="w-[200px] flex-col self-end rounded-sm bg-[#fff] drop-shadow-xl">
            <CategoryDropDown name="Edit name" themeColor="#161616" icon={<Pencil/>}/>
            <CategoryDropDown name="Delete category" themeColor="#DF1F29" icon={<Trash2 color="#DF1F29"/>}/>
        </div> : <></>}
        </div>
}