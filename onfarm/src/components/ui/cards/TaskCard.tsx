import Image from "next/image";

export default function TaskCard() {
    return (
        <div className="w-full bg-white p-4 md:p-6 flex flex-col gap-4">
            {/* Image section */}
            <div className="w-full relative flex items-center justify-center overflow-hidden h-48 sm:h-56 md:h-64">
                <Image
                    src="/images/investments/tractor.png"
                    alt="item banner"
                    fill
                    className="object-contain"
                />
            </div>
            
            {/* Content section */}
            <div className="w-full">
                <h1 className="text-black font-bold text-lg sm:text-xl md:text-2xl">Tractor</h1>
                <div className="w-full flex  items-start xs:items-center justify-between mt-2 gap-2 xs:gap-0">
                    <h1 className="text-gray-500 font-extrabold text-base sm:text-lg">KSH 1300</h1>
                    <h1 className="text-lg sm:text-xl text-green-500">Completed</h1>
                </div>
                
                {/* Details section */}
                <div className="w-full flex flex-col gap-2 mt-4">
                    <div className="w-full flex items-start xs:items-center justify-start gap-1 xs:gap-2">
                        <p className="text-gray-500 text-sm font-medium min-w-[120px]">NO : </p>
                        <p className="text-gray-500 text-sm break-all">F2025062465633831</p>
                    </div>
                    <div className="w-full flex items-start xs:items-center justify-start gap-1 xs:gap-2">
                        <p className="text-gray-500 text-sm font-medium min-w-[120px]">Daily Earnings : </p>
                        <p className="text-gray-500 text-sm">KSH 146.00</p>
                    </div>
                    <div className="w-full flex items-start xs:items-center justify-start gap-1 xs:gap-2">
                        <p className="text-gray-500 text-sm font-medium min-w-[120px]">Duration : </p>
                        <p className="text-gray-500 text-sm">16 Days</p>
                    </div>
                    <div className="w-full flex items-start xs:items-center justify-start gap-1 xs:gap-2">
                        <p className="text-gray-500 text-sm font-medium min-w-[120px]">Total Earnings : </p>
                        <p className="text-gray-500 text-sm">KSH 2336.00</p>
                    </div>
                    <div className="w-full flex items-start xs:items-center justify-start gap-1 xs:gap-2">
                        <p className="text-gray-500 text-sm font-medium min-w-[120px]">Profit : </p>
                        <p className="text-gray-500 text-sm">KSH 1036.00</p>
                    </div>
                    <div className="w-full flex items-start xs:items-center justify-start gap-1 xs:gap-2">
                        <p className="text-gray-500 text-sm font-medium min-w-[120px]">Rental Start Time : </p>
                        <p className="text-gray-500 text-sm break-all">2025-06-24 06:56:33</p>
                    </div>
                    <div className="w-full flex items-start xs:items-center justify-start gap-1 xs:gap-2">
                        <p className="text-gray-500 text-sm font-medium min-w-[120px]">Completion Time : </p>
                        <p className="text-gray-500 text-sm break-all">2025-07-10 06:56:33</p>
                    </div>
                </div>

                {/* Task claiming table */}
                <div className="w-full mt-6">
                    <h2 className="text-lg font-bold mb-3 text-gray-600">Earnings History</h2>
                    <div className="w-full overflow-x-auto">
                        <table className="min-w-full bg-gray-100 rounded-lg">
                            <thead>
                                <tr className="bg-gray-200">
                                    <th className="text-left p-2 sm:p-3 font-semibold text-xs sm:text-sm text-gray-500">ID</th>
                                    <th className="text-left p-2 sm:p-3 font-semibold text-xs sm:text-sm text-gray-500">Time</th>
                                    <th className="text-left p-2 sm:p-3 font-semibold text-xs sm:text-sm text-gray-500">Profit</th>
                                    <th className="text-left p-2 sm:p-3 font-semibold text-xs sm:text-sm text-gray-500">Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                {Array.from({ length: 12 }).map((_, index) => (
                                    <tr key={index} className="border-b border-gray-200 hover:bg-gray-50">
                                        <td className="p-2 sm:p-3 text-gray-700 text-xs sm:text-sm">54266</td>
                                        <td className="p-2 sm:p-3 text-gray-700 text-xs sm:text-sm">2025-07-10</td>
                                        <td className="p-2 sm:p-3 text-gray-700 text-xs sm:text-sm">KSH 146.00</td>
                                        <td className="p-2 sm:p-3">
                                            <button className="w-full py-1 px-2 bg-green-600 text-white rounded-md text-xs sm:text-sm font-semibold">
                                                Claimed
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}