"use client"
import { Card } from "@/components/card";
import { CategoryHeader } from "@/components/category-header";
import { useCategoriesWithFoods } from "@/hooks/useCategoriesWithFoods";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

const CategoryPage = () => {
    const search = useSearchParams();
    const categoryId = search.get("category");
    const { response, loading, error } = useCategoriesWithFoods();
    const categoryData = response.find(category => category._id === categoryId);
    const { name, foods } = categoryData || { name: "", foods: [] };

    return <div className="flex flex-col gap-14 m-auto my-20 w-fit">
        <div className="grid grid-cols-4 gap-6 w-[1200px]">
            {response &&
                response.map((category) => {
                    const isActive = category._id === categoryId
                    return <Link
                        className="flex-1"
                        key={category._id}
                        href={{ pathname: '/category', query: { category: category._id } }}>
                        <CategoryHeader
                            name={category.name}
                            isActive={isActive} />
                    </Link>
                })
            }
        </div>
        <div className="grid grid-cols-4 gap-6">
            {foods &&
                foods.map((food) => {
                    return <Card
                        key={food._id}
                        imageSrc={food.image}
                        mainPrice={food.price}
                        discountPercent={food.discount}
                        foodName={food.name}
                        alt={food.name}
                    />
                })
            }
        </div>
    </div>
}

export default CategoryPage;