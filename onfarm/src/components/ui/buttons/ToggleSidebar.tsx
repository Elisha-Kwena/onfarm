"use client"
import DashboardIcon from '@mui/icons-material/Dashboard';
interface ToggleSideBarProps {
  onToggle: () => void;
  isSidebarOpen: boolean;
}

export default function ToggleSideBar({ onToggle, isSidebarOpen }: ToggleSideBarProps) {
  return (
    <button 
      className="flex items-center justify-center shadow-lg p-1 border border-gray-200 rounded-[4px] hover:bg-gray-100 transition-colors"
      onClick={onToggle}
      aria-label={isSidebarOpen ? "Collapse sidebar" : "Expand sidebar"}
    >
      <DashboardIcon className={ isSidebarOpen ? "text-green-600 text-xl" : "text-black text-xl"}/>
    </button>
  )
}