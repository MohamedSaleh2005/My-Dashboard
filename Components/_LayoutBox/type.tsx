import { ReactNode } from "react"
import { BsCurrencyExchange } from "react-icons/bs"
import { FaQuestionCircle, FaStar } from "react-icons/fa"
import { IoPersonAddSharp, IoSettingsSharp } from "react-icons/io5"
import { MdChangeCircle, MdDarkMode, MdDashboardCustomize, } from "react-icons/md"

type BaseItem = {
    id: number
    link: string
    icon: ReactNode
}

type SidebarItem = BaseItem & {
    title: string
}
//Side Bar
export const listitems: SidebarItem[] = [
    { id: 1, title: "Dashboard", link: "/", icon: <MdDashboardCustomize />, },
    { id: 2, title: "Converter", link: "/converter", icon: <MdChangeCircle />, },
    { id: 3, title: "Currencies", link: "/currencies", icon: <BsCurrencyExchange /> },
    { id: 4, title: "Favourite", link: "/favourite", icon: <FaStar /> },
    { id: 5, title: "Settings", link: "/settings", icon: <IoSettingsSharp /> },
    { id: 6, title: "About", link: "/about", icon: <FaQuestionCircle /> },
] 

type NavItem = BaseItem & {
    label: string
}
//Nav Bar
export const navitems: NavItem[] = [
    { id: 2, link: "/settings", label: "Settings", icon: <IoSettingsSharp /> },
    { id: 3, link: "/register", label: "Register", icon: <IoPersonAddSharp /> },
]
