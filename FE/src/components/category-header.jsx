export const CategoryHeader = ({ name, isActive }) => {
    return <div
        className={`flex py-2 px-4 justify-center items-center gap-2 flex-1 rounded-[8px] border border-solid ${isActive ? "bg-[#18BA51] text-[#fff]" : "border border-[#D6D8DB]"}`}>{name}</div>
}