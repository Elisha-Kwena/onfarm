import Image ,{ StaticImageData } from "next/image"
import BuyButton from "../buttons/BuyButton"

interface ProductsProps{
    banner:string | StaticImageData;
    title:string;
    price:number;
    dailyEarnings:number;
    days?:number;
    type?:string
}



export default function ProductCard({banner,title,price,dailyEarnings,days,type}:ProductsProps){
    return(
        <>
        <div className="flex flex-col gap-2 p-4 bg-white rounded-md shadow-lg">
            <div className="w-full items-center h-[200px] justify-center overflow-hidden relative">
                <Image
                src={banner}
                alt={title}
                fill
                className="object-contain transition-all duration-300 ease-in-out hover:scale-125"
                />
            </div>
            <h1 className="text-black text-center capitalize">{title}</h1>
            <h1 className="text-green-500 text-center capitalize">KSH {price.toFixed(2)}</h1>
            <div className="flex-grow flex flex-col">
                <div className="w-full flex items-center justify-center gap-2">
                    <h2 className="text-gray-500">Daily Earnings : </h2>
                    <h2 className="text-gray-500">KSH {dailyEarnings.toFixed(2)}</h2>
                </div>
                <div className="w-full flex items-center justify-center gap-2">
                    <h2 className="text-gray-500">Duration : </h2>
                    {days ? (
                        <h2 className="text-gray-500">{days} Days</h2>
                    ) : (<h2 className="text-gray-500">Lifetime</h2>)}
                    
                </div>
                <div className="w-full flex items-center justify-center gap-2">
                    <h2 className="text-gray-500">Total Earnings : </h2>
                    {days ? (
                        <h2 className="text-gray-500">KSH {(days * dailyEarnings).toFixed(2)}</h2>
                    ): ""}
                    
                </div>
                <div className="w-full flex items-center justify-center gap-2">
                    <h2 className="text-gray-500">Profit : </h2>
                    {days ? (
                        <h2 className="text-gray-500">KSH {((days * dailyEarnings) - price).toFixed(2)}</h2>
                    ): ""}
                    
                </div>
            </div>
            <div className="w-full">
                <BuyButton/>
            </div>
        </div>
        </>
    )
}