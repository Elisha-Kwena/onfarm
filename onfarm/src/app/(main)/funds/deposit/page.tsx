// app/dashboard/page.tsx
"use client"

import { useEffect, useState } from 'react';
import Navbar from '@/components/navigation/Navbar';
import DepositBox from '@/components/sections/funds/Deposit';

import DepositTable from '@/components/sections/funds/DepositTable';

import Loader from '@/components/ui/loaders/Loader';
export default function Deposit(){
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

            <Navbar title="Deposit Funds"/>

            <div className="w-full flex flex-col gap-2 mt-24">
                <div className="w-full rounded-md p-2 shadow-lg bg-white">
                    <h1 className="text-green-500 font-bold text-xl text-start pl-4">Deposit Funds</h1>
                </div>
                <div className="w-full mt-4 grid lg:grid-cols-2 grid-cols-1 gap-6">
                    <DepositBox/>
                    <DepositTable/>
                </div>
            </div>
        </div>
    )
}