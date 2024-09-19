"use client"
import { axiosInstance } from "@/lib/axios";
import { useEffect, useState } from "react"
import { Category } from "./category";
import { CreateCategory } from "./create-category";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

export const Sidebar = () => {
    const [lists, setLists] = useState([]);

    useEffect(() => {
        axiosInstance.get("/category/foods").then((res) => setLists(res.data));
    }, [])

    const searchParams = useSearchParams();
    const categoryParam = searchParams.get("category")

    return <div className="flex w-fit h-screen p-6 flex-col items-start gap-10 shrink-0 bg-[#fff]">
        <div className="flex items-center self-stretch">
            <h3 className="text-[22px] font-bold">Food Menu</h3>
        </div>
        <div className="flex flex-col items-start gap-[26px] w-full">
            {lists.map((category) => {
                const isActive = category._id === categoryParam

                return <Link key={category._id} className="self-stretch" href={{ pathname: '/admin', query: { category: category._id } }}>
                    <Category isActive={isActive} key={category._id} name={category.name} />
                </Link>
            })}
            <CreateCategory />
        </div>
    </div>
}