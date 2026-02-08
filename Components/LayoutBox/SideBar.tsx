import Image from "next/image"
import SideNavigat from "./SideNavigat"

interface IsOpen {
    isOpen : boolean
    onMenuClick: () => void;
}
export default function SideBar({onMenuClick , isOpen}: IsOpen) {
    
 
    return (
        
        <div className={`${isOpen ? "translate-x-0" : "-translate-x-full"} Special shadow flex flex-col mt-10  fixed md:relative md:bottom-10 h-screen  w-40 py-1 md:translate-x-0 transition-all duration-300`}>
            <div className="flex items-center ml-4">
                <Image src="/logo.png" alt="Logo" width={35} height={35} />
                <h1 className="font-bold text-lg">VITURAL</h1>
            </div>

          <SideNavigat onClose={onMenuClick}/>
        </div>
    )
}
