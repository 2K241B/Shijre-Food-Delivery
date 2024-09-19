"use client";

import { axiosInstance } from "@/lib/axios";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

const AdminPage = () => {
    const search = useSearchParams();
    const categoryParam = search.get("category");

    const [foods, setFoods] = useState([]);    

    useEffect(() => {
        const fetch = async () => {
            const { data } = await axiosInstance(`/food?categoryId=${categoryParam}`);
            setFoods(data);
        };

        fetch();
    }, [categoryParam])

    return <div className="p-6">
        {
            foods.map(food => (
                <div key={food._id}>
                    {food.name}
                </div>
            ))
        }
    </div>
}

export default AdminPage;