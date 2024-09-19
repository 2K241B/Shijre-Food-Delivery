"use client"
import { axiosInstance } from "@/lib/axios";
import { useEffect, useState } from "react"
import { Category } from "./category";
import { CreateCategory } from "./create-category";

export const Sidebar = () => {
    const [lists, setLists] = useState([]);
  
    useEffect(() => {
        axiosInstance.get("/category/foods").then((res) => setLists(res.data));
    }, [])
    
    return <div className="flex w-[402px] h-screen py-[26px] pl-[120px] pr-[24px] flex-col items-start gap-10 shrink-0 bg-[#fff]">
        <div className="flex items-center gap-[171px] self-stretch">
            <h3 className="text-[22px] font-bold">Food Menu</h3>
        </div>
        <div className="flex flex-col items-start gap-[26px] self-stretch">
            {lists.map((item) => {
                return <Category key={item._id} name={item.name}/>
            })}
            <CreateCategory/>
        </div>
    </div>
}