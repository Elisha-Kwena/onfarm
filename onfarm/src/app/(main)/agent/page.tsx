// app/dashboard/page.tsx
"use client"
import { useEffect, useState } from 'react';


import Navbar from '@/components/navigation/Navbar';
import AgentStats from '@/components/sections/agents/AgentStats';
import SubordinateCards from '@/components/sections/agents/SubCards';
import Invites from '@/components/sections/agents/Invites';
import Loader from '@/components/ui/loaders/Loader';
// import { constants } from 'node:crypto';
export default function Agent(){
    const [loading, setLoading] = useState<boolean>(true);


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

            <Navbar title="My Subordinates"/>
            
            
            <div className="w-full flex flex-col gap-2 mt-14">
                <AgentStats/>
                <div className="w-full">
                    <SubordinateCards/>
                </div>
                <div className="w-full">
                    <Invites/>
                </div>
            </div>
        </div>
    )
}