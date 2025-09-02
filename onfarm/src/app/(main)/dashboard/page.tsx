// app/dashboard/page.tsx
"use client"
import { useEffect, useState } from 'react';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';

// import { useSidebar } from "@/context/SidebarContext"
// import ToggleSideBar from "@/components/ui/buttons/ToggleSidebar"

import Stats from "@/components/sections/dashboard/Stats"
import TasksTable from '@/components/sections/dashboard/TasksTable';

import Navbar from '@/components/navigation/Navbar';
import Support from '@/components/ui/DashboardCards/Support';

import Loader from '@/components/ui/loaders/Loader';


export default function Dashboard(){
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

            <Navbar title="Dashboard Overview"/>
            
            {/* Your dashboard content here */}
            <div className="w-full flex flex-col gap-2 mt-14">
                <Stats/>
                <div className="w-full mt-8 shadow flex flex-col lg:flex-row items-start lg:items-center justify-start gap-2 lg:gap-12 p-4 pl-6 rounded-md bg-red-600">
                    <div className="notification flex items-center justify-center">
                        <NotificationsActiveIcon className='!text-6xl'/>
                    </div>
                    <div className="flex flex-col items-start justify-start">
                        <h1 className="text-white text-2xl font-extrabold">Notification</h1>
                        <p className='text-md text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti sit omnis, harum eum blanditiis corporis minima natus consectetur ex illum? Rem dolor, magnam architecto fuga exercitationem cumque doloremque aliquam accusantium. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa necessitatibus at sit dolor modi nisi? Non nulla aliquam, quidem aut labore amet optio exercitationem, at ipsa facere, iusto ab quis!</p>
                    </div>
                </div>

                <div className="w-full shadow bg-white p-4 mt-6 rounded-md">
                    <div className="top w-full flex items-center justify-start">
                        <h1 className="text-xl lg:text-2xl font-extrabold text-black">Tasks</h1>
                    </div>
                    <div className="full">
                        <TasksTable/>
                    </div>
                </div>
                <Support/>
            </div>
        </div>
    )
}