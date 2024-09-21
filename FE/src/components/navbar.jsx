import { Pinecone } from "./icons/pinecone-icon"
import { CustomLabel } from "./customLabel"
import { SearchInput } from "./searchInput"
import { ShoppingBasketIcon, UserCircle } from "lucide-react"

export const Navbar = ({className}) => {
    return <div className="flex max-w-[1440px] flex-col justify-center items-center m-auto">
        <div className="flex w-[1258px] p-6 justify-between items-center">
            <div className="flex items-center gap-6">
                <Pinecone/>
                <CustomLabel>НҮҮР</CustomLabel>
                <CustomLabel>ХООЛНЫ ЦЭС</CustomLabel>
                <CustomLabel>ХҮРГЭЛТИЙН БҮС</CustomLabel>
            </div>
            <div className="flex items-center gap-2">
                <SearchInput placeholder="Хайх" name="navbarSearch" showIcon={true}/>
                <div className="flex gap-2 items-center px-4 py-2">
                    <ShoppingBasketIcon/>
                    <CustomLabel>Сагс</CustomLabel>
                </div>
                <div className="flex gap-2 items-center px-4 py-2">
                    <UserCircle/>
                <CustomLabel>Нэвтрэх</CustomLabel>
                </div>
            </div>
        </div>
    </div>
}