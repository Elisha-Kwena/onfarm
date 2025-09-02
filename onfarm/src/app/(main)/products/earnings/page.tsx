// app/dashboard/page.tsx
"use client"
import { useState,useEffect } from 'react';

import Navbar from '@/components/navigation/Navbar';
import EarningsStats from '@/components/sections/earnings/EarningStats';

import Loader from '@/components/ui/loaders/Loader';
import TaskCard from '@/components/ui/cards/TaskCard';
export default function Earnings(){
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

            <Navbar title="Tasks Center"/>
            
            {/* Your products content here */}
            <div className="w-full flex flex-col gap-2 mt-14">
                <EarningsStats/>

                {/* TASKS */}
                <div className="w-full grid lg:grid-cols-2 grid-cols-1 mt-4">
                    <TaskCard/>
                </div>
            </div>
        </div>
    )
}