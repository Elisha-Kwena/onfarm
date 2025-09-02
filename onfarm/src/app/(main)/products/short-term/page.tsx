// app/dashboard/page.tsx
"use client"
import { useState,useEffect } from 'react';

import Navbar from '@/components/navigation/Navbar';
import Tasks from '@/components/sections/products/Tasks';


import ProductCard from '@/components/ui/cards/ProductCard';
import { products } from '@/lib/data/Products';

import Loader from '@/components/ui/loaders/Loader';
export default function ShortTermProducts(){
    const [loading,setLoading] = useState<boolean>(true)


    useEffect(() => {
        const timer = setTimeout(() =>{
            setLoading(false);
        },2000 )

        return () => clearTimeout(timer);
    },[] );
    
    const ShortTermProducts = products.filter(product => product.type.toLowerCase() === "short term");

    if (loading){
        return <Loader/>
    }


    return(
        <div className="p-4">

            <Navbar title="Short Term Investments"/>
            
            {/* Your products content here */}
            <div className="w-full flex flex-col gap-2 mt-14">
            <Tasks/>

            <div className="w-full grid lg:grid-cols-4 grid-cols-1 gap-4 mt-3">
                {ShortTermProducts.map((product, index) =>(
                    <ProductCard
                    key={index}
                    banner={product.banner}
                    title={product.label}
                    price={product.price}
                    days={product.days}
                    dailyEarnings={product.earnings}
                    type={product.type}
                    />
                ))}
                
            </div>

            </div>
        </div>
    )
}