"use client"
import { ReactNode, useState, useEffect } from "react";
import { SidebarProvider } from "@/context/SidebarContext";
import SideBar from "@/components/navigation/Sidebar";
import { useSidebar } from "@/context/SidebarContext";


interface MainLayoutProps {
  children: ReactNode
}

function LayoutContent({ children }: MainLayoutProps) {
  const { isSidebarOpen, toggleSidebar } = useSidebar();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    
    checkIfMobile();
    window.addEventListener('resize', checkIfMobile);
    
    return () => {
      window.removeEventListener('resize', checkIfMobile);
    };
  }, []);

  return (
    <main className="w-full h-screen bg-gradient-to-b from-blue-50 to-gray-100 relative overflow-hidden">
      <div className="w-full h-full flex">
        {/* Sidebar for large screens */}
        <div className={`h-full hidden lg:block sidebar transition-all duration-300 ease-in-out ${
          isSidebarOpen ? "w-[300px]" : "w-[70px]"
        }`}>
          <SideBar isOpen={isSidebarOpen} onToggle={toggleSidebar} />
        </div>
        
        {/* Main content */}
        <div className="flex-1 h-full overflow-auto relative z-0">
          {children}
        </div>
        
        {/* Mobile overlay sidebar */}
        {isMobile && (
          <>
            {/* Backdrop overlay */}
            {isSidebarOpen && (
              <div 
                className="fixed inset-0 bg-black/20 bg-opacity-50 z-40 lg:hidden"
                onClick={toggleSidebar}
              />
            )}
            
            {/* Sidebar for mobile */}
            <div className={`fixed top-0 left-0 h-full lg:hidden transform transition-transform duration-300 ease-in-out z-50 ${
              isSidebarOpen ? "translate-x-0 w-[300px]" : "-translate-x-full w-[300px]"
            }`}>
              <SideBar isOpen={isSidebarOpen} onToggle={toggleSidebar} />
            </div>
          </>
        )}
      </div>
      
      {/* Mobile toggle button */}
      {/* {isMobile && (
        <button
          onClick={toggleSidebar}
          className="fixed bottom-6 right-6 w-14 h-14 rounded-full bg-blue-600 text-white shadow-lg flex items-center justify-center z-30 lg:hidden"
          aria-label="Toggle sidebar"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isSidebarOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      )} */}
    </main>
  );
}

export default function MainLayout({ children }: MainLayoutProps) {
  return (
    <SidebarProvider>
      <LayoutContent>{children}</LayoutContent>
    </SidebarProvider>
  );
}