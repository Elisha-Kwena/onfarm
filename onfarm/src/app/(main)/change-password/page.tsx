// app/dashboard/page.tsx
"use client"
import { useEffect, useState } from 'react';
import Loader from '@/components/ui/loaders/Loader';

import Navbar from '@/components/navigation/Navbar';

import ChangePasswordForm from '@/components/sections/auth/PasswordChange';
export default function ChangePassword(){
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

            <Navbar title="Change Password"/>

            <div className="w-full flex flex-col gap-2 mt-12">
                <div className="w-full rounded-md p-2 shadow-lg bg-white">
                    <h1 className="text-green-500 font-bold text-xl text-start pl-4">Change Password</h1>
                </div>
                <div className="w-full mt-4">
                    <ChangePasswordForm/>
                </div>
            </div>
        </div>
    )
}