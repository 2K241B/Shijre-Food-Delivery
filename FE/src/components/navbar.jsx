import { Pinecone } from "./icons/pinecone-icon"
import { Label } from "./ui/label"
import { SearchInput } from "./searchInput"
import { ShoppingBasketIcon, UserCircle } from "lucide-react"

export const Navbar = ({className}) => {
    return <div className="flex max-w-[1440px] flex-col justify-center items-center m-auto">
        <div className="flex w-[1258px] p-6 justify-between items-center">
            <div className="flex items-center gap-6">
                <Pinecone/>
                <Label>НҮҮР</Label>
                <Label>ХООЛНЫ ЦЭС</Label>
                <Label>ХҮРГЭЛТИЙН БҮС</Label>
            </div>
            <div className="flex items-center gap-2">
                <SearchInput placeholder="Хайх" showIcon={true}/>
                <div className="flex gap-2 items-center px-4 py-2">
                    <ShoppingBasketIcon/>
                    <Label>Сагс</Label>
                </div>
                <div className="flex gap-2 items-center px-4 py-2">
                    <UserCircle/>
                <Label>Нэвтрэх</Label>
                </div>
            </div>
        </div>
    </div>
}