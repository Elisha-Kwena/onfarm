// components/navigation/Navbar.tsx
import ToggleSideBar from "../ui/buttons/ToggleSidebar"
import { useSidebar } from "@/context/SidebarContext"

interface NavbarProps {
  title: string;
}

export default function Navbar({ title }: NavbarProps){
    const {isSidebarOpen, toggleSidebar} = useSidebar()
    return(
        <div className="fixed w-full top-0 pt-4 pb-2 flex items-center justify-start gap-4 mb-4 bg-gradient-to-b from-blue-50 to-gray-100 z-50 pl-[5px] ">
             <ToggleSideBar 
                onToggle={toggleSidebar} 
                isSidebarOpen={isSidebarOpen} 
            />
            <h1 className="text-2xl lg:text-4xl font-bold text-black">{title}</h1>
        </div>
    )
}