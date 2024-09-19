import { Label } from "./ui/label"

export const CategoryDropDown = ({name, themeColor, icon }) => {
    return  <div className="flex py-2 px-4 items-center gap-4 self-stretch">
    {icon}
    <Label className={`text-[${themeColor}]`}>{name}</Label>
</div>
}