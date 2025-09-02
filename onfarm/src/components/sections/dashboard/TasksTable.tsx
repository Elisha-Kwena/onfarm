import Image from "next/image"

import BuyButton from "@/components/ui/buttons/BuyButton"
import { products } from "@/lib/data/Products"


export default function TasksTable(){
    return(
        <>
        <div className="w-full mt-4 overflow-x-auto">
          <table className="w-full min-w-[600px]">
            <thead>
                <tr className="border-b border-gray-200">
                    <th className="text-gray-600 p-3 text-left">Product</th>
                    <th className="text-gray-600 p-3 text-left hidden sm:table-cell">Product Price</th>
                    <th className="text-gray-600 p-3 text-left hidden md:table-cell">Earnings Everyday</th>
                    <th className="text-gray-600 p-3 text-left hidden lg:table-cell">Duration Days</th>
                    <th className="text-gray-600 p-3 text-left">Total Profit</th>
                    <th className="text-gray-600 p-3 text-left">Action</th>
                </tr>
            </thead>

            <tbody>
                {products.map((product, index) =>(
                    <tr 
                    key={index}
                    className="border-b border-gray-200 hover:bg-gray-50">
                        <td className="p-3">
                            <div className="flex items-center justify-start gap-2 md:gap-4">
                                <div className="w-16 h-16 md:w-20 md:h-20 relative flex-shrink-0">
                                    <Image
                                        src={product.banner}
                                        alt={product.label}
                                        fill
                                        className="object-contain"
                                        />
                                </div>
                                <div>
                                    <p className="text-black text-lg">{product.label}</p>
                                    <div className="sm:hidden mt-1">
                                        <p className="text-gray-500 text-sm">KSH {product.price}</p>
                                        <p className="text-gray-500 text-sm">KSH {product.earnings} daily</p>
                                        <p className="text-gray-500 text-sm">{product.days} Days</p>
                                    </div>
                                </div>
                            </div>
                        </td>
                        <td className="p-3 hidden sm:table-cell">
                            <p className="text-gray-500">KSH {product.price}</p>
                        </td>
                        <td className="p-3 hidden md:table-cell">
                            <p className="text-gray-500">KSH {product.earnings}</p>
                        </td>
                        <td className="p-3 hidden lg:table-cell">
                            <p className="text-gray-500">{product.days} Days</p>
                        </td>
                        <td className="p-3">
                            {product.days ?(
                                <p className="text-gray-500">KSH {product.earnings * product.days}.00</p>
                            ) :"N/A" }
                        </td>
                        <td className="p-3">
                            <BuyButton/>
                        </td>
                    </tr>
                ) )}

            </tbody>
          </table>
        </div>
        </>
    )
}