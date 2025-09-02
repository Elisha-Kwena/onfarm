"use client"
import { useState, useRef, useEffect } from "react";
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"

import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { sideBarMenuItems } from "@/lib/data/Sidebar";

import ToggleSideBar from "../ui/buttons/ToggleSidebar"

interface SideBarProps {
  isOpen: boolean;
  onToggle: () => void;
}

interface PopupPosition {
  top: number;
  left: number;
}

// Define a type guard to check if an item has a link
function hasLink(item: any): item is { link: string } {
  return item.link !== undefined;
}

export default function SideBar({ isOpen, onToggle }: SideBarProps) {
  const [currentYear] = useState(new Date().getFullYear())
  const [openSubmenu, setOpenSubMenu] = useState<string | null>(null)
  const [heights, setHeights] = useState<Record<string, number>>({})
  const [popupMenu, setPopupMenu] = useState<string | null>(null)
  const [popupPosition, setPopupPosition] = useState<PopupPosition>({ top: 0, left: 0 })
  const submenuRefs = useRef<{ [key: string]: HTMLDivElement | null }>({})
  const menuItemRefs = useRef<{ [key: string]: HTMLButtonElement | null }>({})
  const pathname = usePathname()

  const toggleSubmenu = (menuId: string, event: React.MouseEvent) => {
    if (isOpen) {
      // Regular behavior when sidebar is open
      if (openSubmenu === menuId) {
        setOpenSubMenu(null)
      } else {
        setOpenSubMenu(menuId)
      }
    } else {
      // Show popup when sidebar is collapsed
      const buttonRect = event.currentTarget.getBoundingClientRect()
      setPopupPosition({
        top: buttonRect.top,
        left: buttonRect.right + 10 // Show popup to the right of the button
      })
      
      if (popupMenu === menuId) {
        setPopupMenu(null)
      } else {
        setPopupMenu(menuId)
      }
    }
  }

  // Close popup when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Element | null;
      if (popupMenu && target && !target.closest('.menu-popup') && !target.closest('.menu-item')) {
        setPopupMenu(null)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [popupMenu])

  // Calculate heights for each submenu
  useEffect(() => {
    if (!isOpen) return;
    
    const newHeights: { [key: string]: number } = {};
    sideBarMenuItems.forEach(item => {
      if (item.submenu && submenuRefs.current[item.id]) {
        if (submenuRefs.current[item.id]) {
          newHeights[item.id] = submenuRefs.current[item.id]!.scrollHeight;
        }
      }
    });
    setHeights(newHeights);
  }, [isOpen]);

  // Close all submenus when sidebar collapses
  useEffect(() => {
    if (!isOpen) {
      setOpenSubMenu(null);
    }
  }, [isOpen]);

  return (
    <>
      <div className={`flex flex-col gap-2 bg-white rounded-md shadow-lg p-2 h-full transition-all duration-300 ease-in-out ${
        isOpen ? "w-[300px]" : "w-[64px]"
      }`}>
        <div className="w-full flex items-center justify-between gap-1">
          <div className="logo">
            <Link href="/" className="flex items-start justify-between gap-1">
              <div className="w-12 h-12 relative flex items-center justify-center">
                <Image
                  src="/logo.png"
                  alt="onfarms logo"
                  fill
                  className="object-contain"
                />
              </div>
              {isOpen && (
                <div className="flex items-center justify-start pt-2">
                  <h1 className="text-4xl font-extrabold text-red-600">on</h1>
                  <h1 className="text-4xl font-extrabold text-green-600">Farms</h1>
                </div>
              )}
            </Link>
          </div>
          {isOpen && (
            <div className="flex items-center justify-center lg:hidden">
              <ToggleSideBar onToggle={onToggle} isSidebarOpen={isOpen} />
            </div>
          )}
        </div>

        {/* Profile - Only show when sidebar is open */}
        
          <div className="w-full flex p-1 items-center justify-start gap-2 my-3">
            <div className="w-12 h-12 relative flex items-center justify-center">
                <Image 
                src="/images/icons/wallet.png"
                alt="wallet"
                fill
                />
            </div>
            {isOpen && (
            <div className="flex-col gap-1">
              <h1 className="text-black">
                ID:
                <span className="font-extrabold">23846</span>
              </h1>
              <p className="text-black text-sm">0707575589</p>
            </div>
            )}
          </div>
        

        {/* sidebarmenu */}
        <div className="flex-grow overflow-y-auto flex justify-start items-start flex-col gap-1">
          {sideBarMenuItems.map((item) => {
            const IconComponent = item.icon
            const isActive = pathname === item.link
            const isSubmenuOpen = openSubmenu === item.id && isOpen
            const hasSubmenu = item.submenu
            const hasLink = item.link !== undefined
            const submenuHeight = heights[item.id] || 0

            return (
              <div key={item.id} className="w-full">
                {hasSubmenu ? (
                  <div className="w-full">
                    <button 
                      ref={el => { menuItemRefs.current[item.id] = el; }}
                      className={`w-full flex items-center justify-between mb-[2px] p-2 rounded-md transition-all duration-300 ease-in-out menu-item ${
                        isSubmenuOpen ? "bg-green-200" : "hover:bg-gray-100"
                      } ${isOpen ? "py-4" : "py-3 justify-center"}`}
                      onClick={(e) => toggleSubmenu(item.id, e)}
                    >
                      <div className="flex items-center justify-start">
                        <IconComponent className={`${isOpen ? "mr-3" : ""} ${
                          isSubmenuOpen ? "text-green-600" : "text-gray-500"
                        }`}/>
                        {isOpen && (
                          <span className={`${
                            isSubmenuOpen ? "text-green-600 font-medium" : "text-gray-400"
                          }`}>{item.label}</span>
                        )}
                      </div>
                      {isOpen && (
                        <span className="flex items-center justify-center">
                          <ArrowDropDownIcon className={`transition-all duration-300 ease-in-out ${
                            isSubmenuOpen ? 'rotate-180 text-green-600' : 'text-gray-500'
                          }`}/>
                        </span>
                      )}
                    </button>
                    
                    {/* Animated submenu container - Only when sidebar is open */}
                    {isOpen && (
                      <div 
                        ref={el => { submenuRefs.current[item.id] = el; }}
                        className="overflow-hidden transition-all duration-300 ease-in-out"
                        style={{
                          maxHeight: isSubmenuOpen ? `${submenuHeight}px` : '0px',
                          opacity: isSubmenuOpen ? 1 : 0
                        }}
                      >
                        <div className="w-[80%] ml-auto flex flex-col items-start justify-start gap-1 pt-1">
                          {item.submenu.map((subitem) => {
                            const isSubItemActive = pathname === subitem.link
                            
                            return (
                              <Link 
                                key={subitem.id} 
                                href={subitem.link}
                                className={`w-full p-2 rounded-md transition-all duration-300 ease-in-out ${
                                  isSubItemActive 
                                    ? "bg-green-200 text-green-600 font-medium" 
                                    : "text-gray-400 hover:bg-green-200 hover:text-green-600"
                                }`}
                              >
                                <span>{subitem.label}</span>
                              </Link>
                            )
                          })}
                        </div>
                      </div>
                    )}
                  </div>
                ) : hasLink ? (
                  // Render as Link if it has a direct link
                  <Link 
                    href={item.link!}
                    className={`w-full flex items-center justify-start p-2 rounded-md transition-all duration-300 ease-in-out ${
                      isActive 
                        ? "bg-green-200 text-green-600 font-medium" 
                        : "text-gray-400 hover:bg-gray-100"
                    } ${isOpen ? "py-5" : "py-3 justify-center"}`}
                  >
                    <IconComponent className={`${isOpen ? "mr-3" : ""} ${
                      isActive ? "text-green-600" : "text-gray-500"
                    }`}/>
                    {isOpen && <span>{item.label}</span>}
                  </Link>
                ) : (
                  // Render as button if it doesn't have a direct link
                  <button
                    className={`w-full flex items-center justify-start p-2 rounded-md transition-all duration-300 ease-in-out ${
                      "text-gray-400 hover:bg-gray-100"
                    } ${isOpen ? "py-5" : "py-3 justify-center"}`}
                    disabled={true}
                  >
                    <IconComponent className={`${isOpen ? "mr-3" : ""} ${
                      "text-gray-500"
                    }`}/>
                    {isOpen && <span>{item}</span>}
                  </button>
                )}
              </div>
            )
          })}
        </div>

        {/* Toggle button for collapsed state */}
        {!isOpen && (
          <div className="mt-auto flex justify-center">
            <ToggleSideBar onToggle={onToggle} isSidebarOpen={isOpen} />
          </div>
        )}

        {/* sidebar footer - Only show when sidebar is open */}
        {isOpen && (
          <div className="w-full flex-col mt-auto">
            <p className="text-green-300 text-sm mt-1">Philippine Agricultural Investments</p>
            <p className="text-gray-500 text-sm">&copy; {currentYear} All Rights Reserved</p>
          </div>
        )}
      </div>

      {/* Popup menu for collapsed sidebar */}
      {!isOpen && popupMenu && (
        <div 
          className="fixed bg-white rounded-md shadow-lg p-3 menu-popup z-50 border border-gray-200"
          style={{
            top: `${popupPosition.top}px`,
            left: `${popupPosition.left}px`,
            minWidth: '200px'
          }}
        >
          {sideBarMenuItems
            .find(item => item.id === popupMenu)
            ?.submenu?.map((subitem) => {
              const isSubItemActive = pathname === subitem.link
              
              return (
                <Link 
                  key={subitem.id} 
                  href={subitem.link}
                  className={`block p-2 rounded-md transition-all duration-300 ease-in-out mb-1 last:mb-0 ${
                    isSubItemActive 
                      ? "bg-green-200 text-green-600 font-medium" 
                      : "text-gray-400 hover:bg-green-200 hover:text-green-600"
                  }`}
                  onClick={() => setPopupMenu(null)}
                >
                  {subitem.label}
                </Link>
              )
            })}
        </div>
      )}
    </>
  )
}