// app/dashboard/page.tsx
"use client"
import { useEffect, useState } from 'react';
import Loader from '@/components/ui/loaders/Loader';
// import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';

// import { useSidebar } from "@/context/SidebarContext"
// import ToggleSideBar from "@/components/ui/buttons/ToggleSidebar"

// import Stats from "@/components/sections/dashboard/Stats"
// import TasksTable from '@/components/sections/dashboard/TasksTable';

import Navbar from '@/components/navigation/Navbar';
// import Support from '@/components/ui/DashboardCards/Support';
// import DashboardSkeleton from '@/components/sections/dashboard/DashboardSkeleton';

import Dividend from '@/components/sections/distributor/Dividends';
import Pending from '@/components/sections/distributor/Pending';
import DistributorTable from '@/components/sections/distributor/DistributorTable';
export default function Distributor(){
    const [loading,setLoading] = useState<boolean>(true)


    useEffect(() => {
        const timer = setTimeout(() =>{
            setLoading(false);
        },2000 )

        return () => clearTimeout(timer);
    },[] );


    if (loading){
        return <Loader/>
    }
    return(
        <div className="p-4">

            <Navbar title="Company Dividends"/>
            
            {/* Your dashboard content here */}
            <div className="w-full flex flex-col gap-2 mt-14">
                <div className="w-full grid lg:grid-cols-2 grid-cols-1 gap-4 lg:gap-8">
                    <Dividend/>
                    <Pending/>
                </div>
                <div className="w-full mt-4">
                    <DistributorTable/>
                </div>

            </div>
        </div>
    )
}