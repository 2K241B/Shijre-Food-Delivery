import { FacebookIcon, InstagramIcon, TwitterXIcon } from "@/components/icons";

export const NAVBAR_MENU_ITEMS = [
    {
        name: "НҮҮР",
        href: "/"
    },
    {
        name: "ХООЛНЫ ЦЭС",
        href: "/category"
    },
    {
        name: "ХҮРГЭЛТИЙН БҮС",
        href: "/delivery-zone"
    },
]

export const FOOTER_NAV_MENU_ITEMS = [
    {
        name: "Нүүр",
        href: "/"
    },
    {
        name: "Холбоо барих",
        href: "/contact"
    },
    {
        name: "Хоолны цэс",
        href: "/category"
    },
    {
        name: "Үйлчилгээний нөхцөл",
        href: "/terms-of-service"
    },
    {
        name: "Хүргэлтийн бүс",
        href: "/delivery-zone"
    },
    {
        name: "Нууцлалын бодлого",
        href: "/privacy-policy"
    },
];

export const SOCIAL_PLATFORMS = [
    {
        name: "Facebook",
        icon: <FacebookIcon/>,
        href: "https://www.facebook.com/"
    },
    {
        name: "Instagram",
        icon: <InstagramIcon/>,
        href: "https://www.instagram.com/"
    },
    {
        name: "X",
        icon: <TwitterXIcon/>,
        href: "https://x.com/home"
    },
]
